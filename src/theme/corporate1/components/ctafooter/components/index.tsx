import React from "react";
import { componentBoilerPlate } from "@conversiondigital/headless-basics-data/src/component-tools/componentBoilerPlate";
import type { ViewComponentProps } from "@conversiondigital/headless-basics-data/src/interfaces/ThemeConfig.interface";
import DemoVariant from "./variants/demoVariant";
import CtafooterDefaultVariant from "./variants/ctafooterDefaultVariant";
import { getLogger, logPrefix } from "@conversiondigital/headless-basics-data/src";

export const log = getLogger("theme.components.ctafooter.variants");

export default function CtafooterUI(dynamicComponent: ViewComponentProps) {
  const { variant, matchingData } = componentBoilerPlate(dynamicComponent);
  if (!matchingData) return null;
  log.trace(`${logPrefix()} CtafooterUI started, matchingData: ${JSON.stringify(matchingData)}`);

  switch (variant) {
    case "xDemo":
      return <DemoVariant matchingData={matchingData} {...dynamicComponent} />;
    default:
      return <CtafooterDefaultVariant matchingData={matchingData} {...dynamicComponent} />;
  }
}