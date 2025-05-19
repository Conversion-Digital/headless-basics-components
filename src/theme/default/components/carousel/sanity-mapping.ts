import { extractComponentsFromSanityData } from "@conversiondigital/headless-basics-data/src/cms/sanity/sanityMappingUtils"
import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src/interfaces"
import { getLogger, logPrefix } from "@conversiondigital/headless-basics-data/src"

const log = getLogger("theme.components.carousel.sanityMapping")

export function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails){
  const data = pageAndComponentCombo?.component?.data
  if(!data) {
    log.warn(`${logPrefix()}[carousel][mapIdentifierData] no data found`)
    return null
  }
  console.log(`${logPrefix()}[carousel][mapIdentifierData] data: ${JSON.stringify(data)}`)
  const item = extractComponentsFromSanityData(data, "carousel", log)
  return item
}