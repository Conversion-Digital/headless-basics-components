import { getLogger, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src"
import { extractComponentsFromSanityData } from "@conversiondigital/headless-basics-data/src/cms/sanity/sanityMappingUtils"

export const log = getLogger("conversion.components.sanity.cdstatistics.mapping")

export async function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(
    `${logPrefix()}[${pageAndComponentCombo.component.identifier}][${pageAndComponentCombo.page.source}][${pageAndComponentCombo.page.preliminarySlug}] mapIdentifierData started, ${JSON.stringify(pageAndComponentCombo?.component?.data)}`
  );
  
  const content = pageAndComponentCombo?.component?.data
  // The second arg 'cdstatistics' must match the name in cdstatistics's sanity-schema
  const matchingData = extractComponentsFromSanityData(content, "cdstatistics", log);
  
  return matchingData
}
