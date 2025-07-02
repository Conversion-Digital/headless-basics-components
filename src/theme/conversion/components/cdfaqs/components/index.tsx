import React from 'react';
import { componentBoilerPlate } from "@conversiondigital/headless-basics-data/src/component-tools/componentBoilerPlate";
import { ViewComponentProps } from "@conversiondigital/headless-basics-data/src/interfaces";
import { getLogger, logPrefix } from "@conversiondigital/headless-basics-data/src";
import CdFaqsDefaultVariant from './variants/CdFaqsDefaultVariant';

export const log = getLogger("conversion.components.cdfaqs");

export default function CdFaqsUI(dynamicComponent: ViewComponentProps) {
  const { variant, matchingData } = componentBoilerPlate(dynamicComponent);
  if (!matchingData) return null;

  log.trace(`${logPrefix()} CdFaqsUI started, matchingData: ${JSON.stringify(matchingData)}`);

  switch (variant) {
    case 'default':
    default:
      return <CdFaqsDefaultVariant matchingData={matchingData} />;
  }
} 