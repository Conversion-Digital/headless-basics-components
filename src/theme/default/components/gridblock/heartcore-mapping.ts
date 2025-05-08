import {
  DynamicDataCmsProperties,
  LanguageSite,
  PageAndSingleComponentDetails,
  filterSubComponentData,
  loadSingleComponentGraphQLData,
  getLogger,
  logPrefix,
  processRawUrlsOnServer
} from "@conversiondigital/headless-basics-data/src"

export const logger = getLogger("default.components.heartcore.gridblock.mapping")

export async function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  logger.trace(
    `${logPrefix()}[${pageAndComponentCombo.component.identifier}][${pageAndComponentCombo.page.source}][${pageAndComponentCombo.page.preliminarySlug}] mapIdentifierData started`
  );

  const content = pageAndComponentCombo?.component?.data?.content as any;
  logger.trace(`${logPrefix()}[mapGridBlockData][0]data.content.children.edges > `, content?.children?.edges?.length);

  const edges = validateEdges(pageAndComponentCombo);
  if (!edges) {
    return null;
  }

  let matchingDataArray = filterSubComponentData(edges, 'GridBlock');

  const recursiveResult = handleRecursiveCall(pageAndComponentCombo, matchingDataArray);
  if (recursiveResult) {
    logger.trace(`${logPrefix()}[mapGridBlockData][2][${pageAndComponentCombo?.page.preliminarySlug}] recursiveResult :::: `);
    return recursiveResult;
  }

  const matchingResult = findMatchingResultBySortOrder(matchingDataArray, pageAndComponentCombo);
  
  const globalDataResult = await handleGlobalDataSource(matchingResult, pageAndComponentCombo);

  if (globalDataResult) {
    logger.trace(`${logPrefix()}[mapGridBlockData][6][${pageAndComponentCombo?.page.preliminarySlug}] globalDataResult :::: `);
    return globalDataResult;
  }

  if (matchingResult) {
    if (matchingResult.componentsGrid && Array.isArray(matchingResult.componentsGrid)) {
      logger.trace(`${logPrefix()} Found ${matchingResult.componentsGrid.length} components in the grid`);
      matchingResult.componentsGrid = matchingResult.componentsGrid.filter(Boolean);
    } else {
      logger.trace(`${logPrefix()} No components grid data found`);
      matchingResult.componentsGrid = [];
    }
  }

  return await urlToFriendly(matchingResult, pageAndComponentCombo?.page.languageSite);
}

/**
 * Validate edges in the data and log errors if missing.
 */
function validateEdges(pageAndSingleComponentDetails: PageAndSingleComponentDetails) {
  const content = pageAndSingleComponentDetails?.component?.data?.content as any;
  if (!content?.children?.edges) {
    logger.error(`${logPrefix()}[validateEdges][a][${pageAndSingleComponentDetails?.page.preliminarySlug}] Could not find a data query location for GridBlock`);
    return null;
  }
  const edges = content.children.edges;
  logger.trace(`${logPrefix()}[validateEdges][2][${pageAndSingleComponentDetails?.page.preliminarySlug}] edges :::: ${edges.length}`);
  return edges;
}

/**
 * Handle recursive calls by checking if the content type matches 'GridBlock'.
 */
function handleRecursiveCall(pageAndSingleComponentDetails: PageAndSingleComponentDetails, matchingDataArray: any[]) {
  const content = pageAndSingleComponentDetails?.component?.data?.content as any;
  if (!pageAndSingleComponentDetails?.component?.data) {
    logger.error(`${logPrefix()}[handleRecursiveCall][error][${pageAndSingleComponentDetails?.page.preliminarySlug}] component data is undefined`);
    return null;
  }
  logger.trace(`${logPrefix()}[handleRecursiveCall][1][${pageAndSingleComponentDetails?.page.preliminarySlug}][${pageAndSingleComponentDetails?.page?.source}] contentTypeAlias :::: `, pageAndSingleComponentDetails?.component?.data.content);
  if (matchingDataArray.length === 0 && content?.contentTypeAlias === 'gridBlock') {
    logger.trace(`${logPrefix()}[handleRecursiveCall][2][${pageAndSingleComponentDetails?.page.preliminarySlug}] recursive call > urlToFriendly`);
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
    logger.trace(`${logPrefix()}[findMatchingResultBySortOrder][4][${pageAndSingleComponentDetails?.page.preliminarySlug}] matchingResult :::: ${matchingResult?.datasource?.url}`, matchingResult?.__typename);
  }
  return matchingResult;
}

/**
 * Fetch global data source for the matching result and return processed data.
 */
async function handleGlobalDataSource(matchingResult: any, pageAndSingleComponentDetails: PageAndSingleComponentDetails) {
  if (matchingResult && matchingResult?.datasource?.url) {
    logger.trace(`${logPrefix()}[mapGridBlockData][5][${pageAndSingleComponentDetails?.page.preliminarySlug}] matchingResult :::: entering global data source ${matchingResult?.datasource?.url}`);
    try {
      pageAndSingleComponentDetails.page.source += '> handleGlobalDataSource()';

      const dataItem = createDataItem(matchingResult);
      const data = await loadSingleComponentGraphQLData(dataItem, pageAndSingleComponentDetails.page, matchingResult?.datasource?.url);

      if (!data) {
        logger.trace(`${logPrefix()}[mapGridBlockData][7][${pageAndSingleComponentDetails?.page.preliminarySlug}] data is null`);
        return null;
      }

      const globalItems = enrichGlobalData(data, matchingResult);
      logger.trace(`${logPrefix()}[mapGridBlockData][8][${pageAndSingleComponentDetails?.page.preliminarySlug}] globalItems :::: about to lookup url`);
      return await urlToFriendly(globalItems, pageAndSingleComponentDetails?.page.languageSite);
    } catch (err: any) {
      logger.error(`${logPrefix()}[mapGridBlockData][error][${pageAndSingleComponentDetails?.page.preliminarySlug}] Failed to fetch data from external source: ${err}`, matchingResult?.datasource?.url, err?.stack);
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
    __typename: 'gridblock',
    order: matchingResult.order || 0,
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
    globalItems.order = matchingResult?.order || 0;
  }
  return globalItems;
}

async function urlToFriendly(matchingDataArray: unknown, languageSite: LanguageSite | undefined){
  if (typeof matchingDataArray != "undefined" && matchingDataArray != null && languageSite) {
    logger.trace(`${logPrefix()}[urlToFriendly][1] > processRawUrlsOnServer >`, matchingDataArray);
    await processRawUrlsOnServer(matchingDataArray, languageSite, "url");
  }
  return matchingDataArray;
} 