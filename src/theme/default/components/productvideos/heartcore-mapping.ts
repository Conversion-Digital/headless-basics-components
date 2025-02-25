import { getLogger, PageAndSingleComponentDetails, getMatchingResultBySortOrder } from "@conversiondigital/headless-basics-data/src";

const log = getLogger("theme.components.productvideos.mapping");

export function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  const productPage = pageAndComponentCombo?.component?.data?.productPage as any;
  if(!productPage?.children?.edges){
    return {}
  }

  let matchingData:any = getMatchingResultBySortOrder(productPage?.children?.edges, "ProductVideos", pageAndComponentCombo?.component?.sortOrder);

  if (!matchingData) {
    matchingData = {}
  }

  matchingData.componentDocumentation = getComponentDocumentation();
  matchingData.youtubeVideo = getYoutubeDocumentation();

  return matchingData;
}

function getComponentDocumentation() {
  return "/library/21-product-downloads";
}

function getYoutubeDocumentation() {
  return "https://www.youtube.com/watch?v=...";
}
