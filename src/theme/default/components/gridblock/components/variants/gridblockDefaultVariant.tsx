import React from "react";
import { StandardComponentProps } from "../../../../../../interfaces/standardComponentProps";
import { getLogger } from "@conversiondigital/headless-basics-data/src";
import { 
  ToggleComponent, 
  TextBlockComponent, 
  HeroComponent, 
  MottoComponent 
} from "../subcomponents";

const log = getLogger("default.components.sanity.gridblock.variants");

export default function GridblockDefaultVariant(props: StandardComponentProps) {
  const { matchingData, componentInformation, blueprint } = props;
  const title = matchingData?.title || "";
  
  log.debug(`GridblockDefaultVariant starting with matchingData: ${JSON.stringify(matchingData)}`);
  
  const gridItems = matchingData?.componentsGrid || 
                    matchingData?.globalComponentSource?.componentsGrid || 
                    [];
  
  const getFlexClasses = (itemCount: number) => {
    if (itemCount <= 1) return "w-full";
    
    if (itemCount === 2) return "w-full md:w-1/2";
    
    if (itemCount === 3) return "w-full md:w-1/3";
    
    if (itemCount === 4) return "w-full md:w-1/2 lg:w-1/4";
    
    return "w-full md:w-1/2 lg:w-1/3";
  };

  if (!gridItems || gridItems.length === 0) {
    log.debug("No grid items found to render");
    return null;
  }

  const flexClass = getFlexClasses(gridItems.length);

  log.debug(`GridblockDefaultVariant rendering with ${gridItems.length} items`);
  gridItems.forEach((item: any, index: number) => {
    log.debug(`Item ${index}: type=${item._type}, key=${item._key}`);
  });

  return (
    <section className="py-8">
      {title && <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>}
      
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {gridItems.map((item: any, index: number) => (
            <div key={`grid-item-${index}`} className={`px-4 mb-8 ${flexClass}`}>
              <div className="h-full bg-white rounded-lg shadow-sm p-6 flex flex-col">
                {item && (
                  <>
                    {item._type === 'toggle' && (
                      <ToggleComponent item={item} />
                    )}
                    
                    {item._type === 'textBlock' && (
                      <TextBlockComponent item={item} />
                    )}
                    
                    {item._type === 'hero' && (
                      <HeroComponent item={item} />
                    )}
                    
                    {item._type === 'motto' && (
                      <MottoComponent item={item} />
                    )}
                    
                    {!['toggle', 'textBlock', 'hero', 'motto'].includes(item._type) && (
                      <div>
                        <p>Unknown component type: {item._type}</p>
                        <pre className="text-sm bg-gray-100 p-2 rounded overflow-auto">
                          {JSON.stringify(item, null, 2)}
                        </pre>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}