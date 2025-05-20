import React from "react";
import { StandardComponentProps } from "../../../../../../interfaces/standardComponentProps";
import { 
  getLogger, 
  loadSingleComponentGraphQLData,
  PageIdentifier,
  PageDefinition
} from "@conversiondigital/headless-basics-data/src";
import { PageVariant } from "@conversiondigital/headless-basics-data/src/cms/constants";
import DynamicComponentRenderer from "./DynamicComponentRenderer";

const log = getLogger("default.components.sanity.gridblock.variants");

function filterFunctions(obj: any): any {
  if (!obj) return obj;
  
  if (typeof obj !== 'object') return obj;
  
  if (Array.isArray(obj)) {
    return obj.map(filterFunctions);
  }
  
  const result: any = {};
  for (const key in obj) {
    if (typeof obj[key] !== 'function') {
      result[key] = filterFunctions(obj[key]);
    }
  }
  return result;
}


async function retrieveSubComponents(gridItems: any[], blueprint: any, parentPageDefinition: PageDefinition) {
  const loadedComponents: Record<string, any> = {};
  
  if (!gridItems || gridItems.length === 0) {
    return loadedComponents;
  }
  
  for (let i = 0; i < gridItems.length; i++) {
    const item = gridItems[i];
    if (!item || !item._type) continue;
    
    try {
      const componentId = item._key || `grid-item-${i}`;
      
      const model = {
        ...item,
        _id: componentId,
        __typename: item._type.charAt(0).toUpperCase() + item._type.slice(1),
        contentTypeAlias: item._type,
        sortOrder: i
      };
      
      const pageIdObj: PageIdentifier = {
        identifier: componentId,
        pageVariant: "subComponentsPage" as PageVariant,
        isFixedLayout: false
      };
      
      const pageDefinition: PageDefinition = {
        source: item._type,
        pageIdentifier: pageIdObj,
        preliminarySlug: parentPageDefinition.preliminarySlug
      };
      
      const componentData = await loadSingleComponentGraphQLData(model, pageDefinition, '');
      
      if (componentData) {
        loadedComponents[componentId] = {
          data: componentData,
          type: item._type
        };
      }
    } catch (error) {
      log.error(`Failed to load component ${item._type}: ${error}`);
    }
  }
  
  return loadedComponents;
}

function getFlexClasses(itemCount: number) {
  if (itemCount <= 1) return "w-full";
  if (itemCount === 2) return "w-full md:w-1/2";
  if (itemCount === 3) return "w-full md:w-1/3";
  if (itemCount === 4) return "w-full md:w-1/2 lg:w-1/4";
  return "w-full md:w-1/2 lg:w-1/3";
}

export default async function GridblockDefaultVariant(props: StandardComponentProps) {
  const { matchingData, componentInformation } = props;
  const blueprint = filterFunctions(props.blueprint);
  const title = matchingData?.title || "";
  
  log.debug(`GridblockDefaultVariant starting with matchingData: ${JSON.stringify(matchingData)}`);
  
  const gridItems = matchingData?.componentsGrid || 
                    matchingData?.globalComponentSource?.componentsGrid || 
                    [];
  
  if (!gridItems || gridItems.length === 0) {
    log.debug("No grid items found to render");
    return null;
  }

  const flexClass = getFlexClasses(gridItems.length);

  log.debug(`GridblockDefaultVariant rendering with ${gridItems.length} items`);
  gridItems.forEach((item: any, index: number) => {
    log.debug(`Item ${index}: type=${item._type}, key=${item._key}`);
  });
  
  const pageDefinition: PageDefinition = componentInformation?.pageDefinition || {
    source: 'gridblockDefaultVariant',
    pageIdentifier: {
      identifier: componentInformation?.identifier || 'unknown',
      pageVariant: "default" as PageVariant,
      isFixedLayout: false
    }
  };
  
  const loadedComponents = await retrieveSubComponents(gridItems, blueprint, pageDefinition);

  return (
    <section className="py-8">
      {title && <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>}
      
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {gridItems.map((item: any, index: number) => {
            const componentId = item._key || `grid-item-${index}`;
            const loadedComponent = loadedComponents[componentId];
            
            return (
              <div key={`grid-item-${index}`} className={`px-4 mb-8 ${flexClass}`}>
                <div className="h-full bg-white rounded-lg shadow-sm p-6 flex flex-col">
                  {item ? (
                    <div id={`component-container-${componentId}`}>
                      {loadedComponent ? (
                        <DynamicComponentRenderer 
                          item={item} 
                          loadedComponent={loadedComponent} 
                          blueprint={blueprint}
                        />
                      ) : (
                        <div className="p-4 text-center">
                          <span className="text-gray-400">No data found for {item._type} component</span>
                        </div>
                      )}
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}