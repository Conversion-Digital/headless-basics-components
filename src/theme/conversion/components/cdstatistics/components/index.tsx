import React from "react";
import { componentBoilerPlate } from "@conversiondigital/headless-basics-data/src/component-tools/componentBoilerPlate";
import { ViewComponentProps } from "@conversiondigital/headless-basics-data/src/interfaces";
import { getLogger, logPrefix } from "@conversiondigital/headless-basics-data/src";
import CdStatisticsDefaultVariant from "./variants/CdStatisticsDefaultVariant";

export const log = getLogger("conversion.components.cdstatistics");

// Interface for individual statistic item
export interface StatisticItem {
  value: string;
  description: string;
}

// Interface for global component source
interface GlobalComponentSource {
  __typename: string;
  _key: string;
  _type: string;
  stats: StatisticItem[];
}

// Interface for CdStatistics component data
export interface CdStatisticsData {
  __typename: string;
  _key: string;
  _type: string;
  selectableVariant: string;
  title?: string;
  stats: StatisticItem[];
  sortOrder: number;
  globalComponentSource?: GlobalComponentSource;
}

export default function CdStatisticsUI(dynamicComponent: ViewComponentProps) {
  const { variant, matchingData } = componentBoilerPlate<CdStatisticsData>(dynamicComponent);
  if (!matchingData) return null;

  log.trace(`${logPrefix()} CdStatisticsUI started, matchingData: ${JSON.stringify(matchingData)}`);

  switch (variant) {
    case "default":
    default:
      return <CdStatisticsDefaultVariant matchingData={matchingData} {...dynamicComponent} />;
  }
} 