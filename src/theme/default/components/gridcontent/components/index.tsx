import DevButton from "../../../../../components/developer/devButton";
import { getGridColour, getLogger, IndividualComponentProps, ViewComponentProps } from "@conversiondigital/cd-headless-data/src";
import { Suspense } from "react";
import UmbracoFlexGrid, { SectionProps } from "../../common/umbraco-heartcore-grid";

const log = getLogger("ui-base.cms.heartcore.content.grid");

export default function GridContentUI(dynamicComponent: ViewComponentProps) {
  const componentDetails = dynamicComponent.componentInformation

  if (!componentDetails || !componentDetails.metaData) {
    log.error("Invalid data passed to GridContentUI", componentDetails);
    return <div>Error rendering GridContentUI: Missing data</div>;
  }

  populateMetaData(componentDetails)

  const colourClass = getGridColour(componentDetails.data?.backgroundColour as string);
  const body = componentDetails.data?.body as any;

  const languageSite = componentDetails?.pageDefinition?.languageSite;

  if(!languageSite){
    return (<></>)
  }

  return (
    <>
      <div className="invisible bg-my-grey"></div>
      <div className={`relative w-full ${colourClass}`}>
        <Suspense><DevButton metaData={componentDetails.metaData} /></Suspense>
        <div className="w-full container break-after-auto py-4 font-urbanist">
          <UmbracoFlexGrid name="Grid" sections={body?.sections as SectionProps[]} mainData={componentDetails.data} variant={componentDetails.metaData.variant} languageSite={languageSite} />
        </div>
      </div>
    </>
  );
}

function populateMetaData(componentDetails: IndividualComponentProps) {
  if (componentDetails?.metaData) 
  {
    // Get the relative path of the current file
    componentDetails.metaData.rendering = "theme/components/gridcontent/components/index.tsx";
    // Get the name of the current function
    componentDetails.metaData.renderingExportFunction = "GridContentUI";
  }
}


