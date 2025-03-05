import React, { Suspense } from "react"
import DevButton from "../../../../../components/developer/devButton"
import { getLogger, IndividualComponentProps, ViewComponentProps } from "@conversiondigital/headless-basics-data/src"
import CTA from "../../../../../components/CTA"

const log = getLogger("theme.deep-purple.components.navigate.components.index")

export default function NavigateUI(dynamicComponent: ViewComponentProps) {
  const componentDetails = dynamicComponent.componentInformation

  if (!componentDetails || !componentDetails.metaData) {
    log.error("Invalid ComponentDataProps passed to NavigateComponent", componentDetails);
    return <div>Error rendering NavigateComponent: Missing data</div>;
  }

  populateMetaData(componentDetails)
  const data = componentDetails;
  let matchingData = componentDetails.data;

  if (!matchingData) {
    matchingData = {}
  }

  return (
    
    <div className="flex items-center">
      <Suspense>
        <DevButton metaData={componentDetails.metaData} />
      </Suspense>

      <CTA
        title={typeof matchingData?.cTA === 'string' ? matchingData.cTA : ''}
        text={typeof matchingData?.cTAText === 'string' ? matchingData.cTAText : ''}
        variant={typeof matchingData?.cTAVariant === 'string' ? matchingData.cTAVariant as 'default' | 'light' : 'default'}
        onClick={() => alert('CTA clicked')}
      />
    </div>
  )
}

function populateMetaData(componentDetails: IndividualComponentProps) {
  if(componentDetails.metaData){
    componentDetails.metaData.rendering = "theme/deep-purple/components/navigate/components/index.tsx"
    componentDetails.metaData.renderingExportFunction = "NavigateUI"
  }
}
