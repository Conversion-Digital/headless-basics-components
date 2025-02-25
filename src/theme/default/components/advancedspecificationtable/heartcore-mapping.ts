import { getLogger, getMatchingResultBySortOrder, PageAndSingleComponentDetails } from "@conversiondigital/cd-headless-data/src";

const log = getLogger("theme.components.advancedspecificationtable.mapping");

export function mapIdentifierData(pageAndSingleComponentDetails: PageAndSingleComponentDetails) {
  const content = pageAndSingleComponentDetails?.component?.data?.content as any;
  let matchingData:any = getMatchingResultBySortOrder(content?.children.edges, "AdvancedSpecificationTable", pageAndSingleComponentDetails?.component?.sortOrder);

  if (!matchingData) {
      matchingData = {}
  }

  matchingData.componentDocumentation = getComponentDocumentation();
  matchingData.youtubeVideo = getYoutubeDocumentation();

  return matchingData;
}

function getComponentDocumentation() {
  return "/library/20-advanced-specifications-table";
}

function getYoutubeDocumentation() {
  return "https://youtu.be/W38R-pbiq38";
}
