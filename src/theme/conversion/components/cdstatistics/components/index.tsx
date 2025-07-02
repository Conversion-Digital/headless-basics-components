import React from 'react';
import { componentBoilerPlate } from "@conversiondigital/headless-basics-data/src/component-tools/componentBoilerPlate";
import { ViewComponentProps } from "@conversiondigital/headless-basics-data/src/interfaces";
import { getLogger, logPrefix } from "@conversiondigital/headless-basics-data/src";
import CdStatisticsDefaultVariant from './variants/CdStatisticsDefaultVariant';

export const log = getLogger("conversion.components.cdstatistics");

export default function CdStatisticsUI(dynamicComponent: ViewComponentProps) {
  const { variant, matchingData } = componentBoilerPlate(dynamicComponent);
  if (!matchingData) return null;

  log.trace(`${logPrefix()} CdStatisticsUI started, matchingData: ${JSON.stringify(matchingData)}`);

  switch (variant) {
    case 'default':
    default:
      return <CdStatisticsDefaultVariant matchingData={matchingData} {...dynamicComponent} />;
  }
} 