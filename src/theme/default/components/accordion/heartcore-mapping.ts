import {
  IndividualComponentProps,
  PageAndSingleComponentDetails,
  getLogger,
  getMatchingResultBySortOrder,
  loadSingleComponentGraphQLData,
  stripSiteLanguagePrefixAsync,
} from "@conversiondigital/cd-headless-data/src"

const log = getLogger("theme.components.accordion.mapping")

export async function mapIdentifierData(
  pageAndComponentCombo: PageAndSingleComponentDetails
) {
  const content = pageAndComponentCombo?.component?.data?.content as any
  log.trace(
    " mapIdentifierData > ",
    JSON.stringify(pageAndComponentCombo?.component?.data)
  )
  log.trace(" mapIdentifierData data.content.children.edges > ", content?.children?.edges)

  let matchingData = getMatchingResultBySortOrder(
    content?.children.edges,
    "Accordion",
    pageAndComponentCombo?.component?.sortOrder
  )

  if (!matchingData) {
    matchingData = {}
  }

  matchingData.componentDocumentation = getComponentDocumentation()
  matchingData.youtubeVideo = getYoutubeDocumentation()

  await retrieveSubComponents(matchingData, pageAndComponentCombo)

  return matchingData
}

export async function retrieveSubComponents(
  matchingResult: any,
  pageAndComponentCombo: PageAndSingleComponentDetails
) {
  if (matchingResult && Array.isArray(matchingResult?.children?.edges)) {
    const promises = matchingResult?.children?.edges?.map(
      async ({ node: item }: { node: any }) => {
        const slug = await stripSiteLanguagePrefixAsync(item?.url)
        if (slug) {
          item.url = slug

          pageAndComponentCombo.page.source += `> mapIdentifierData() > retrieveSubComponents(${slug})`

          const component =
            await loadSingleComponentGraphQLData(
              item,
              pageAndComponentCombo.page,
              slug
            )
          if (component) {
            Object.keys(component).forEach((key) => {
              if (!["subComponentOutline"].includes(key)) {
                item[key] = (component as any)[key]
              }
            })
          }
        }
      }
    )

    await Promise.all(promises)
  }
}

function getComponentDocumentation() {
  return "/library/9-accordion"
}

function getYoutubeDocumentation() {
  return "https://www.youtube.com/watch?v=uH71Z38dQio"
}
