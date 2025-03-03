import { Suspense } from "react"
import DevButton from "../../../../../components/developer/devButton"
import { getLogger, IndividualComponentProps, ViewComponentProps } from "@conversiondigital/headless-basics-data/src"
import { Toggle } from "../../../../../components/toggle"

const log = getLogger("theme.components.toggle.components.index")

export default function ToggleUI(dynamicComponent: ViewComponentProps) {
  const componentDetails = dynamicComponent.componentInformation

  if (!componentDetails || !componentDetails.metaData) {
    log.error("Invalid ComponentDataProps passed to ToggleComponent", componentDetails);
    return <div>Error rendering ToggleComponent: Missing data</div>;
  }
  
  populateMetaData(componentDetails)
  const data = componentDetails;
  let matchingData = componentDetails.data;

  if (!matchingData) {
    matchingData = {}
  }

  const validVariants = ["Default", "Primary", "Secondary"];
  const variant = validVariants.includes(matchingData?.variant as string) ? matchingData.variant as string : "Default";

  return (
    <div className="w-full">
      <Suspense>
        <DevButton metaData={componentDetails.metaData} />
      </Suspense>
      
      <Toggle
        ariaLabel={typeof matchingData?.aRIALabel === 'string' ? matchingData.aRIALabel : undefined}
        className={typeof matchingData?.className === 'string' ? matchingData.className : undefined}
        variant={variant.toLowerCase() as "default" | "primary" | "secondary"}
        showIcon={typeof matchingData?.showIcon === 'boolean' ? matchingData.showIcon : undefined}
      />
    </div>
  )
}

function populateMetaData(componentDetails: IndividualComponentProps) {
  if(componentDetails.metaData){
    componentDetails.metaData.rendering = "theme/components/toggle/components/index.tsx"
    componentDetails.metaData.renderingExportFunction = "ToggleUI"
  }
}