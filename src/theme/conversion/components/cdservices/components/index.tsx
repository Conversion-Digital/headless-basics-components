import React from "react";
import { componentBoilerPlate } from "@conversiondigital/headless-basics-data/src/component-tools/componentBoilerPlate";
import type { ViewComponentProps } from "@conversiondigital/headless-basics-data/src/interfaces/ThemeConfig.interface";
import { getLogger, logPrefix } from "@conversiondigital/headless-basics-data/src";
import DemoVariant from "./variants/demoVariant";
import DefaultVariant from "./variants/cdservicesDefaultVariant";
import CdServiceFeatureBlocksVariant from "./variants/CdServiceFeatureBlocksVariant";

export const log = getLogger("conversion.components.cdservices");

export default function TemplateUI(dynamicComponent: ViewComponentProps) {
  const { variant, matchingData } = componentBoilerPlate(dynamicComponent);

  if (!matchingData) return null;
  log.trace(`${logPrefix()} TemplateUI started, matchingData: ${JSON.stringify(matchingData)}`);

  switch (variant) {
    case "xDemo":
      return <DemoVariant matchingData={matchingData} {...dynamicComponent} />;
    case "featureBlocks":
      return <CdServiceFeatureBlocksVariant matchingData={matchingData} {...dynamicComponent} />;
    default:
      return <DefaultVariant matchingData={matchingData} {...dynamicComponent} />;
  }
}