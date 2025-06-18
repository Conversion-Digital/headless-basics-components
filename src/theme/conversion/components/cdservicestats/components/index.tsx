import React from 'react';
import { componentBoilerPlate } from "@conversiondigital/headless-basics-data/src/component-tools/componentBoilerPlate";
import { ViewComponentProps } from "@conversiondigital/headless-basics-data/src/interfaces";
import { getLogger, logPrefix } from "@conversiondigital/headless-basics-data/src";
import CdservicestatsDefaultVariant from './variants/cdservicestatsDefaultVariant';

export const log = getLogger("conversion.components.cdservicestats");

export default function CdservicestatsUI(dynamicComponent: ViewComponentProps) {
  const { variant, matchingData } = componentBoilerPlate(dynamicComponent);
  if (!matchingData) return null;

  log.trace(`${logPrefix()} cdservicestatsUI started, matchingData: ${JSON.stringify(matchingData)}`);

  switch (variant) {
    case 'default':
    default:
      return <CdservicestatsDefaultVariant matchingData={matchingData} {...dynamicComponent} />;
  }
} 