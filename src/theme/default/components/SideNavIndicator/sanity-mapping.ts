import { log, logPrefix, PageAndSingleComponentDetails, extractComponentsFromSanityData } from "@conversiondigital/headless-basics-data/src"

export async function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(`${logPrefix()}[gridContent][sanity-mapping][mapIdentifierData] started for slug: ${pageAndComponentCombo?.page?.preliminarySlug}`)
  const data = pageAndComponentCombo?.component?.data
  const matchingComponent = extractComponentsFromSanityData(data, "GridContent", log)
  return {
    ...matchingComponent,
    componentDocumentation: "/library/gridcontent",
    youtubeVideo: "https://www.youtube.com/watch?v=ZVJFeeKO3RQ"
  }
}