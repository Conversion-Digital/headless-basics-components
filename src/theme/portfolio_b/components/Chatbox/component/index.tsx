import React, { Suspense } from "react";
import DevButton from "../../../../../components/developer/devButton";
import { getLogger, IndividualComponentProps, ViewComponentProps } from "@conversiondigital/headless-basics-data/src";
import Chatbox from "../../../../../components/chatBox";

const log = getLogger("theme.components.chatbox.components.index");

export default function ChatboxUI(dynamicComponent: ViewComponentProps) {
  const componentDetails = dynamicComponent.componentInformation;

  if (!componentDetails || !componentDetails.metaData) {
    log.error("Invalid ComponentDataProps passed to ChatboxComponent", componentDetails);
    return <div>Error rendering ChatboxComponent: Missing data</div>;
  }

  populateMetaData(componentDetails);
  const data = componentDetails;
  let matchingData = componentDetails.data || {};

  return (
    <div className="flex items-center">
      <Suspense fallback={<div>Loading...</div>}>
        <DevButton metaData={componentDetails.metaData} />
      </Suspense>

      <Chatbox
        message={
          [matchingData.title, matchingData.description, matchingData.date]
            .filter(Boolean)
            .join(" | ")
        }
        width={typeof matchingData.width === 'number' ? matchingData.width : undefined}
        height={typeof matchingData.height === 'number' ? matchingData.height : undefined}
        animationDuration={typeof matchingData.animationDuration === 'number' ? matchingData.animationDuration : undefined}
        variant={
          matchingData.variant === 'default' || matchingData.variant === 'flip'
            ? matchingData.variant
            : 'default'
        }
        contentAlignment={
          matchingData.contentAlignment === 'left' ||
          matchingData.contentAlignment === 'right' ||
          matchingData.contentAlignment === 'center'
            ? matchingData.contentAlignment
            : 'center'
        }
      />
    </div>
  );
}

function populateMetaData(componentDetails: IndividualComponentProps) {
  if (componentDetails.metaData) {
    componentDetails.metaData.rendering = "theme/portfolio_b/components/Chatbox/component/index.tsx";
    componentDetails.metaData.renderingExportFunction = "ChatboxUI";
  }
}