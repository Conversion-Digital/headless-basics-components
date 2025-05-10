"use client";
import React, { useState, useMemo, useEffect } from "react";
import { getLogger } from "@conversiondigital/headless-basics-data/src";
import dynamic from "next/dynamic";
import { componentTypes } from "../index";


const HeroComponent = dynamic(() => import("../../../hero/components"), { 
  loading: () => <div>Loading Hero Component...</div>
});

const MottoComponent = dynamic(() => import("../../../motto/components"), { 
  loading: () => <div>Loading Motto Component...</div>
});

const ToggleComponent = dynamic(() => import("../../../toggle/components"), { 
  loading: () => <div>Loading Toggle Component...</div>
});

const TextBlockComponent = dynamic(() => import("../../../richtext/components"), { 
  loading: () => <div>Loading Text Block Component...</div>
});

interface DynamicComponentRendererProps {
  item: any;
  loadedComponent: any;
  blueprint: any;
}

const log = getLogger("default.components.sanity.gridblock.dynamicRenderer");

const LocalComponentRegistry = {
  [componentTypes.hero]: HeroComponent,
  [componentTypes.toggle]: ToggleComponent,
  [componentTypes.motto]: MottoComponent,
  [componentTypes.textBlock]: TextBlockComponent,
};

const mapComponentProps = (componentType: string, data: any) => {
  const commonMetaData = {
    id: data._id || data.id || `${componentType}-${Math.random().toString(36).substr(2, 9)}`,
    variant: data.variant || data.selectableVariant || "",
    url: "",
    typeName: componentType.toLowerCase(),
    rendering: `theme/default/components/${componentType.toLowerCase()}/components/index.tsx`,
    name: data.title || data.heading || `${componentType} Component`,
    renderingExportFunction: `${componentType}UI`,
    queryFileLocation: "",
    query: "",
    liveDocumentation: "",
    youtubeVideo: "",
    blueprintComponent: "",
    isInsideGrid: true,
    isClientSide: false
  };
  
  const commonBlueprint = {};
  
  switch (componentType.toLowerCase()) {
    case 'hero':
      return {
        blueprint: commonBlueprint,
        componentInformation: {
          data: {
            title: data.title,
            heading: data.heading,
            description: data.description,
            subtitle: data.subtitle,
            image: {
              asset: {
                url: data.backgroundImage?.asset?.url
              }
            },
            backgroundImage: data.backgroundImage?.asset?.url,
            buttons: data.buttons,
            variant: data.selectableVariant || ""
          },
          metaData: commonMetaData,
          identifier: data._id || data.id || `hero-${Math.random().toString(36).substr(2, 9)}`,
          sortOrder: data.sortOrder || 0
        },
        matchingData: data
      };
    case 'toggle':
      return {
        blueprint: commonBlueprint,
        componentInformation: {
          data: {
            text: data.text || "Toggle",
            aRIALabel: data.aRIALabel || "Toggle Button",
            showIcon: data.showIcon || false,
            variant: data.variant || "Default",
            className: data.className
          },
          metaData: commonMetaData,
          identifier: data._id || data.id || `toggle-${Math.random().toString(36).substr(2, 9)}`,
          sortOrder: data.sortOrder || 0
        },
        matchingData: data
      };
    case 'motto':
      return {
        blueprint: commonBlueprint,
        componentInformation: {
          data: {
            words: data.words || data.quote || "",
            align: data.align || "center",
            variant: data.variant || ""
          },
          metaData: commonMetaData,
          identifier: data._id || data.id || `motto-${Math.random().toString(36).substr(2, 9)}`,
          sortOrder: data.sortOrder || 0
        },
        matchingData: data
      };
    case 'textblock':
      return {
        blueprint: commonBlueprint,
        componentInformation: {  
          data: {
            title: data.title,
            subtitle: data.subtitle,
            backgroundColour: data.backgroundColour || "white",
            processedBody: data.text || data.content || "",
            text: data.text || data.content || "",
            variant: data.variant || ""
          },
          metaData: commonMetaData,
          identifier: data._id || data.id || `textblock-${Math.random().toString(36).substr(2, 9)}`,
          sortOrder: data.sortOrder || 0
        },
        matchingData: data
      };
    default:
      // For unknown component types, create a basic ViewComponentProps structure
      return {
        blueprint: commonBlueprint,
        componentInformation: {
          data: data,
          metaData: commonMetaData,
          identifier: data._id || data.id || `unknown-${Math.random().toString(36).substr(2, 9)}`,
          sortOrder: data.sortOrder || 0
        },
        matchingData: data
      };
  }
};

