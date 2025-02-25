import { Suspense } from "react"

import DevButton from "../../../../../components/developer/devButton"
import { getLogger, IndividualComponentProps, ViewComponentProps } from "@conversiondigital/cd-headless-data/src"
import { CustomText } from "./CustomText"

const log = getLogger("theme.components.motto.components.index")

export default function MottoUI(dynamicComponent: ViewComponentProps) {
  const componentDetails = dynamicComponent.componentInformation

  if (!componentDetails || !componentDetails.metaData) {
    log.error("Invalid ComponentDataProps passed to mottoComponent", componentDetails);
    return <div>Error rendering mottoComponent: Missing data</div>;
  }
  populateMetaData(componentDetails)
  const data = componentDetails;
  let matchingData = componentDetails.data;

  if (!matchingData) {
    matchingData = {}
  }
  return (
    <div className="w-full">
      <Suspense><DevButton metaData={componentDetails.metaData} /></Suspense>
      {/* <h6>Motto Component Site Only</h6>
      <div className="w-full break-after-auto py-4">
        Developer Please Connect up the data to components to complete the page:
        <ExampleCodeJSON language="json">{matchingData}</ExampleCodeJSON>
      </div> */}
      {/* Render a component that renderings matchingData.words  as a full screen, blue background, component.  words contains three words, each followed by a full stop. The full stops must be orange
       */}
      <CustomText
        text={typeof data?.data?.words === 'string' ? data.data.words : ''}
        align={typeof matchingData?.align === 'string' ? matchingData.align : undefined}
      />
    </div>
  )
}

function populateMetaData(componentDetails: IndividualComponentProps) {
  if(componentDetails.metaData){
    // Get the relative path of the current file
    componentDetails.metaData.rendering = "theme/components/motto/components/index.tsx"
    // Get the name of the current function
    componentDetails.metaData.renderingExportFunction = "MottoUI"
  }
}
