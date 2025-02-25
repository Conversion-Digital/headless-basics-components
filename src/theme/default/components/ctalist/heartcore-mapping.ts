import {
  DynamicDataCmsProperties,
  LanguageSite,
  PageAndSingleComponentDetails,
  filterSubComponentData,
  loadSingleComponentGraphQLData,
  log,
  logPrefix,
  processRawUrlsOnServer,
} from "@conversiondigital/headless-basics-data/src"

export async function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  const content = pageAndComponentCombo?.component?.data?.content as any;
  log.trace(`${logPrefix()}[mapCtaListData][0]data.content.children.edges > `, content?.children?.edges?.length);
  log.trace(`${logPrefix()}[mapCtaListData][1][${pageAndComponentCombo?.page.preliminarySlug}][${pageAndComponentCombo?.page.source}]`);

  // Validate data presence
  const edges = validateEdges(pageAndComponentCombo);
  if (!edges) {
    return null;
  }

  // Filter subcomponent data
  let matchingDataArray = filterSubComponentData(edges, 'CTAList');

  // Handle recursive call scenario
  const recursiveResult = handleRecursiveCall(pageAndComponentCombo, matchingDataArray);
  if (recursiveResult) {
    log.trace(`${logPrefix()}[mapCtaListData][2][${pageAndComponentCombo?.page.preliminarySlug}] recursiveResult :::: `);
    return recursiveResult;
  }


  // Find matching result by sortOrder
  const matchingResult = findMatchingResultBySortOrder(matchingDataArray, pageAndComponentCombo);
  // Fetch global data source if applicable
  const globalDataResult = await handleGlobalDataSource(matchingResult, pageAndComponentCombo);

  if (globalDataResult) {
    log.trace(`${logPrefix()}[mapCtaListData][6][${pageAndComponentCombo?.page.preliminarySlug}] globalDataResult :::: `);
    return globalDataResult;
  }

  // Add additional information to matching result
  try {
    augmentMatchingResult(matchingResult);
  } catch (err: any) {
    log.error(`${logPrefix()}[mapCtaListData][error][${pageAndComponentCombo?.page.preliminarySlug}] Failed to fetch additional data: ${err}`, err?.stack);
  }

  // Convert URLs to friendly format
  return await urlToFriendly(matchingResult, pageAndComponentCombo?.page.languageSite);
}

/**
 * Validate edges in the data and log errors if missing.
 */
function validateEdges(pageAndSingleComponentDetails: PageAndSingleComponentDetails) {
  const content = pageAndSingleComponentDetails?.component?.data?.content as any;
  if (!content?.children?.edges) {
    log.error(`${logPrefix()}[validateEdges][a][${pageAndSingleComponentDetails?.page.preliminarySlug}] Could not find a data query location for CTAList`);
    return null;
  }
  const edges = content.children.edges;
  log.trace(`${logPrefix()}[validateEdges][2][${pageAndSingleComponentDetails?.page.preliminarySlug}] edges :::: ${edges.length}`);
  return edges;
}

/**
 * Handle recursive calls by checking if the content type matches 'cTAList'.
 * A recursive call is when a Global data source was used the first time around. This check inside the recursive call on 2nd pass must detect if the content type is 'cTAList'.
 */
function handleRecursiveCall(pageAndSingleComponentDetails: PageAndSingleComponentDetails, matchingDataArray: any[]) {
  const content = pageAndSingleComponentDetails?.component?.data?.content as any;
  if (!pageAndSingleComponentDetails?.component?.data) {
    log.error(`${logPrefix()}[handleRecursiveCall][error][${pageAndSingleComponentDetails?.page.preliminarySlug}] component data is undefined`);
    return null;
  }
  log.trace(`${logPrefix()}[handleRecursiveCall][1][${pageAndSingleComponentDetails?.page.preliminarySlug}][${pageAndSingleComponentDetails?.page?.source}] contentTypeAlias :::: `, pageAndSingleComponentDetails?.component?.data.content);
  if (matchingDataArray.length === 0 && content?.contentTypeAlias === 'cTAList') {
    log.trace(`${logPrefix()}[handleRecursiveCall][2][${pageAndSingleComponentDetails?.page.preliminarySlug}] recursive call > urlToFriendly`);
    return urlToFriendly(content, pageAndSingleComponentDetails?.page?.languageSite);
  }
  return null;
}

