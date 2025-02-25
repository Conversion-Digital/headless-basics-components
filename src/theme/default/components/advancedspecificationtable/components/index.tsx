import { Suspense } from "react"

import DevButton from "../../../../../components/developer/devButton"
import { getLogger, IndividualComponentProps, ViewComponentProps } from "@conversiondigital/headless-basics-data/src"
import { AdvancedSpecificationTable } from "./AdvancedSpecificationTable"
import { Rows } from "../../../../interfaces/advancedSpecificationTable.interface"

const log = getLogger("theme.components.advancedspecificationtable.components.index")

export default function AdvancedSpecificationTableUI(dynamicComponent: ViewComponentProps) {
  const componentDetails = dynamicComponent.componentInformation

  if (!componentDetails || !componentDetails.metaData) {
    log.error("Invalid data passed to AdvancedSpecificationTableUI", componentDetails);
    return <div>Error rendering AdvancedSpecificationTableUI: Missing data</div>;
  }
  populateMetaData(componentDetails)

  return (
    <div className="container mt-6 w-full" id="specifications">
      <Suspense>
        <DevButton metaData={componentDetails.metaData} />
      </Suspense>
      <AdvancedSpecificationTable data={componentDetails.data as unknown as Rows} />
    </div>
  )
}

function populateMetaData(component: IndividualComponentProps) {
  // component.metaData.dataProvided = component.data
  // Get the relative path of the current file
  if(component.metaData){
    component.metaData.rendering = "theme/components/advancedspecificationtable/components/index.tsx"
    // Get the name of the current function
    component.metaData.renderingExportFunction = "AdvancedSpecificationTableUI"
  }
}
