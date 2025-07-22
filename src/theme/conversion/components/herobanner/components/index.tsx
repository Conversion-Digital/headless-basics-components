import React from "react"
import { componentBoilerPlate } from "@conversiondigital/headless-basics-data/src/component-tools/componentBoilerPlate"
import type { ViewComponentProps } from "@conversiondigital/headless-basics-data/src/interfaces/ThemeConfig.interface"
import { getLogger, logPrefix } from "@conversiondigital/headless-basics-data/src"
import DemoVariant from "./variants/demoVariant"
import DefaultVariant from "./variants/defaultVariant"
import CaseStudyVariant from "./variants/caseStudyVariant"
import IntroductionVariant from "./variants/IntroductionVariant"
import TitleOnlyVariant from "./variants/TitleOnlyVariant"


export const log = getLogger("default.components.heartcore.template.variants");

export default function TemplateUI(dynamicComponent: ViewComponentProps) {
  const { variant, matchingData } = componentBoilerPlate(dynamicComponent);

  if (!matchingData) return null;
  log.trace(`${logPrefix} TemplateUI started, matchingData: ${JSON.stringify(matchingData)}`);
  switch (variant) {
    case "xDemo":
      return <DemoVariant matchingData={matchingData} {...dynamicComponent} />;
    case "caseStudy":
      return <CaseStudyVariant matchingData={matchingData} {...dynamicComponent} />;
    case "title-only":
      return <TitleOnlyVariant matchingData={matchingData} {...dynamicComponent} />;
    case "introduction":
      return <IntroductionVariant matchingData={matchingData} {...dynamicComponent} />;
    default:
      return <DefaultVariant matchingData={matchingData} {...dynamicComponent} />;
  }
}