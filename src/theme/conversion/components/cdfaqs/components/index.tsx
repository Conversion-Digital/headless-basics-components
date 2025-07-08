import React from "react";
import { componentBoilerPlate } from "@conversiondigital/headless-basics-data/src/component-tools/componentBoilerPlate";
import { ViewComponentProps } from "@conversiondigital/headless-basics-data/src/interfaces";
import { getLogger, logPrefix } from "@conversiondigital/headless-basics-data/src";
import CdFaqsDefaultVariant from "./variants/CdFaqsDefaultVariant";

export const log = getLogger("conversion.components.cdfaqs");

// Interface for individual FAQ item
export interface FaqItem {
  title: string;
  richtextRaw: any[];
}

// Interface for global component source
interface GlobalComponentSource {
  __typename: string;
  _key: string;
  _type: string;
  title: string;
  description: string;
  items: FaqItem[];
}

// Interface for CdFaqs component data
export interface CdFaqsData {
  __typename: string;
  _key: string;
  _type: string;
  selectableVariant: string;
  title: string;
  description: string;
  items: FaqItem[];
  sortOrder: number;
  globalComponentSource?: GlobalComponentSource;
}

export default function CdFaqsUI(dynamicComponent: ViewComponentProps) {
  const { variant, matchingData } = componentBoilerPlate<CdFaqsData>(dynamicComponent);
  if (!matchingData) return null;

  log.trace(`${logPrefix()} CdFaqsUI started, matchingData: ${JSON.stringify(matchingData)}`);

  switch (variant) {
    case "default":
    default:
      return <CdFaqsDefaultVariant matchingData={matchingData} />;
  }
} 