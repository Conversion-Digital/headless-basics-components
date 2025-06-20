import React from 'react';
import { componentBoilerPlate } from "@conversiondigital/headless-basics-data/src/component-tools/componentBoilerPlate";
import { ViewComponentProps } from "@conversiondigital/headless-basics-data/src/interfaces";
import { getLogger, logPrefix } from "@conversiondigital/headless-basics-data/src";
import CdserviceofferingsDefaultVariant from './variants/cdserviceofferingsDefaultVariant';

export const log = getLogger("conversion.components.cdserviceofferings");

export default function CdserviceofferingsUI(dynamicComponent: ViewComponentProps) {
  const { variant, matchingData } = componentBoilerPlate(dynamicComponent);
  if (!matchingData) return null;

  log.trace(`${logPrefix()} cdserviceofferingsUI started, matchingData: ${JSON.stringify(matchingData)}`);

  switch (variant) {
    case 'default':
    default:
      return <CdserviceofferingsDefaultVariant matchingData={matchingData} {...dynamicComponent} />;
  }
} 