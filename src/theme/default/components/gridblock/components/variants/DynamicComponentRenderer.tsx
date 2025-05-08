"use client";
import React, { useState, useMemo } from "react";
import { getLogger } from "@conversiondigital/headless-basics-data/src";

interface DynamicComponentRendererProps {
  item: any;
  loadedComponent: any;
  blueprint: any;
}

const log = getLogger("default.components.sanity.gridblock.dynamicRenderer");

const isSerializable = (value: any): boolean => {
  if (value === null || value === undefined) return true;
  if (typeof value === 'function') return false;
  if (typeof value === 'object') {
    try {
      JSON.stringify(value);
      return true;
    } catch (err) {
      return false;
    }
  }
  return true;
};

export default function DynamicComponentRenderer({
  item,
  loadedComponent,
  blueprint
}: DynamicComponentRendererProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  const safeItem = useMemo(() => {
    try {
      return JSON.parse(JSON.stringify(item));
    } catch (e) {
      console.warn("Item không thể serialize, trả về object sạch:", e);
      return {
        _type: item._type || 'unknown'
      };
    }
  }, [item]);
  
  const safeLoadedComponent = useMemo(() => {
    if (!loadedComponent) return null;
    
    try {
      return JSON.parse(JSON.stringify(loadedComponent));
    } catch (e) {
      console.warn("LoadedComponent không thể serialize, trả về dữ liệu đơn giản:", e);
      return {
        data: { _type: item._type || 'unknown' }
      };
    }
  }, [loadedComponent, item._type]);
  
  log.debug(`Rendering component for type: ${safeItem._type}`);

  const data = safeLoadedComponent?.data || safeItem;
  
  const componentTitle = 
    data?.title || 
    data?.heading || 
    safeItem.title || 
    safeItem.heading || 
    `${safeItem._type || 'Unknown'} Component`;
    
  const componentDescription = 
    data?.description || 
    data?.subtitle ||
    data?.text ||
    safeItem.description || 
    safeItem.text || 
    safeItem.subtitle || 
    '';
  
  const componentType = safeItem._type?.toLowerCase() || '';
  
  const hasBackgroundImage = 
    (data.backgroundImage && data.backgroundImage.asset && data.backgroundImage.asset.url) ||
    (safeItem.backgroundImage && safeItem.backgroundImage.asset && safeItem.backgroundImage.asset.url);
    
  const backgroundImageUrl = 
    (data.backgroundImage?.asset?.url) || 
    (safeItem.backgroundImage?.asset?.url);
    
  const button = data.button || safeItem.button;
  const hasButton = button && button.label;
  
  const words = data.words || safeItem.words || data.quote || safeItem.quote;
  const author = data.author || safeItem.author;
  
  const htmlContent = data.content || safeItem.content || data.text || safeItem.text;
  
  switch (componentType) {
    case 'hero':
      return (
        <div className="component-hero">
          {hasBackgroundImage ? (
            <div 
              className="bg-cover bg-center h-48 -mx-4 -mt-4 mb-3 rounded-t relative" 
              style={{ backgroundImage: `url(${backgroundImageUrl})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <h3 className="text-xl font-bold mb-2">{componentTitle}</h3>
                  {componentDescription && <p className="text-sm mb-3">{componentDescription}</p>}
                  
                  {hasButton && (
                    <button className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-gray-100 font-medium">
                      {button.label}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 -mx-4 -mt-4 mb-3 rounded-t p-6 text-white">
              <h3 className="text-xl font-bold mb-2">{componentTitle}</h3>
              {componentDescription && <p className="mb-3">{componentDescription}</p>}
              
              {hasButton && (
                <button className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-gray-100 font-medium">
                  {button.label}
                </button>
              )}
            </div>
          )}
        </div>
      );
      
    case 'toggle':
    case 'motto':
    default:
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
          
          {htmlContent && (
            <div 
              className="prose mt-2" 
              dangerouslySetInnerHTML={{ __html: htmlContent }} 
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
} 