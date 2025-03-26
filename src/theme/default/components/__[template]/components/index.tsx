
import React from "react";
import { componentBoilerPlate } from "@conversiondigital/headless-basics-data/src/component-tools/componentBoilerPlate";
import type { ViewComponentProps } from "@conversiondigital/headless-basics-data/src/interfaces/ThemeConfig.interface";
import DemoVariant from "./variants/demoVariant";
import Frame469DefaultVariant from "./variants/frame469DefaultVariant";

export function Index(dynamicComponent: ViewComponentProps) {
  const { variant, matchingData } = componentBoilerPlate(dynamicComponent);
  if (!matchingData) return null;

  switch (variant) {
    case "xDemo":
      return <DemoVariant matchingData={matchingData} {...dynamicComponent} />;
    default:
      return <Frame469DefaultVariant matchingData={matchingData} {...dynamicComponent} />;
  }
}
