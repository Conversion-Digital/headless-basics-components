import { getLogger, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src"
import { extractComponentsFromSanityData } from "@conversiondigital/headless-basics-data/src/cms/sanity/sanityMappingUtils"

export const log = getLogger("default.components.sanity.gridblock.mapping")

export async function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(
    `${logPrefix()}[${pageAndComponentCombo.component.identifier}][${pageAndComponentCombo.page.source}][${pageAndComponentCombo.page.preliminarySlug}] mapIdentifierData started, ${JSON.stringify(pageAndComponentCombo?.component?.data)}`
  );
  
  
  const content = { ...pageAndComponentCombo?.component?.data, sortOrder: pageAndComponentCombo.component.sortOrder }
  let matchingData = extractComponentsFromSanityData(content, "Gridblock", log);
  
  if (matchingData) {
    if (matchingData.componentsGrid && Array.isArray(matchingData.componentsGrid)) {
      log.trace(`${logPrefix()} Found ${matchingData.componentsGrid.length} components in the grid`);
      matchingData.componentsGrid = matchingData.componentsGrid.filter(Boolean);
      
    } else if (matchingData.globalComponentSource && matchingData.globalComponentSource.componentsGrid) {
      log.trace(`${logPrefix()} Using globalComponentSource for components grid data`);
      matchingData.componentsGrid = matchingData.globalComponentSource.componentsGrid.filter(Boolean);
    } else {
      log.trace(`${logPrefix()} No components grid data found`);
      matchingData.componentsGrid = [];
    }
  }
  
  log.trace(`${logPrefix()} Final mapped data: ${JSON.stringify(matchingData)}`);
  return matchingData;
}