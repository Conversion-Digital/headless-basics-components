
import { getLogger, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src"
import { extractComponentsFromSanityData } from "@conversiondigital/headless-basics-data/src/cms/sanity/sanityMappingUtils"

export const log = getLogger("corporate1.components.frame469.sanity.mapping")

export async function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(
    `${logPrefix()}[${pageAndComponentCombo.component.identifier}][${pageAndComponentCombo.page.source}][${pageAndComponentCombo.page.preliminarySlug}] frame469 mapIdentifierData started, ${JSON.stringify(pageAndComponentCombo?.component?.data)}`
  );
  const content = pageAndComponentCombo?.component?.data
  const matchingData = extractComponentsFromSanityData(content, "Frame469", log)
  return matchingData
}
