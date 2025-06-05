import React from "react";
import { componentBoilerPlate } from "@conversiondigital/headless-basics-data/src/component-tools/componentBoilerPlate";
import type { ViewComponentProps } from "@conversiondigital/headless-basics-data/src/interfaces/ThemeConfig.interface";
import { getLogger, logPrefix } from "@conversiondigital/headless-basics-data/src";
import DemoVariant from "./variants/demoVariant";
import CdinsightsDefaultVariant from "./variants/cdinsightsDefaultVariant";

export const log = getLogger("conversion.components.cdinsights");

export default function CdinsightsUI(dynamicComponent: ViewComponentProps) {
  const { variant, matchingData } = componentBoilerPlate(dynamicComponent);
  if (!matchingData) return null;

  log.trace(`${logPrefix()} cdinsightsUI started, matchingData: ${JSON.stringify(matchingData)}`);

  switch (variant) {
    case "xDemo":
      return <DemoVariant matchingData={matchingData} {...dynamicComponent} />;
    default:
      return <CdinsightsDefaultVariant matchingData={matchingData} {...dynamicComponent} />;
  }
}