/**
 * Filter matching data by sortOrder and log the result.
 */
function findMatchingResultBySortOrder(matchingDataArray: any[], pageAndSingleComponentDetails: PageAndSingleComponentDetails) {
  let matchingResult: any = null;
  if (matchingDataArray.length > 0) {
    const filteredBySortOrder = matchingDataArray.filter((item) => item?.sortOrder === pageAndSingleComponentDetails?.component?.sortOrder);
    if (filteredBySortOrder.length === 1) {
      matchingResult = filteredBySortOrder[0];
    }
    log.trace(`${logPrefix()}[findMatchingResultBySortOrder][4][${pageAndSingleComponentDetails?.page.preliminarySlug}] matchingResult :::: ${matchingResult?.datasource?.url}`, matchingResult?.__typename, );
  }
  return matchingResult;
}

/**
 * Fetch global data source for the matching result and return processed data.
 */
async function handleGlobalDataSource(matchingResult: any, pageAndSingleComponentDetails: PageAndSingleComponentDetails) {
  if (matchingResult && matchingResult?.datasource?.url) {
    log.trace(`${logPrefix()}[mapCtaListData][5][${pageAndSingleComponentDetails?.page.preliminarySlug}] matchingResult :::: entering global data source ${matchingResult?.datasource?.url}`);
    try {
      pageAndSingleComponentDetails.page.source += '> handleGlobalDataSource()';

      const dataItem = createDataItem(matchingResult);
      const data = await loadSingleComponentGraphQLData(dataItem, pageAndSingleComponentDetails.page, matchingResult?.datasource?.url);

      if (!data) {
        log.trace(`${logPrefix()}[mapCtaListData][7][${pageAndSingleComponentDetails?.page.preliminarySlug}] data is null`);
        return null;
      }

      const globalItems = enrichGlobalData(data, matchingResult);
      log.trace(`${logPrefix()}[mapCtaListData][8][${pageAndSingleComponentDetails?.page.preliminarySlug}] globalItems :::: about to lookup url`);
      return await urlToFriendly(globalItems, pageAndSingleComponentDetails?.page.languageSite);
    } catch (err: any) {
      log.error(`${logPrefix()}[mapCtaListData][error][${pageAndSingleComponentDetails?.page.preliminarySlug}] Failed to fetch data from external source: ${err}`, matchingResult?.datasource?.url, err?.stack);
    }
  }
  return null;
}

/**
 * Create a data item for the global data source lookup.
 */
function createDataItem(matchingResult: any) {
  return {
    id: matchingResult.datasource.id,
    name: matchingResult.datasource.name,
    url: matchingResult.datasource.url,
    __typename: 'ctalist',
    order: matchingResult.order,
    sortOrder: matchingResult.sortOrder,
    baseComponentDefinition: {} as DynamicDataCmsProperties,
  };
}

/**
 * Enrich global data with additional properties.
 */
function enrichGlobalData(data: any, matchingResult: any) {
  const globalItems = data.data;
  if (globalItems) {
    globalItems.sortOrder = matchingResult?.sortOrder;
    globalItems.order = matchingResult?.order;
    globalItems.componentDocumentation = getComponentDocumentation();
    globalItems.youtubeVideo = getYoutubeDocumentation();
  }
  return globalItems;
}

/**
 * Augment the matching result with documentation and video details.
 */
function augmentMatchingResult(matchingResult: any) {
  if (matchingResult) {
    matchingResult.componentDocumentation = getComponentDocumentation();
    matchingResult.youtubeVideo = getYoutubeDocumentation();
  }
}

async function urlToFriendly(matchingDataArray: unknown, languageSite: LanguageSite | undefined){
  if (typeof matchingDataArray != "undefined" && matchingDataArray != null && languageSite) {
    log.trace(`${logPrefix()}[urlToFriendly][1] > processRawUrlsOnServer >`, matchingDataArray);
    await processRawUrlsOnServer(matchingDataArray, languageSite, "url");
  }
  return matchingDataArray;
}

function getComponentDocumentation() {
  return "/library/5-cta-lists-and-sections";
}

function getYoutubeDocumentation() {
  return "https://youtu.be/KfJ2zzdEgTA";
}

