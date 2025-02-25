import {
  PageAndSingleComponentDetails,
  getLogger,
  getMatchingResultBySortOrder,
  processRawUrlsOnServer,
} from "@conversiondigital/headless-basics-data/src"


const log = getLogger("theme.components.linkslistings.mapping");

export async function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace("variables heartcore mapIdentifierData > ", JSON.stringify(pageAndComponentCombo?.component?.data))

  let matchingData:any = getMetaData();
  const content = pageAndComponentCombo?.component?.data?.content as any;

  // This is a special case to handle for Accordion Sub-Components
  if(content?.contentTypeAlias == 'linksListings'){
    matchingData = content;

  // This is the main case of handling rich text as pagae Sub-Components
  }else {
    const edges = content?.children?.edges;
    if(edges){
      log.trace("mapIdentifierData data.content.children.edges > ", edges);
      matchingData = getMatchingResultBySortOrder(edges, "LinksListings", pageAndComponentCombo?.component?.sortOrder);
    }
  }

  if (!matchingData) {
    matchingData = getMetaData()
  }

  const languageSite = pageAndComponentCombo?.page?.languageSite;
  if (matchingData && languageSite) {
      await processRawUrlsOnServer(matchingData, languageSite);
  }

  return matchingData;
}

function getMetaData() {
  return {
    componentDocumentation: getComponentDocumentation(),
    youtubeVideo:getYoutubeDocumentation()
  }
}

function getComponentDocumentation() {
  return "/library/10-links-listings";
}

function getYoutubeDocumentation() {
  return "https://www.youtube.com/watch?v=QjRs6QA8y6Q";
}
