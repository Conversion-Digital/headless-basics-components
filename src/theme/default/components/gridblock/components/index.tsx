import React from "react";
import { componentBoilerPlate } from "@conversiondigital/headless-basics-data/src/component-tools/componentBoilerPlate";
import type { ViewComponentProps } from "@conversiondigital/headless-basics-data/src/interfaces/ThemeConfig.interface";
import { getLogger, logPrefix } from "@conversiondigital/headless-basics-data/src";
import GridblockDefaultVariant from "./variants/gridblockDefaultVariant";

export const log = getLogger("default.components.sanity.gridblock.variants");

export default function GridblockUI(dynamicComponent: ViewComponentProps) {
  const { variant, blueprint, componentInformation, matchingData } = componentBoilerPlate(dynamicComponent);
  if (!matchingData) return null;

  log.trace(`${logPrefix()} [GridblockUI] started, matchingData: ${JSON.stringify(matchingData)}`);

  // switch (variant) {
  //   case "xDemo":
  //     return <DemoVariant blueprint={blueprint} componentInformation={componentInformation} matchingData={matchingData} />;
  //   default:
  return <GridblockDefaultVariant blueprint={blueprint} componentInformation={componentInformation} matchingData={matchingData} />;
  // }
}