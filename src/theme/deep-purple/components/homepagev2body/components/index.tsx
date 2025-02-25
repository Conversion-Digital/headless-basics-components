import {
  IndividualComponentProps,
  ViewComponentProps,
  getLogger,
  logPrefix,
} from "@conversiondigital/cd-headless-data/src"
import { Homepage } from "./homepage"

const log = getLogger("theme.deep-purple.components.homepagev2body.components.index")

export default function HompageUI(dynamicComponent: ViewComponentProps) {
  const componentInformation = dynamicComponent.componentInformation
  const blueprint = dynamicComponent.blueprint

  if (!componentInformation) {
    log.error("Invalid componentInformation.metaData passed to homepagev2body", componentInformation);
    return <div>Error rendering HeroUI: Missing data</div>;
  } else if (!componentInformation.metaData) {
    log.error("Invalid componentInformation.metaData passed to homepagev2body", (componentInformation as any).componentInformation.metaData);
    return <div>Error rendering HeroUI: Missing Meta data</div>;
  }

  populateMetaData(componentInformation)
  const matchingData = componentInformation.data;

  const variant = componentInformation?.metaData?.variant || ""

  log.trace("Rendering Hero with variant: ", variant)

  if(!blueprint)  {
    return (<div>homepagev2body</div>)
  }

  return <Homepage blueprint={blueprint} componentDetails={componentInformation} matchingData={matchingData} />

}

function populateMetaData(componentDetails: IndividualComponentProps) {

  if(typeof(componentDetails) === "undefined") {
    log.trace(`${logPrefix()} No componentMetaData found`, (typeof(componentDetails)))
    return;
  }

  if (componentDetails.metaData) {
      // Get the relative path of the current file
      componentDetails.metaData.rendering = "theme/components/hero/components/index.tsx"
      // Get the name of the current function
      componentDetails.metaData.renderingExportFunction = "homepagev2body"
  }
}
