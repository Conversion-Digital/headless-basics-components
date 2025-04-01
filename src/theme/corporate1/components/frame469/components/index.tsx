
import React from "react";
import { componentBoilerPlate } from "@conversiondigital/headless-basics-data/src/component-tools/componentBoilerPlate";
import type { ViewComponentProps } from "@conversiondigital/headless-basics-data/src/interfaces/ThemeConfig.interface";
import DemoVariant from "./variants/demoVariant";
import Frame469DefaultVariant from "./variants/frame469DefaultVariant";
import { getLogger, logPrefix } from "@conversiondigital/headless-basics-data/src";

export const log = getLogger("theme.corporate1.components.frame469");

export default function Frame469UI(dynamicComponent: ViewComponentProps) {
  const { variant, matchingData } = componentBoilerPlate(dynamicComponent);
  if (!matchingData) return null;

  log.trace(`${logPrefix()} frame469UI started, matchingData: ${JSON.stringify(matchingData)}`);

  switch (variant) {
    case "xDemo":
      return <DemoVariant matchingData={matchingData} {...dynamicComponent} />;
    default:
      return <Frame469DefaultVariant matchingData={matchingData} {...dynamicComponent} />;
  }
}
