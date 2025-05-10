import React from "react";
import { componentBoilerPlate } from "@conversiondigital/headless-basics-data/src/component-tools/componentBoilerPlate";
import type { ViewComponentProps } from "@conversiondigital/headless-basics-data/src/interfaces/ThemeConfig.interface";
import { getLogger, logPrefix } from "@conversiondigital/headless-basics-data/src";
import GridblockDefaultVariant from "./variants/gridblockDefaultVariant";

export const log = getLogger("default.components.sanity.gridblock.variants");

export const componentTypes = {
  hero: "hero",
  toggle: "toggle",
  motto: "motto",
  textBlock: "textblock",
};


const serializeData = (data: any): any => {
  try {
    if (!data) return null;
    
    if (Array.isArray(data)) {
      return data.map(item => serializeData(item));
    }
    
    if (typeof data === 'object') {
      const serializable: Record<string, any> = {};
      
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          if (typeof data[key] !== 'function') {
            if (typeof data[key] === 'object' && data[key] !== null) {
              serializable[key] = serializeData(data[key]);
            } else {
              serializable[key] = data[key];
            }
          }
        }
      }
      return serializable;
    }
    
    return data;
  } catch (e) {
    log.error("Failed to serialize data:", e);
    return {};
  }
};

export default function GridblockUI(dynamicComponent: ViewComponentProps) {
  const { variant, blueprint, componentInformation, matchingData } = componentBoilerPlate(dynamicComponent);
  if (!matchingData) return null;

  log.trace(`${logPrefix()} [GridblockUI] started, matchingData: ${JSON.stringify(matchingData)}`);

  const serializedMatchingData = serializeData(matchingData);
  const serializedBlueprint = serializeData(blueprint);
  const serializedComponentInfo = serializeData(componentInformation);

  // switch (variant) {
  //   case "xDemo":
  //     return <DemoVariant blueprint={blueprint} componentInformation={componentInformation} matchingData={matchingData} />;
  //   default:
  return <GridblockDefaultVariant 
    blueprint={serializedBlueprint} 
    componentInformation={serializedComponentInfo} 
    matchingData={serializedMatchingData}
  />;
  // }
}