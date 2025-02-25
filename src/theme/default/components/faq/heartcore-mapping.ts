import {
  DynamicDataCmsProperties,
  PageAndSingleComponentDetails,
  filterSubComponentData,
  getLogger,
  loadSingleComponentGraphQLData,
} from "@conversiondigital/cd-headless-data/src"

const log = getLogger("theme.components.faq.mapping");


export async function mapIdentifierData(IndividualComponentProps: PageAndSingleComponentDetails) {
  const content = IndividualComponentProps?.component?.data?.content as any;
  log.trace("variables heartcore mapIdentifierData > ", JSON.stringify(IndividualComponentProps?.component?.data))
  log.trace("data.content.children.edges > ", content?.children?.edges);
  const edges = content?.children?.edges;
  let matchingDataArray = filterSubComponentData(edges, 'Faq');

  let matchingResult = null;

  // If this call is a recursive call, then the data is structured slightly differently.
  // A recursive call would load the global datasource. the following code handles that case.
  if (matchingDataArray.length === 0 && content?.contentTypeAlias === 'faq') {
    return content;
  } else if (matchingDataArray.length > 0) {
    // filter by matching sortOrder, take the first result
    const filteredBySortOrder = matchingDataArray.filter((item) => item.sortOrder === IndividualComponentProps?.component?.sortOrder);
    if (filteredBySortOrder.length === 1) {
      matchingResult = filteredBySortOrder[0];
    }
  }


  if (matchingResult && matchingResult.datasource && matchingResult.datasource.url) {
    try {
      const dataItem = {
        id: matchingResult.datasource.id,
        name: matchingResult.datasource.name,
        url: matchingResult.datasource.url,
        __typename: 'Faq',
        order: 0,
        sortOrder: matchingResult.sortOrder,
        baseComponentDefinition: {} as DynamicDataCmsProperties
      };
      const data = await loadSingleComponentGraphQLData(dataItem, IndividualComponentProps.page, matchingResult.datasource.url);
      if (!data) {
        return null;
      }
      const globalItems = data.data;
      if(globalItems){
        globalItems.sortOrder = matchingResult.sortOrder;
        globalItems.componentDocumentation = getComponentDocumentation();
        globalItems.youtubeVideo = getYoutubeDocumentation();
      }
      return globalItems;
    } catch (err) {
      log.error(`faq - Failed to fetch data from external source: ${err}`, matchingResult?.datasource?.url, (err as Error).stack);
      // handle error
    }
  }

  if(matchingResult){
    matchingResult.componentDocumentation = getComponentDocumentation();
    matchingResult.youtubeVideo = getYoutubeDocumentation();
  }

  return matchingResult;
}

function getComponentDocumentation() {
  return "/library/13-faqs";
}

function getYoutubeDocumentation() {
  return "https://youtu.be/_ofHDwsTCEw";
}
