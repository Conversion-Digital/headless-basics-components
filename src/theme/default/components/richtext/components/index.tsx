import DevButton from "../../../../../components/developer/devButton";
import { getLogger, IndividualComponentProps, ViewComponentProps } from "@conversiondigital/headless-basics-data/src";
import { Suspense } from "react";
import { getSectionBackgroundColour } from "../../../../utils/getSectionBackgroundColour";
;

const log = getLogger("ui-base.cms.heartcore.content.richtextComponent");

export default function RichTextUI(dynamicComponent: ViewComponentProps) {
  const componentInformation = dynamicComponent.componentDetails

  if (!componentInformation || !componentInformation.metaData) {
    log.error("Invalid ComponentDataProps passed to richtextComponent", componentInformation);
    return <div>Error rendering heroComponent: Missing data</div>;
  }
  const data = componentInformation;

  let newData = Object.assign({}, data);

  populateMetaData(newData);
  const backgroundColour = data?.data?.backgroundColour as string;

  return (
    <>
      <div className={`relative w-full ${getSectionBackgroundColour(backgroundColour, "")}`}>
        <Suspense><DevButton metaData={componentInformation.metaData} /></Suspense>
        <div className="invisible bg-my-grey text-h1 text-h2 text-h3 text-h4 text-h5"></div>
        <div className="w-full container break-after-auto py-4 font-urbanist">
          <div dangerouslySetInnerHTML={{ __html: newData?.data?.processedBody as string }} />
        </div>
      </div>
    </>
  );
}


function populateMetaData(componentDetails: IndividualComponentProps) {
  if (componentDetails.metaData) {
    // Get the relative path of the current file
    componentDetails.metaData.rendering = "theme/components/richtext/components/index.tsx";
    // Get the name of the current function
    componentDetails.metaData.renderingExportFunction = "RichTextUI";
  }
}

