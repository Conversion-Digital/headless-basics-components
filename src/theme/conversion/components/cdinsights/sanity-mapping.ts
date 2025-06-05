import { getLogger, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src";
import { extractComponentsFromSanityData } from "@conversiondigital/headless-basics-data/src/cms/sanity/sanityMappingUtils";

export const log = getLogger("conversion.components.sanity.cdinsights.mapping");

export async function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(
    `${logPrefix()}[${pageAndComponentCombo.component.identifier}][${pageAndComponentCombo.page.source}][${pageAndComponentCombo.page.preliminarySlug}] mapIdentifierData started, ${JSON.stringify(pageAndComponentCombo?.component?.data)}`
  );
  const content = pageAndComponentCombo?.component?.data;
  const matchingData = extractComponentsFromSanityData(content, "cdinsights", log);
  return matchingData;
}