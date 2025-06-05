import React from 'react';
import { getLogger, getThemeConfig } from "@conversiondigital/headless-basics-data/src";
import { View } from "./view";
import { ThemeConfig } from "@conversiondigital/headless-basics-data/src/interfaces"
import TestimonialsContainer from './components/TestimonialsContainer';

getLogger("theme.components.cdtestimonials");

async function getConfig(): Promise<ThemeConfig> {
    const config = await getThemeConfig('cdtestimonials');
    config.view = View;
    return config;
}

export function CdtestimonialsComponent(props: any) {
  return {
    type: TestimonialsContainer,
    props: {
      data: props.matchingData,
      variant: props.matchingData?.selectableVariant
    }
  };
}

export default getConfig();
