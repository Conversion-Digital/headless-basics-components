import DevButton from "../../../../../components/developer/devButton";

import { getLogger, IndividualComponentProps, ViewComponentProps } from "@conversiondigital/cd-headless-data/src";
import { Suspense } from "react";
import { getSpecificationsTableComponent } from "../../common/ecommerce/Product";

const log = getLogger("theme.components.specificationtable.components.index");

export default function SpecificationTableUI(dynamicComponent: ViewComponentProps) {
  const componentDetails = dynamicComponent.componentInformation

  if (!componentDetails || !componentDetails.metaData) {
    log.error("Invalid data passed to SpecificationTableUI", componentDetails);
    return <div>Error rendering SpecificationTableUI: Missing data</div>;
  }
  const data = componentDetails;
  let matchingData = componentDetails.data;

  if (!matchingData) {
    matchingData = {}
  }
  populateMetaData(data);

  return (
    <div className="w-full container mt-6" id="specifications">
      <Suspense><DevButton metaData={componentDetails.metaData} /></Suspense>
      {getSpecificationsTableComponent(data?.data?.specifications as any[])}
    </div>
  )
}

function populateMetaData(componentDetails: IndividualComponentProps) {

  // Get the relative path of the current file
  if (componentDetails.metaData) {
    componentDetails.metaData.rendering = "theme/components/specificationtable/components/index.tsx";
    // Get the name of the current function
    componentDetails.metaData.renderingExportFunction = "SpecificationTableUI";
  }
}
