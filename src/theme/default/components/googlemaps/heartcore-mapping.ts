import { getLogger, getMatchingResultBySortOrder, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src";

const log = getLogger("theme.components.googlemaps.mapping");

export function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  const content = pageAndComponentCombo?.component?.data?.content as any;
  log.trace("variables heartcore mapIdentifierData > ", JSON.stringify(pageAndComponentCombo?.component?.data))
  log.trace("data.content.children.edges > ", content?.children?.edges);

  let matchingData:any = getMatchingResultBySortOrder(content?.children?.edges, "GoogleMaps", pageAndComponentCombo?.component?.sortOrder);

  if (!matchingData) {
      matchingData = {}
  }

  matchingData.componentDocumentation = getComponentDocumentation();
  matchingData.youtubeVideo = getYoutubeDocumentation();

  return matchingData;
}

function getComponentDocumentation() {
  return "/library/16-google-maps";
}

function getYoutubeDocumentation() {
  return "https://www.youtube.com/watch?v=y7Y5pbfUj5o";
}
