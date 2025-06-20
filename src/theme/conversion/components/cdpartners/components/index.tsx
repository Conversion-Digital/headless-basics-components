import React from "react";
import { componentBoilerPlate } from "@conversiondigital/headless-basics-data/src/component-tools/componentBoilerPlate";
import type { ViewComponentProps } from "@conversiondigital/headless-basics-data/src/interfaces/ThemeConfig.interface";
import { getLogger, logPrefix } from "@conversiondigital/headless-basics-data/src";
import DemoVariant from "./variants/demoVariant";
import CdpartnersDefaultVariant from "./variants/cdpartnersDefaultVariant";

export const log = getLogger("conversion.components.cdpartners");

export default function CdpartnersUI(dynamicComponent: ViewComponentProps) {
  const { variant, matchingData } = componentBoilerPlate(dynamicComponent);
  if (!matchingData) return null;
  log.trace(`${logPrefix()} cdpartnersUI started, matchingData: ${JSON.stringify(matchingData)}`);
  switch (variant) {
    case "xDemo":
      return <DemoVariant matchingData={matchingData} {...dynamicComponent} />;
    default:
      return <CdpartnersDefaultVariant matchingData={matchingData} {...dynamicComponent} />;
  }
}