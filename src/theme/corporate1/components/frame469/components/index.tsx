
import React from "react";
import { componentBoilerPlate } from "@conversiondigital/headless-basics-data/src/component-tools/componentBoilerPlate";
import type { ViewComponentProps } from "@conversiondigital/headless-basics-data/src/interfaces/ThemeConfig.interface";
import DemoVariant from "./variants/demoVariant";
import Frame469DefaultVariant from "./variants/frame469DefaultVariant";
import { getLogger, logPrefix } from "@conversiondigital/headless-basics-data/src";

const log = getLogger("theme.corporate1.components.frame469.components.index");

export default function Frame469UI(dynamicComponent: ViewComponentProps) {
  const { variant, matchingData } = componentBoilerPlate(dynamicComponent);
  if (!matchingData) return null;

  log.trace(`${logPrefix()} [Frame469UI] variant: ${variant}, data: ${JSON.stringify(matchingData)}`);

  switch (variant) {
    case "xDemo":
      return <DemoVariant {...dynamicComponent} matchingData={matchingData} />;
    default:
      return <Frame469DefaultVariant {...dynamicComponent} matchingData={matchingData} />;
  }
}
