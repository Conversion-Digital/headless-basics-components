import { Suspense } from "react";

import DevButton from "../../../../../components/developer/devButton";

import { getLogger, IndividualComponentProps, ViewComponentProps } from "@conversiondigital/headless-basics-data/src";
import TestimonialClientLoader from "./testimonialClientLoader";
import { getSectionBackgroundColour } from "../../../../utils/getSectionBackgroundColour";

const log = getLogger("ui-base.cms.heartcore.content.testimonial")

export default function TestimonialUI(dynamicComponent: ViewComponentProps) {
  const componentDetails = dynamicComponent.componentInformation

  if (!componentDetails || !componentDetails.metaData) {
    log.error("Invalid data passed to TestimonialUI", componentDetails);
    return <div>Error rendering TestimonialUI: Missing data</div>;
  }
  const data = componentDetails;

  populateMetaData(data)
  let matchingData = componentDetails.data

  if (!matchingData) {
    matchingData = {}
  }

  return (
    <>
      <div
        className={`relative w-full py-20 md:py-28 font-urbanist text-my-blue ${getSectionBackgroundColour(matchingData?.backgroundColour as string, "")}`}
        id="testimonials"
      >
        <Suspense><DevButton metaData={componentDetails.metaData} /></Suspense>
        <h2 className="mb-4 text-center font-800 text-my-blue text-3xl leading-[45px] md:text-h3 md:leading-h3">
          Testimonials
        </h2>
        <div
          id="default-carousel"
          className="w-full break-after-auto md:py-4 container pt-0 pb-4"
          data-carousel="slide"
        >
          <TestimonialClientLoader pageTestimonial={matchingData.pageTestimonial} />
        </div>
      </div>
    </>
  )
}

function populateMetaData(componentDetails: IndividualComponentProps) {
  // Get the relative path of the current file
  if (componentDetails.metaData) {
    componentDetails.metaData.rendering = "theme/components/testimonial/components/index.tsx";
    // Get the name of the current function
    componentDetails.metaData.renderingExportFunction = "TestimonialUI"
  }
}
