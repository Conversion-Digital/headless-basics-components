import { getMatchingResultBySortOrder, log, PageAndSingleComponentDetails } from "@conversiondigital/cd-headless-data/src";


export async function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  const content = pageAndComponentCombo?.component?.data?.content as any;
  log.trace("variables heartcore mapGalleryData > ", JSON.stringify(pageAndComponentCombo?.component?.data))
  log.trace("mapGalleryData data.content.children.edges > ", content?.children?.edges);

  let matchingData = getMatchingResultBySortOrder(content?.children?.edges, "Gallery", pageAndComponentCombo?.component?.sortOrder)

  if (!matchingData) {
    matchingData = {}
  }

  matchingData.componentDocumentation = getComponentDocumentation();
  matchingData.youtubeVideo = getYoutubeDocumentation();

  return matchingData;
}

function getComponentDocumentation() {
  return "/library/6-gallery";
}

function getYoutubeDocumentation() {
  return "https://youtu.be/0LYpxTW8dX0";
}
