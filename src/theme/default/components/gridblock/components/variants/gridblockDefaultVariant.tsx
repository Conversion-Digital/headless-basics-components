"use client";

import { getLogger } from "@conversiondigital/headless-basics-data/src";
import dynamic from "next/dynamic";
import { StandardComponentProps } from "../../../../../../interfaces/standardComponentProps";

const log = getLogger("default.components.sanity.gridblock.variants");

const DynamicComponentRenderer = dynamic(() => import("./DynamicComponentRenderer"), {
  loading: () => <div>Loading component...</div>,
});

const createUniqueGridId = (props: StandardComponentProps): string => {
  const { matchingData, componentInformation } = props;

  const originalKey = matchingData?._key;
  const originalId = matchingData?._originalKey || originalKey;

  if (originalId) {
    return originalId;
  }

  const idParts = [
    matchingData?._id,
    matchingData?.title,
    matchingData?.metaData?.id,
    componentInformation?.id,
    componentInformation?.sortOrder,
    matchingData?.sortOrder,
  ].filter(Boolean);

  if (idParts.length > 0) {
    return `gridblock-${idParts.join("-")}`;
  }

  return `gridblock-${Math.random().toString(36).substr(2, 9)}`;
};

export default function GridblockDefaultVariant(props: StandardComponentProps) {
  const { matchingData, componentInformation, blueprint } = props;

  const uniqueGridId = createUniqueGridId(props);

  const title = matchingData?.title || "";
  const blockId = uniqueGridId;

  // Ensure gridItems is always an array
  let gridItems = matchingData?.gridComponents || matchingData?.componentsGrid || matchingData?.globalComponentSource?.componentsGrid || [];
  
  // Check if it's an array, if not, convert to an array or use an empty array
  if (!Array.isArray(gridItems)) {
    log.warn(`gridItems is not an array, actual type: ${typeof gridItems}`, gridItems);
    // Try to convert to array if it's an object with numeric keys
    if (gridItems && typeof gridItems === 'object') {
      try {
        const tempArray = Object.values(gridItems);
        if (tempArray.length > 0) {
          gridItems = tempArray;
          log.info(`Successfully converted gridItems object to array with ${tempArray.length} items`);
        } else {
          gridItems = [];
        }
      } catch (e) {
        log.error('Failed to convert gridItems to array:', e);
        gridItems = [];
      }
    } else {
      gridItems = [];
    }
  }

  const getFlexClasses = (itemCount: number) => {
    if (itemCount <= 1) return "w-full";

    if (itemCount === 2) return "w-full md:w-1/2";

    if (itemCount === 3) return "w-full md:w-1/3";

    if (itemCount === 4) return "w-full md:w-1/2 lg:w-1/4";

    return "w-full md:w-1/2 lg:w-1/3";
  };

  if (!gridItems || gridItems.length === 0) {
    log.debug(`No grid items found to render for blockId: ${blockId}`);
    return null;
  }

  const flexClass = getFlexClasses(gridItems.length);

  const processedGridItems = gridItems.map((item: any, index: number) => {
    const itemType = item._type || item.contentTypeAlias;
    if (!item._key) {
      item._key = `${blockId}-item-${index}-${item.title || "no-title"}-${Math.random().toString(36).substring(2, 7)}`;
    }

    return {
      ...item,
      _gridBlockId: blockId,
      _index: index,
    };
  });

  return (
    <section className="py-8" data-blockid={blockId} id={blockId.replace(/[^a-zA-Z0-9-_]/g, "-")}>
      {title && <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>}

      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {processedGridItems.map((item: any, index: number) => {
            const itemKey = `${blockId}-item-${index}-${item._key || item.id || "unknown"}`;
            
            return (
              <div key={itemKey} className={`px-4 mb-8 ${flexClass}`} data-itemid={item._key || item.id || item._id}>
                <div className="h-full bg-white rounded-lg shadow-sm p-6 flex flex-col">
                  <DynamicComponentRenderer 
                    item={item}
                    loadedComponent={null} 
                    blueprint={blueprint ? { ...blueprint } : null}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
