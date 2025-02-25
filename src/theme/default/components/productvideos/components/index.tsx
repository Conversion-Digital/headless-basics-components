import { Key, Suspense } from "react"

import DevButton from "../../../../../components/developer/devButton"
import { getLogger, IndividualComponentProps, ViewComponentProps } from "@conversiondigital/cd-headless-data/src"
import { getSectionBackgroundColour } from "../../../../utils/getSectionBackgroundColour"


const log = getLogger("ui-base.cms.heartcore.content.productvideos")

export default function ProductVideosUI(dynamicComponent: ViewComponentProps) {
  const componentDetails = dynamicComponent.componentInformation

  if (!componentDetails || !componentDetails.metaData) {
    log.error("Invalid ComponentDataProps passed to ProductVideosUI", componentDetails);
    return <div>Error rendering ProductVideosUI: Missing data</div>;
  }
  const data = componentDetails;
  populateMetaData(data);

  const product = data?.data?.productPicker ?? {} as any;
  const backgroundColour = data?.data?.backgroundColour as string ?? "";

  return (
    <div className={`w-full ${getSectionBackgroundColour(backgroundColour, "")}`}>
      <div className=" w-full container">
      <Suspense><DevButton metaData={componentDetails.metaData} /></Suspense>
      {product?.productVideos && product.productVideos.length > 0 && (
        <div className="py-12">
          <h2 className="text-center text-my-brown-grey font-urbanist font-800 text-3xl leading-h4 md:text-h3 md:leading-h3 mb-14">Product Videos</h2>
          {product?.productVideos.map((video: { url: string }, index: Key | null | undefined) => (
            <div key={index} className="my-8 aspect-video w-full h-48 sm:h-auto lg:h-168">
              <iframe
                title={`Video ${index}`}
                className="h-full w-full"
                src={video.url.replace("watch?v=", "embed/")}
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      )}
       </div>
    </div>
  )
}

function populateMetaData(componentDetails: IndividualComponentProps) {
  if (componentDetails.metaData) {
    // Get the relative path of the current file
    componentDetails.metaData.rendering ="theme/components/productvideos/components/index.tsx"
    // Get the name of the current function
    componentDetails.metaData.renderingExportFunction = "ProductVideosUI"
  }
}
