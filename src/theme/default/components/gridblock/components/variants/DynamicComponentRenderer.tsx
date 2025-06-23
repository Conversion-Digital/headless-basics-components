"use client";
import React, { useMemo } from "react";
import { getLogger } from "@conversiondigital/headless-basics-data/src";
import dynamic from "next/dynamic";
import { StandardComponentProps } from "../../../../../../interfaces/standardComponentProps";

interface DynamicComponentRendererProps {
  item: any;
  loadedComponent: any;
  blueprint: any;
}

const log = getLogger("default.components.sanity.gridblock.dynamicRenderer");

const getDynamicComponent = (componentType: string) => {
  const normalizedType = componentType?.toLowerCase();
  
  if (!normalizedType) {
    log.warn("No component type provided for dynamic loading");
    return null;
  }

  log.info(`Creating dynamic component loader for: ${normalizedType}`);
  
  return dynamic(
    () => {
      log.info(`Dynamically importing: ${normalizedType}`);
      
      return import(`../../../${normalizedType}/components`).then(mod => {
        return {
          default: (props: any) => {
            const Component = mod.default;
            return <Component {...props} />;
          }
        };
      });
    },
    { 
      loading: () => <div className="py-4">Loading {normalizedType} Component...</div>,
      ssr: false 
    }
  );
};

export default function DynamicComponentRenderer({
  item,
  loadedComponent,
  blueprint
}: DynamicComponentRendererProps) {
  const data = useMemo(() => {
    return loadedComponent?.data || item || {};
  }, [loadedComponent, item]);
  
  const componentType = item?._type?.toLowerCase() || '';
  
  if (!componentType) {
    return (
      <div className="p-4 border border-yellow-300 bg-yellow-50 rounded">
        <p className="text-yellow-700 font-medium">Unknown component type</p>
        <p className="text-sm text-yellow-600 mt-1">No component type specified</p>
      </div>
    );
  }
  
  const DynamicComponent = getDynamicComponent(componentType);
  
  if (!DynamicComponent) {
    return (
      <div className="p-4 border border-red-300 bg-red-50 rounded">
        <p className="text-red-700 font-medium">Failed to create component: {componentType}</p>
        <p className="text-sm text-red-600 mt-1">Component could not be initialized</p>
      </div>
    );
  }
  
  try {
    const componentProps: StandardComponentProps = {
      blueprint: blueprint || {},
      componentInformation: {
        data: data,
        metaData: {
          id: data._id || data.id || `${componentType}-${Math.random().toString(36).substr(2, 9)}`,
          variant: data.variant || data.selectableVariant || "",
          url: "",
          typeName: componentType,
          rendering: `theme/default/components/${componentType}/components/index.tsx`,
          name: data.title || data.heading || `${componentType} Component`,
          renderingExportFunction: `${componentType}UI`,
          queryFileLocation: "",
          query: "",
          liveDocumentation: "",
          youtubeVideo: "",
          isInsideGrid: true,
          isClientSide: false
        },
        identifier: data._id || data.id || `${componentType}-${Math.random().toString(36).substr(2, 9)}`,
        sortOrder: data.sortOrder || 0
      },
      matchingData: data
    };
    
    log.info(`Rendering ${componentType} component with variant: ${data.variant || 'default'}`); 
    
    return <DynamicComponent {...componentProps} />;
  } catch (error) {
    console.error(`Error rendering ${componentType} component:`, error);
    
    return (
      <div className="p-4 border border-red-300 bg-red-50 rounded">
        <p className="text-red-700 font-medium">Error rendering {componentType} component</p>
        <p className="text-sm text-red-600 mt-1">{(error as Error).message || "Unknown error"}</p>
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-2 text-xs text-gray-600">
            <p>Debug information:</p>
            <ul className="list-disc pl-5">
              <li>Component Type: {componentType}</li>
              <li>Has variant: {data.variant ? 'Yes' : 'No'}</li>
              <li>Variant: {data.variant || 'default'}</li>
              <li>Has data: {Object.keys(data).length > 0 ? 'Yes' : 'No'}</li>
              <li>Path: ../../../{componentType}/components</li>
            </ul>
          </div>
        )}
      </div>
    );
  }
} 