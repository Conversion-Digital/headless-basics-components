import React from "react";
import { componentBoilerPlate } from "@conversiondigital/headless-basics-data/src/component-tools/componentBoilerPlate";
import type { ViewComponentProps } from "@conversiondigital/headless-basics-data/src/interfaces/ThemeConfig.interface";
import { getLogger, logPrefix } from "@conversiondigital/headless-basics-data/src";
import DemoVariant from "./variants/demoVariant";
import CdclientsDefaultVariant from "./variants/cdclientsDefaultVariant";

export const log = getLogger("conversion.components.cdclients");

export default function CdclientsUI(dynamicComponent: ViewComponentProps) {
  const { variant, matchingData } = componentBoilerPlate(dynamicComponent);
  if (!matchingData) return null;

  log.trace(`${logPrefix()} cdclientsUI started, matchingData: ${JSON.stringify(matchingData)}`);

  switch (variant) {
    case "xDemo":
      return <DemoVariant matchingData={matchingData} {...dynamicComponent} />;
    default:
      return <CdclientsDefaultVariant matchingData={matchingData} {...dynamicComponent} />;
  }
}