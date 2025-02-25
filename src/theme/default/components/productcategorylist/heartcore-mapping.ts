import {
  PageAndSingleComponentDetails,
  getLogger,
  processRawUrlsOnServer,
} from "@conversiondigital/headless-basics-data/src"

const log = getLogger("theme.components.productcategorylist.mapping")

export async function mapIdentifierData(
  pageAndComponentCombo: PageAndSingleComponentDetails
) {
  log.trace(
    "variables heartcore mapIdentifierData > ",
    JSON.stringify(pageAndComponentCombo?.component?.data)
  )
  const subComponentsPage = pageAndComponentCombo?.component?.data
    ?.subComponentsPage as any
  const edges = subComponentsPage?.children?.edges

  if (edges) {
    if (pageAndComponentCombo?.page?.languageSite) {
      await processRawUrlsOnServer(
        edges,
        pageAndComponentCombo.page.languageSite
      )
    }
  }

  for (const edge of edges) {
    const childrenEdges = edge.node.children.edges

    for (const childEdge of childrenEdges) {
      if (childEdge.node.__typename === "ProductCategoryList") {
        const result = childEdge.node
        result.category = {
          name: subComponentsPage?.name,
          url: subComponentsPage?.url,
          description: subComponentsPage?.ogDescription,
        }
        return childEdge.node
      }
    }
  }

  return null
}
