import React from "react";
import { componentBoilerPlate } from "@conversiondigital/headless-basics-data/src/component-tools/componentBoilerPlate";
import { ViewComponentProps } from "@conversiondigital/headless-basics-data/src/interfaces";
import { getLogger, logPrefix } from "@conversiondigital/headless-basics-data/src";
import CdIntroductionDefaultVariant from "./variants/CdIntroductionDefaultVariant";

export const log = getLogger("conversion.components.cdintroduction");

// Interface for global component source
interface GlobalComponentSource {
  __typename: string;
  _key: string;
  _type: string;
  title: string;
  richtextRaw: any;
}

// Interface for CdIntroduction component data
export interface CdIntroductionData {
  __typename: string;
  _key: string;
  _type: string;
  selectableVariant: string;
  title: string;
  richtextRaw: any;
  sortOrder: number;
  globalComponentSource?: GlobalComponentSource;
}

export default function CdIntroductionUI(dynamicComponent: ViewComponentProps) {
  const { variant, matchingData } = componentBoilerPlate<CdIntroductionData>(dynamicComponent);
  if (!matchingData) return null;

  log.trace(`${logPrefix()} CdIntroductionUI started, matchingData: ${JSON.stringify(matchingData)}`);

  switch (variant) {
    case "default":
    default:
      return <CdIntroductionDefaultVariant matchingData={matchingData} {...dynamicComponent} />;
  }
}
