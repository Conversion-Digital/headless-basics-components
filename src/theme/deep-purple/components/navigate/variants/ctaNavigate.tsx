import React from 'react';
import {
  IndividualComponentProps,
  ViewComponentProps,
  getLogger,
  logPrefix,
} from "@conversiondigital/headless-basics-data/src"
import NavigateUI from "/home/ben/headless_project_git/headless-basics-workspace/packages/headless-basics-components/src/theme/deep-purple/components/navigate/components/index"

const log = getLogger("theme.deep-purple.components.navigate.components")

export default function CtaNavigate(dynamicComponent: ViewComponentProps) {

  const componentInformation = dynamicComponent.componentInformation;
  const blueprint = dynamicComponent.blueprint;

  if (!componentInformation) {
    log.error("Invalid componentInformation.metaData passed to navigate", componentInformation);
    return <div>Error rendering navigate: Missing data</div>;
  } else if (!componentInformation.metaData) {
    log.error("Invalid componentInformation.metaData passed to navigate", (componentInformation as any).componentInformation.metaData);
    return <div>Error rendering navigate: Missing Meta data</div>;
  }

  const matchingData = componentInformation.data;
  const variant = componentInformation?.metaData?.variant || ""

  log.trace("Cta Navigate with variant: ", variant)

  if(!blueprint)  {
    return (<div>cta Navigate</div>)
  }

  return (
      <div>cta Navigate <NavigateUI {...dynamicComponent} /></div>
  )
}