import { getLogger, PageAndSingleComponentDetails, getMatchingResultBySortOrder } from "@conversiondigital/headless-basics-data/src";

const log = getLogger("theme.components.featurethreeimagessection.mapping");

export function mapIdentifierData(pageAndSingleComponentDetails: PageAndSingleComponentDetails) {
  const content = pageAndSingleComponentDetails?.component?.data?.content as any;
  log.trace("variables heartcore mapFeatureThreeImagesData > ", JSON.stringify(pageAndSingleComponentDetails?.component?.data))
  log.trace("data.content.children.edges > ", content?.children?.edges);

  let matchingData:any = getMatchingResultBySortOrder(content?.children?.edges, "FeatureThreeImagesSection", pageAndSingleComponentDetails?.component?.sortOrder);

  if (!matchingData) {
    matchingData = {}
  }

  matchingData.componentDocumentation = getComponentDocumentation()
  matchingData.youtubeVideo = getYoutubeDocumentation()

  return matchingData;
}

function getComponentDocumentation() {
  return "/library/11-feature-three-images";
}

function getYoutubeDocumentation() {
  return "https://www.youtube.com/watch?v=QIHgqTAtqEw";
}

