import { getLogger, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src";
import { extractComponentsFromSanityData } from "@conversiondigital/headless-basics-data/src/cms/sanity/sanityMappingUtils";

export const log = getLogger("conversion.components.sanity.cdmission.mapping");

export async function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(
    `${logPrefix()}[${pageAndComponentCombo.component.identifier}][${pageAndComponentCombo.page.source}][${pageAndComponentCombo.page.preliminarySlug}] mapIdentifierData started, ${JSON.stringify(pageAndComponentCombo?.component?.data)}`
  );
  const content = pageAndComponentCombo?.component?.data;
  // Use the standard extraction method from the mapped content.
  // The second arg 'cdmission' must match the name in sanity-schema
  const matchingData = extractComponentsFromSanityData(content, "cdmission", log);

  // No special merges for image fields needed but we do it if needed:
  // if (!(matchingData?.image && matchingData.backgroundImage)) {
  //   matchingData.image = matchingData.backgroundImage;
  // }

  return matchingData;
}