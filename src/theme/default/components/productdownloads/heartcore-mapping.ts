import {
  PageAndSingleComponentDetails,
  getLogger,
  getMatchingResultBySortOrder,
} from "@conversiondigital/headless-basics-data/src"

const log = getLogger("theme.components.productdownloads.mapping")

export function mapIdentifierData(
  pageAndComponentCombo: PageAndSingleComponentDetails
) {
  const productPage = pageAndComponentCombo?.component?.data?.productPage as any
  const edges = productPage?.children?.edges

  if (!edges) {
    return {}
  }

  let matchingData = getMatchingResultBySortOrder(
    edges,
    "ProductDownloads",
    pageAndComponentCombo?.component?.sortOrder
  )

  if (!matchingData) {
    matchingData = {}
  }

  matchingData.componentDocumentation = getComponentDocumentation()
  matchingData.youtubeVideo = getYoutubeDocumentation()

  return matchingData
}

function getComponentDocumentation() {
  return "/library/21-product-downloads"
}

function getYoutubeDocumentation() {
  return "https://www.youtube.com/watch?v=..."
}
