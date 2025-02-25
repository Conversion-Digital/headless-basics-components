import DevButton from "../../../../../components/developer/devButton";
import { getLogger, IndividualComponentProps, LanguageSite, ViewComponentProps } from "@conversiondigital/headless-basics-data/src";
import { Suspense } from "react";
import { KeyFeatures } from "./KeyFeatures";

const log = getLogger("ui-base.cms.heartcore.content.keyfeatures")

export default function KeyFeaturesUI(dynamicComponent: ViewComponentProps) {
  const componentDetails = dynamicComponent.componentInformation

  if (!componentDetails || !componentDetails.metaData) {
    log.error("Invalid data passed to KeyFeaturesUI", componentDetails);
    return <div>Error rendering KeyFeaturesUI: Missing data</div>;
  }
  const data = componentDetails;

  let matchingData: {
    align?: string;
    backgroundColour?: string;
    heading?: string;
    text?: string;
    selectableVariant?: "Key Features - Four Column" | "Key Features - Three Column";
    keyFeatures?: any;
    languageSite?: LanguageSite;
  } = componentDetails.data as {
    align?: string;
    backgroundColour?: string;
    heading?: string;
    text?: string;
    selectableVariant?: "Key Features - Four Column" | "Key Features - Three Column";
    keyFeatures?: any;
    languageSite?: LanguageSite;
  } || {};

  populateMetaData(componentDetails)

  return (
    <div className="relative w-full" id="key-features">
      <Suspense>
        <DevButton metaData={componentDetails.metaData} />
      </Suspense>
      <KeyFeatures
        data={matchingData}
        languageSite={matchingData?.languageSite as LanguageSite}
      />
    </div>
  )
}

function populateMetaData(componentDetails: IndividualComponentProps) {
  if(componentDetails.metaData) {
    // Get the relative path of the current file
    componentDetails.metaData.rendering = "theme/components/keyfeatures/components/index.tsx"
    // Get the name of the current function
    componentDetails.metaData.renderingExportFunction = "KeyFeaturesUI"
  }
}
