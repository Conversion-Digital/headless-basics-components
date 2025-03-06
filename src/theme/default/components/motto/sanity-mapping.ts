import { getLogger, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src"
import { extractComponentsFromSanityData } from "@conversiondigital/headless-basics-data/src/cms/sanity/sanityMappingUtils"

export const log = getLogger("default.components.sanity.motto.mapping")

export async function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(`${logPrefix()}[motto][sanity-mapping][mapIdentifierData] for slug: ${pageAndComponentCombo?.page?.preliminarySlug}`)

  const data = pageAndComponentCombo?.component?.data
  const matchingComponent = extractComponentsFromSanityData(data, "Motto", log)

  return {
    words: matchingComponent?.words || "",
    align: matchingComponent?.align,
    selectableVariant: matchingComponent?.selectableVariant,
    componentDocumentation: "/library/4-highlight",
    youtubeVideo: "https://www.youtube.com/watch?v=ZVJFeeKO3RQ"
  }
}