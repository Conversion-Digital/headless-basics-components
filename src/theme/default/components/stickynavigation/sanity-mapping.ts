import { log, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src"

const logger = log
export async function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  logger.trace(`${logPrefix()}[stickynavigation][sanity-mapping][mapIdentifierData] started for slug: ${pageAndComponentCombo?.page?.preliminarySlug}`)

  // Provide a minimal placeholder returning empty data
  return {}
}