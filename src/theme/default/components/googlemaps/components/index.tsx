

import DevButton from "../../../../../components/developer/devButton";
import { getLogger } from "@conversiondigital/headless-basics-data/src";
import { Suspense } from 'react';
import { ViewComponentProps, IndividualComponentProps } from "@conversiondigital/headless-basics-data/src/interfaces"

const log = getLogger("ui-base.cms.heartcore.content.googlemaps");

interface IframeComponentProps {
  src: string;
  width: string;
  height: string;
}

const IframeComponent = ({ src, width, height }: IframeComponentProps) => {
  return (
    <iframe
      title="Embedded Content"
      src={src}
      width={width}
      height={height}
      frameBorder="0"
      loading="lazy"
      className="border-spacing-0 w-full h-100"
      allowFullScreen
    ></iframe>
  );
};

export default function GoogleMapsUI(dynamicComponent: ViewComponentProps) {
  const componentDetails = dynamicComponent.componentInformation

  if (!componentDetails || !componentDetails.metaData) {
    log.error("Invalid ComponentDataProps passed to GoogleMapsUI", componentDetails);
    return <div>Error rendering GoogleMapsUI: Missing data</div>;
  }
  const data = componentDetails;

  populateMetaData(data);
  const matchingData = componentDetails.data;

  let iframeCode = "";
  if (matchingData?.datasource != null) {
    let ds = matchingData.datasource as any;
    if (ds.iframeCode) {
      iframeCode = ds.iframeCode;
    }
  }
  if (matchingData?.iframeCode) {
    iframeCode = matchingData.iframeCode as string;
  }

  return (
    <>
      <div className={`relative p-8 w-full`}>
        <Suspense><DevButton metaData={componentDetails.metaData} /></Suspense>
        <IframeComponent src={iframeCode} width="600" height="500" />
      </div>
    </>
  );
}

function populateMetaData(componentDetails: IndividualComponentProps) {
  if(componentDetails.metaData){
    componentDetails.metaData.rendering = "theme/components/googlemaps/components/index.tsx";
    componentDetails.metaData.renderingExportFunction = "GoogleMapsUI";
  }
}
