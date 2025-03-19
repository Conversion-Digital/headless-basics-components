import React from "react";
import { ViewComponentProps } from "@conversiondigital/headless-basics-data/src/interfaces/ThemeConfig.interface";
import { componentBoilerPlate } from "@conversiondigital/headless-basics-data/src/component-tools/componentBoilerPlate";
import OurCompanyIndex from "./components";

export function View(dynamicComponent: ViewComponentProps) {
  const { variant, blueprint, componentInformation, matchingData } = componentBoilerPlate(dynamicComponent);
  return (
    <OurCompanyIndex
      variant={variant}
      blueprint={blueprint}
      componentInformation={componentInformation}
      matchingData={matchingData}
    />
  );
}