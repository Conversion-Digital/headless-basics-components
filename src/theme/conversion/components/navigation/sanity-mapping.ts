import { getLogger, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src"
import { extractComponentsFromSanityData } from "@conversiondigital/headless-basics-data/src/cms/sanity/sanityMappingUtils"

export const log = getLogger("conversion.components.sanity.cdnav.mapping")

export async function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(
    `${logPrefix()}[${pageAndComponentCombo.component.identifier}][${pageAndComponentCombo.page.source}][${pageAndComponentCombo.page.preliminarySlug}] mapIdentifierData started, ${JSON.stringify(pageAndComponentCombo?.component?.data)}`
  );
  const content = pageAndComponentCombo?.component?.data
  const thisComponentsOrder = pageAndComponentCombo?.component?.sortOrder ?? 0;
  log.trace(`${logPrefix()} thisComponentsOrder: ${thisComponentsOrder}`);
  
  // For navigation data, check if it comes from allNavigation structure
  if (content && content.allNavigation && Array.isArray(content.allNavigation)) {
    log.debug(`${logPrefix()} Found allNavigation data, extracting navigation directly`);
    const navigationData = content.allNavigation[thisComponentsOrder] || content.allNavigation[0];
    log.debug(`${logPrefix()} Extracted navigation data: ${JSON.stringify(navigationData, null, 2)}`);
    return navigationData;
  }
  
  // Fallback to the original extraction method for other component types
  const matchingData = extractComponentsFromSanityData(content, "cdnav", log, true, '', thisComponentsOrder);
  return matchingData
}