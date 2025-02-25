import { getLogger, PageAndSingleComponentDetails, processRawUrlsOnServer } from "@conversiondigital/headless-basics-data/src";


const log = getLogger("theme.components.productlist.mapping")

export async function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  const subComponentsPage = pageAndComponentCombo?.component?.data?.subComponentsPage as any;
  const productsData = subComponentsPage?.children?.edges;

  log.debug("variables heartcore mapIdentifierData > ", JSON.stringify(pageAndComponentCombo?.component?.data));

  if (productsData) {
    if (pageAndComponentCombo?.page?.languageSite) {
      await processRawUrlsOnServer(
        productsData,
        pageAndComponentCombo.page.languageSite
      )
    }
  }

  // Perform a deeper search for ProductPage matches
  const products = findProductPages(productsData) || []

  const resultingProducts = products.map((product:any) => ({
    id: product?.id,
    url: product?.url,
    name: product?.name,
    imageUrl: product?.productPhoto?.url ?? "",
    altText: product?.productPhoto?.media?.altText != "" ?  product?.productPhoto?.media?.altText :  product?.productPhoto?.media?.name != "" ?  product?.productPhoto?.media?.name : product.name,
    description: product.productDescription || "",
    feature: product.productFeature || "",
    features: product?.features?.map((feature: { content: any; }) => feature?.content) || []
  }));
  return resultingProducts
}

// Helper function to recursively search for ProductPage nodes
const findProductPages = (nodes: any[]) => {
  let productPages: any = []

  if (!nodes || nodes.length === 0) return productPages

  nodes.forEach((item: any) => {
    if (item.node.__typename === "ProductPage") {
      productPages.push(item.node)
    }
    if (item.node.children?.edges) {
      productPages = productPages.concat(findProductPages(item.node.children.edges))
    }
  })
  return productPages
}
