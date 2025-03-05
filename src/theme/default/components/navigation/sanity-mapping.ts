import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src"
import { getLogger, logPrefix } from "@conversiondigital/headless-basics-data/src"

const log = getLogger("theme.default.components.navigation.sanityMapping")

export async function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(`${logPrefix()}[navigation][sanity-mapping][mapIdentifierData] started for slug: ${pageAndComponentCombo?.page?.preliminarySlug}`)

  // Provide a minimal placeholder returning empty data
  return []
}