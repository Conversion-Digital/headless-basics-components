import { getLogger, getMatchingResultBySortOrder, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src";

const log = getLogger("theme.components.keyfeatures.mapping");

export function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  const content = pageAndComponentCombo?.component?.data?.content as any;
  log.trace("variables heartcore mapIdentifierData > ", JSON.stringify(pageAndComponentCombo?.component?.data))
  log.trace("mapIdentifierData data.content.children.edges > ", content?.children?.edges);

  let matchingData:any = getMatchingResultBySortOrder(content?.children?.edges, "KeyFeatures", pageAndComponentCombo?.component?.sortOrder)

  if (!matchingData) {
    matchingData = {}
  }

  matchingData.componentDocumentation = getComponentDocumentation();
  matchingData.youtubeVideo = getYoutubeDocumentation();

  return matchingData;
}

function getComponentDocumentation() {
  return "/library/8-key-features";
}

function getYoutubeDocumentation() {
  return "https://youtu.be/HB6sQDLLAJc";
}
