"use client";
import React from "react";
import { PageVariant } from "@conversiondigital/headless-basics-data/src/cms/constants";
import { getLogger } from "@conversiondigital/headless-basics-data/src";
import { 
  ToggleComponent, 
  TextBlockComponent, 
  HeroComponent, 
  MottoComponent 
} from '../subcomponents';

interface DynamicComponentRendererProps {
  item: any;
  loadedComponent: any;
  blueprint: any;
}

const log = getLogger("default.components.sanity.gridblock.dynamicRenderer");

export default function DynamicComponentRenderer({ 
  item, 
  loadedComponent, 
  blueprint 
}: DynamicComponentRendererProps) {
  log.debug(`Rendering component for type: ${item._type} with data:`, loadedComponent?.data);

  const componentProps = {
    matchingData: loadedComponent.data,
    componentInformation: {
      uid: item._key,
      identifier: item._key,
      pageDefinition: {
        source: item._type,
        pageIdentifier: {
          identifier: item._key,
          pageVariant: "subComponentsPage" as PageVariant,
          isFixedLayout: false
        }
      }
    },
    blueprint,
    item
  };

  switch (item._type.toLowerCase()) {
    case 'textblock':
      return <TextBlockComponent {...componentProps} />;
    case 'hero':
      return <HeroComponent {...componentProps} />;
    case 'toggle':
      return <ToggleComponent {...componentProps} />;
    case 'motto':
      return <MottoComponent {...componentProps} />;
    default:
      return (
        <div className="component-fallback border rounded p-4 h-full">
          <div className="component-type text-xs text-gray-500 mb-1">{item._type}</div>
          <h3 className="text-lg font-semibold mb-2">
            {loadedComponent?.data?.title || item.title || `${item._type} Component`}
          </h3>
          {loadedComponent?.data?.description && (
            <p className="text-gray-600 mb-3">{loadedComponent.data.description}</p>
          )}
          <pre className="text-xs mt-2 overflow-auto max-h-32 bg-gray-100 p-2 rounded">
            {JSON.stringify(loadedComponent?.data || {}, null, 2)}
          </pre>
        </div>
      );
  }
} 