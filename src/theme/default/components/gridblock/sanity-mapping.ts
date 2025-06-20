import { getLogger, logPrefix, PageAndSingleComponentDetails, loadSingleComponentGraphQLData } from "@conversiondigital/headless-basics-data/src"
import { extractComponentsFromSanityData } from "@conversiondigital/headless-basics-data/src/cms/sanity/sanityMappingUtils"

export const log = getLogger("default.components.sanity.gridblock.mapping")

export async function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(
    `${logPrefix()}[${pageAndComponentCombo.component.identifier}][${pageAndComponentCombo.page.source}][${pageAndComponentCombo.page.preliminarySlug}] mapIdentifierData started, ${JSON.stringify(pageAndComponentCombo?.component?.data)}`
  );
  
  const content = pageAndComponentCombo?.component?.data;
  const thisComponentsOrder = pageAndComponentCombo?.component?.sortOrder ?? 0;
  log.trace(`${logPrefix()} thisComponentsOrder: ${thisComponentsOrder}`);
  
  let matchingData = extractComponentsFromSanityData(content, "Gridblock", log, true, '', thisComponentsOrder);
  
  if (matchingData) {
    if (matchingData.componentsGrid && Array.isArray(matchingData.componentsGrid)) {
      log.trace(`${logPrefix()} Found ${matchingData.componentsGrid.length} components in the grid`);
      matchingData.componentsGrid = matchingData.componentsGrid.filter(Boolean);
      
      // Retrieve sub-component data for each component in the grid
      await retrieveSubComponents(matchingData, pageAndComponentCombo);
      
    } else if (matchingData.globalComponentSource && matchingData.globalComponentSource.componentsGrid) {
      log.trace(`${logPrefix()} Using globalComponentSource for components grid data`);
      matchingData.componentsGrid = matchingData.globalComponentSource.componentsGrid.filter(Boolean);
      
      // Retrieve sub-component data for global component source as well
      await retrieveSubComponents(matchingData.globalComponentSource, pageAndComponentCombo);
    } else {
      log.trace(`${logPrefix()} No components grid data found`);
      matchingData.componentsGrid = [];
    }
  }
  
  log.trace(`${logPrefix()} Final mapped data: ${JSON.stringify(matchingData)}`);
  return matchingData;
}

/**
 * Retrieves additional data for sub-components within a grid block
 * Similar to how it's implemented in the accordion component
 */
export async function retrieveSubComponents(
  matchingResult: any,
  pageAndComponentCombo: PageAndSingleComponentDetails
) {
  if (matchingResult && Array.isArray(matchingResult.componentsGrid)) {
    log.trace(`${logPrefix()} Starting retrieveSubComponents for ${matchingResult.componentsGrid.length} grid items`);
    
    // Process each component in the grid
    const promises = matchingResult.componentsGrid.map(
      async (item: any, index: number) => {
        // Skip if item is already processed or doesn't have a type
        if (!item || !item._type) {
          log.warn(`${logPrefix()} Grid item ${index} has no _type property, skipping`);
          return;
        }
        
        // Create a unique ID for tracking
        const itemId = item._id || item.id || `grid-item-${index}-${Math.random().toString(36).substring(2, 9)}`;
        
        try {
          log.trace(`${logPrefix()} Processing grid item ${index} of type ${item._type} with ID ${itemId}`);
          
          // If the item has a URL or reference ID that needs to be resolved
          if (item.url || item.reference) {
            const slug = item.url || item.reference;
            log.trace(`${logPrefix()} Item has reference: ${slug}`);
            
            pageAndComponentCombo.page.source += `> mapIdentifierData() > retrieveSubComponents(${slug})`;
            
            // Load additional data for this component
            const component = await loadSingleComponentGraphQLData(
              item,
              pageAndComponentCombo.page,
              slug
            );
            
            // Merge the fetched data with the original item
            if (component) {
              log.trace(`${logPrefix()} Successfully loaded additional data for component ${itemId}`);
              // Copy all properties except specific ones we want to preserve
              Object.keys(component).forEach((key) => {
                if (!["_type", "_key", "_id", "id"].includes(key)) {
                  item[key] = (component as any)[key];
                }
              });
              
              // Mark the item as loaded
              item._loaded = true;
            } else {
              log.warn(`${logPrefix()} Failed to load additional data for component ${itemId}`);
            }
          } else {
            log.trace(`${logPrefix()} Item has no reference URL, using as-is: ${itemId}`);
          }
        } catch (error) {
          log.error(`${logPrefix()} Error processing grid item ${index}: ${error}`);
        }
      }
    );
    
    await Promise.all(promises);
    log.trace(`${logPrefix()} Completed retrieveSubComponents for all grid items`);
  } else {
    log.trace(`${logPrefix()} No componentsGrid array found or it's empty`);
  }
}