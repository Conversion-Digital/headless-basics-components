import React from 'react';
import { componentBoilerPlate } from "@conversiondigital/headless-basics-data/src/component-tools/componentBoilerPlate";
import { ViewComponentProps } from "@conversiondigital/headless-basics-data/src/interfaces";
import { getLogger, logPrefix } from "@conversiondigital/headless-basics-data/src";
import CdserviceintroDefaultVariant from './variants/cdserviceintroDefaultVariant';

export const log = getLogger("conversion.components.cdserviceintro");

export default function CdserviceintroUI(dynamicComponent: ViewComponentProps) {
  const { variant, matchingData } = componentBoilerPlate(dynamicComponent);
  if (!matchingData) return null;

  log.trace(`${logPrefix()} cdserviceintroUI started, matchingData: ${JSON.stringify(matchingData)}`);

  switch (variant) {
    case 'default':
    default:
      return <CdserviceintroDefaultVariant matchingData={matchingData} {...dynamicComponent} />;
  }
} 