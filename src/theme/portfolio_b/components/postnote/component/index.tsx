import React, { Suspense } from "react";
import DevButton from "../../../../../components/developer/devButton";
import { getLogger, IndividualComponentProps, ViewComponentProps } from "@conversiondigital/headless-basics-data/src";
import PostNote from "../../../../../components/postnote";

const log = getLogger("theme.components.postnote.components.index");

export default function PostNoteUI(dynamicComponent: ViewComponentProps) {
  const componentDetails = dynamicComponent.componentInformation;

  if (!componentDetails || !componentDetails.metaData) {
    log.error("Invalid ComponentDataProps passed to PostNoteComponent", componentDetails);
    return <div>Error rendering PostNoteComponent: Missing data</div>;
  }

  populateMetaData(componentDetails);
  const data = componentDetails;
  let matchingData = componentDetails.data || {};

  return (
    <div className="flex items-center">
      <Suspense fallback={<div>Loading...</div>}>
        <DevButton metaData={componentDetails.metaData} />
      </Suspense>

      <PostNote
        title={typeof matchingData.title === 'string' ? matchingData.title : "Default Title"}
        date={typeof matchingData.date === 'string' ? matchingData.date : "Default Date"}
        description={typeof matchingData.description === 'string' ? matchingData.description : "Default Description"}
        drawOutlineTime={typeof matchingData.drawOutlineTime === 'number' ? matchingData.drawOutlineTime : undefined}
        fadeInTime={typeof matchingData.fadeInTime === 'number' ? matchingData.fadeInTime : undefined}
        animationDelay={typeof matchingData.animationDelay === 'number' ? matchingData.animationDelay : undefined}
        width={typeof matchingData.width === 'number' ? matchingData.width : undefined}
        height={typeof matchingData.height === 'number' ? matchingData.height : undefined}
        variant={matchingData.variant === 'default' ? 'default' : undefined}
      />
    </div>
  );
}

function populateMetaData(componentDetails: IndividualComponentProps) {
  if (componentDetails.metaData) {
    componentDetails.metaData.rendering = "theme/portfolio_b/components/PostNote/component/index.ts";
    componentDetails.metaData.renderingExportFunction = "PostNoteUI";
  }
}