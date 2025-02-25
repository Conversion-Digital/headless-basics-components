import { getLogger, getMatchingResultBySortOrder, PageAndSingleComponentDetails } from "@conversiondigital/cd-headless-data/src";

const log = getLogger("theme.components.videosection.mapping");

export function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  const content = pageAndComponentCombo?.component?.data?.content as any;
  let matchingData:any = getMatchingResultBySortOrder(content?.children?.edges, "VideoSection", pageAndComponentCombo?.component?.sortOrder);

  if (!matchingData) {
      matchingData = {}
  }

  matchingData.componentDocumentation = getComponentDocumentation();
  matchingData.youtubeVideo = getYoutubeDocumentation();

  return matchingData;
}

function getComponentDocumentation() {
  return "/library/18-video-section";
}

function getYoutubeDocumentation() {
  return "https://www.youtube.com/watch?v=y7Y5pbfUj5o";
}
