import DevButton from "../../../../../components/developer/devButton";
import { getLogger  } from "@conversiondigital/cd-headless-data/src";
import { Suspense } from "react";
import GalleryClientLoader from "./galleryClientLoader";
import { getSectionBackgroundColour } from "../../../../utils/getSectionBackgroundColour";
import { ViewComponentProps, IndividualComponentProps } from "@conversiondigital/cd-headless-data/src/interfaces"

const log = getLogger("theme.components.gallery.components.index")

export function GalleryComp({data}: {data: any}) {

  return (
    <>
      {GalleryUI(data)}
    </>
  )
}

export default function GalleryUI(dynamicComponent: ViewComponentProps) {
  const componentDetails = dynamicComponent.componentInformation

  if (!componentDetails || !componentDetails.metaData) {
    log.error("Invalid ComponentDataProps passed to GalleryUI", componentDetails);
    return <div>Error rendering GalleryUI: Missing data</div>;
  }
  populateMetaData(componentDetails)
  const matchingData = componentDetails.data;

  const backgroundColour = getSectionBackgroundColour(
    matchingData?.backgroundColour as string,
    ""
  );

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
          <Suspense><DevButton metaData={componentDetails.metaData} /></Suspense>
          <GalleryClientLoader images={matchingData?.images as string[]} backgroundColour={backgroundColour} heading={matchingData?.heading as string | undefined}/>
      </Suspense>
    </>
  )
}

function populateMetaData(componentDetails: IndividualComponentProps) {
  if (componentDetails?.metaData) 
  {
    // Get the relative path of the current file
    componentDetails.metaData.rendering = "theme/components/gallery/components/index.tsx"
    // Get the name of the current function
    componentDetails.metaData.renderingExportFunction = "GalleryUI"
  }
}
