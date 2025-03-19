import React from "react";
import { componentBoilerPlate, ViewComponentProps } from "@conversiondigital/headless-basics-data/src";
import { OurCompanyIndex } from "./components";

export function View(dynamicComponent: ViewComponentProps) {
  const { variant, blueprint, componentInformation, matchingData } =
    componentBoilerPlate(dynamicComponent);

  return (
    <OurCompanyIndex
      blueprint={blueprint}
      componentInformation={componentInformation}
      matchingData={matchingData}
      variant={variant}
    />
  );
}