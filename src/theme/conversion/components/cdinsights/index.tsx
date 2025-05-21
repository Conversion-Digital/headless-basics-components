import React from "react"
import { componentBoilerPlate } from "@conversiondigital/headless-basics-data/src/component-tools/componentBoilerPlate"
import type { ViewComponentProps } from "@conversiondigital/headless-basics-data/src/interfaces/ThemeConfig.interface"
import { getLogger, logPrefix } from "@conversiondigital/headless-basics-data/src"
import DemoVariant from "./components/variants/demoVariant"
import DefaultVariant from "./components/variants/cdinsightsDefaultVariant"

export const log = getLogger("conversion.components.cdinsights")

export default function CdinsightsUI(dynamicComponent: ViewComponentProps) {
  const { variant, matchingData } = componentBoilerPlate(dynamicComponent);
  if (!matchingData) return null;
  log.trace(`${logPrefix()} cdinsightsUI started, matchingData: ${JSON.stringify(matchingData)}`);

  switch (variant) {
    case "xDemo":
      return <DemoVariant matchingData={matchingData} {...dynamicComponent} />;
    default:
      return <DefaultVariant matchingData={matchingData} {...dynamicComponent} />;
  }
}