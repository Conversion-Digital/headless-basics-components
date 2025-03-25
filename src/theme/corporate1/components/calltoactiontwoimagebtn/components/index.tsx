import React from "react";
import { componentBoilerPlate } from "@conversiondigital/headless-basics-data/src/component-tools/componentBoilerPlate";
import { ViewComponentProps } from "@conversiondigital/headless-basics-data/src/interfaces";
import { CallToActionTwoImageBtnDemo } from "./variants/demoVariant";

export default function Index(dynamicComponent: ViewComponentProps) {
  const { blueprint, componentInformation, matchingData } = componentBoilerPlate(dynamicComponent);
  const { variant } = componentInformation?.metaData || {};

  if (!variant) {
    return (
      <CallToActionTwoImageBtnDemo
        blueprint={blueprint}
        componentInformation={componentInformation}
        matchingData={matchingData}
      />
    );
  }

  switch (variant.toLowerCase()) {
    case "calltoactiontwoimagebtndemo":
      return (
        <CallToActionTwoImageBtnDemo
          blueprint={blueprint}
          componentInformation={componentInformation}
          matchingData={matchingData}
        />
      );
    default:
      return (
        <CallToActionTwoImageBtnDemo
          blueprint={blueprint}
          componentInformation={componentInformation}
          matchingData={matchingData}
        />
      );
  }
}