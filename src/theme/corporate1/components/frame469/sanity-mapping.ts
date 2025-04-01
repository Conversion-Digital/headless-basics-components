
import { getLogger, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src";
import { extractComponentsFromSanityData } from "@conversiondigital/headless-basics-data/src/cms/sanity/sanityMappingUtils";

export const log = getLogger("theme.corporate1.components.frame469.mapping");

export async function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(
    `${logPrefix()}[frame469][${pageAndComponentCombo.page.source}][${pageAndComponentCombo.page.preliminarySlug}] mapIdentifierData started. data:`,
    JSON.stringify(pageAndComponentCombo?.component?.data)
  );

  const content = pageAndComponentCombo?.component?.data;
  // Extract the component from the page data
  const matchingData = extractComponentsFromSanityData(content, "Frame469", log);

  if (!matchingData) {
    log.warn(`${logPrefix()}[frame469] No matching data found in sanityMapping.`);
    return null;
  }

  return matchingData;
}
