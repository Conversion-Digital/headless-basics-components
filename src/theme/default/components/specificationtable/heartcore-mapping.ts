import { getLogger, getMatchingResultBySortOrder, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src";

const log = getLogger("theme.components.specificationtable.mapping")

export function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  const content = pageAndComponentCombo?.component?.data?.content as any;
  let matchingData: any = getMatchingResultBySortOrder(
    content?.children?.edges,
    "SpecificationTable",
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
  return "/library/19-specifications-table"
}

function getYoutubeDocumentation() {
  return "https://youtu.be/W38R-pbiq38"
}
