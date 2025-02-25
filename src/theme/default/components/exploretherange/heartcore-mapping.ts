import {
  DynamicDataCmsProperties,
  PageAndSingleComponentDetails,
  extractUmbracoGuid,
  getLogger,
  getMatchingResultBySortOrder,
  loadSingleComponentGraphQLData,
  processRawUrlsOnServer,
  stripSiteLanguagePrefixAsync,
} from "@conversiondigital/cd-headless-data/src"

const log = getLogger("theme.components.exploretherange.mapping");

export async function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace("variables heartcore mapIdentifierData > ", JSON.stringify(pageAndComponentCombo?.component?.data));
  const subComponentsPage = pageAndComponentCombo?.component?.data?.subComponentsPage as any;
  const edges = subComponentsPage?.children?.edges as any;
  log.trace("data.content.children.edges > ", edges);

  let matchingData:any = getMatchingResultBySortOrder(edges, "Exploretherange", pageAndComponentCombo?.component?.sortOrder);

  if (!matchingData) {
    matchingData = {}
  }

  matchingData.componentDocumentation = getComponentDocumentation();
  matchingData.youtubeVideo = getYoutubeDocumentation();

  await retrieveProductDetails(matchingData, pageAndComponentCombo);
  validateChildrenProducts(matchingData);

  const languageSite = pageAndComponentCombo?.page?.languageSite;
  if(!languageSite){
    log.error('mapIdentifierData languageSite is null > ', languageSite);
    return matchingData;
  }

  if (matchingData) {
    await processRawUrlsOnServer(matchingData, languageSite);
  }

  return matchingData;
}

export async function retrieveProductDetails(matchingResult: any, pageAndComponentCombo: PageAndSingleComponentDetails) {
  pageAndComponentCombo.page.source += "> mapIdentifierData() > retrieveProductDetails()";
  if (matchingResult && matchingResult.explore) {
    // map each item to a Promise
    const itemPromises = matchingResult?.explore?.map(async ({content: item}: {content: any}) => {
      try {
        if (!item || !item.button) {
          log.trace('retrieveProductDetails item?.button is null > ', item);
          return null; // If item or item.button is not available, return null
        }

        const udi = item.button.udi;
        const slug = await stripSiteLanguagePrefixAsync(item.button.url);
        if(!slug){
          log.trace('retrieveProductDetails slug is null > ', slug);
          return null; // If slug is not available, return null
        }

        const dataItem = {url: slug, id: extractUmbracoGuid(udi) || '', __typename: 'productList', order: 0, name: '', sortOrder: 0, baseComponentDefinition: {} as DynamicDataCmsProperties};
        const data = await loadSingleComponentGraphQLData(dataItem, pageAndComponentCombo.page, slug);

        if (data && data.data && (data.data.length as number) > 0) {
          item.childrenProducts = data.data;
        } else {
          log.warn('retrieveProductDetails error > item.childrenProducts is not set > ', item.url, slug);
          return null; // If data is not available, return null
        }

        return item; // If everything is successful, return the item

      } catch (error) {
        log.error('Error in retrieveProductDetails for item > ', item.url, ' Error: ', error);
        return null; // In case of error, return null
      }
    });

    // wait for all Promises to resolve
    const items = await Promise.all(itemPromises);
    return items.filter(item => item !== null); // Filter out any null results
  } else {
    log.trace('retrieveProductDetails matchingResult is null or does not contain explore property > ', matchingResult);
    return [];
  }
}

export function validateChildrenProducts(matchingResult: any) {
  if (matchingResult && matchingResult.explore) {
    for (const {content: item} of matchingResult.explore) {
      if (!item?.childrenProducts || item?.childrenProducts?.length === 0) {
        log.warn('Validation error > item.childrenProducts is not set or empty > ', item.url, matchingResult.url);
      }
    }
  } else {
    log.trace('Validation function called with invalid matchingResult, it is null or does not contain explore property > ', matchingResult.url);
  }
}

function getComponentDocumentation() {
  return "/library/7-explore-the-range";
}

function getYoutubeDocumentation() {
  return "https://youtu.be/Mm-zdAYohTE";
}