export default function DynamicComponentRenderer({
  item,
  loadedComponent,
  blueprint
}: DynamicComponentRendererProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [componentData, setComponentData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    if (item?._type === 'hero') {
      log.info('Hero component data:', {
        itemVariant: item?.variant,
        itemKeys: Object.keys(item || {}),
        _type: item?._type,
        hasVariantField: 'variant' in (item || {})
      });
    }
    
    if (item?._type === 'toggle') {
      log.info('Toggle component data:', {
        itemVariant: item?.variant,
        itemKeys: Object.keys(item || {}),
        _type: item?._type,
        text: item?.text,
        aRIALabel: item?.aRIALabel,
        showIcon: item?.showIcon
      });
    }
  }, [item]);
  
  const safeItem = useMemo(() => {
    try {
      return item ? { ...item } : { _type: 'unknown' };
    } catch (e) {
      console.warn("Item couldn't be processed:", e);
      return { _type: 'unknown' };
    }
  }, [item]);
  
  const data = useMemo(() => {
    const baseData = componentData || loadedComponent?.data || safeItem;
    
      if (!baseData.variant) {
      if (item?.variant) baseData.variant = item.variant;
      if (loadedComponent?.data?.variant) baseData.variant = loadedComponent.data.variant;
    }
    
    return baseData;
  }, [componentData, loadedComponent, safeItem, item]);
  
  const componentTitle = 
    item?.title || 
    item?.heading || 
    safeItem.title || 
    safeItem.heading || 
    `${safeItem._type || 'Unknown'} Component`;
    
  const componentDescription = 
    item?.description || 
    item?.subtitle ||
    item?.text ||
    safeItem.description || 
    safeItem.text || 
    safeItem.subtitle || 
    '';
  
  const componentTypeRaw = item._type?.toLowerCase() || '';
  
  let componentType = componentTypeRaw;
  if (componentTypeRaw === 'textblock' || componentTypeRaw === 'textBlock') {
    componentType = componentTypes.textBlock;
  } else if (componentTypeRaw === 'hero') {
    componentType = componentTypes.hero;
  } else if (componentTypeRaw === 'toggle') {
    componentType = componentTypes.toggle;
  } else if (componentTypeRaw === 'motto') {
    componentType = componentTypes.motto;
  }
  
  const DynamicComponent = componentType ? LocalComponentRegistry[componentType as keyof typeof LocalComponentRegistry] : null;
  
  if (DynamicComponent) {
    try {
      const componentProps = mapComponentProps(componentType, data);
      
      log.info(`Rendering ${componentType} component with variant: ${data.variant || 'default'}`, { 
        componentType,
        hasVariant: !!data.variant,
        variant: data.variant,
        dataKeys: Object.keys(data)
      });
      
      return <DynamicComponent {...componentProps} />;
    } catch (error) {
      console.error(`Error rendering ${componentType} component:`, error);
      
      return (
        <div className="p-4 border border-red-300 bg-red-50 rounded">
          <p className="text-red-700 font-medium">Error rendering {componentType} component</p>
          <p className="text-sm text-red-600 mt-1">{(error as Error).message || "Unknown error"}</p>
        </div>
      );
    }
  }
  
  return (
    <div className="component-default">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs uppercase tracking-wider text-gray-500 bg-gray-100 px-2 py-1 rounded">
          {componentType || "Unknown Component"}
        </span>
      </div>
      
      <h3 className="text-lg font-bold mb-2">{componentTitle}</h3>
      
      {componentDescription && (
        <p className="text-gray-600 mb-3">{componentDescription}</p>
      )}
      
      {data.content && (
        <div 
          className="prose mt-2" 
          dangerouslySetInnerHTML={{ __html: data.content }} 
        />
      )}
      
      {process.env.NODE_ENV === 'development' && (
        <details className="mt-4 border-t pt-2">
          <summary className="text-xs text-gray-500 cursor-pointer">Debug Info</summary>
          <div className="mt-2">
            <div className="text-xs bg-gray-100 p-2 rounded overflow-auto max-h-32">
              <pre>{JSON.stringify(safeItem, null, 2)}</pre>
            </div>
          </div>
        </details>
      )}
    </div>
  );
} 