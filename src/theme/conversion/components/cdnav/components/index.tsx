import React from "react";
import { componentBoilerPlate } from "@conversiondigital/headless-basics-data/src/component-tools/componentBoilerPlate";
import type { ViewComponentProps } from "@conversiondigital/headless-basics-data/src/interfaces/ThemeConfig.interface";
import { getLogger, logPrefix } from "@conversiondigital/headless-basics-data/src";
import DemoVariant from "./variants/demoVariant";
import CdnavDefaultVariant from "./variants/cdnavDefaultVariant";

export const log = getLogger("conversion.components.cdnav.components");

export default function CdnavUI(dynamicComponent: ViewComponentProps) {
  const { variant, matchingData } = componentBoilerPlate(dynamicComponent);
  if (!matchingData) return null;
  log.trace(`${logPrefix()} CdnavUI started, matchingData: ${JSON.stringify(matchingData)}`);

  switch (variant) {
    case "xDemo":
      return <DemoVariant matchingData={matchingData} {...dynamicComponent} />;
    default:
      return <CdnavDefaultVariant matchingData={matchingData} {...dynamicComponent} />;
  }
}