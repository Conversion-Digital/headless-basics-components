import {
  PageAndSingleComponentDetails,
  getLogger,
  getMatchingResultBySortOrder,
  logPrefix,
  processRawUrlsOnServer,
} from "@conversiondigital/headless-basics-data/src"

const log = getLogger("theme.components.accordion.mapping")

export async function mapIdentifierData(
  pageAndComponentCombo: PageAndSingleComponentDetails
) {
  log.trace("variables heartcore mapHomepageV2bodyData mapIdentifierData");
  // Validate data presence
  const edges = validateEdges(pageAndComponentCombo);
  if (!edges) {
    return null;
  }
  log.trace("mapHomepageV2bodyData data.content.children.edges > ", edges, edges?.children);
  
  let matchingData:any = getMatchingResultBySortOrder(edges, "HomepageV2Body", pageAndComponentCombo?.component?.sortOrder);

  if (!matchingData) {
    matchingData = {}
  }

  matchingData.componentDocumentation = getComponentDocumentation();
  matchingData.youtubeVideo = getYoutubeDocumentation();
  matchingData.backendEndpoint = process.env.BACKEND_ENDPOINT || "https://api.@conversiondigital/.ai";

  if (matchingData && pageAndComponentCombo?.page?.languageSite) {
    await processRawUrlsOnServer(matchingData, pageAndComponentCombo.page.languageSite);
  }
  return matchingData;
}


function getComponentDocumentation() {
  return "/library/9-accordion"
}

function getYoutubeDocumentation() {
  return "https://www.youtube.com/watch?v=uH71Z38dQio"
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