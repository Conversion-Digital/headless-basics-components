import AccordionFaqLoader from "./accordionLoader";
import DevButton from "../../../../../components/developer/devButton";
import { getLogger, IndividualComponentProps, ViewComponentProps } from "@conversiondigital/cd-headless-data/src";
import { Suspense } from "react";
import { getSectionBackgroundColour } from "../../../../utils/getSectionBackgroundColour";
import { Faqs } from "../../../../interfaces/fag.interface";

const log = getLogger("theme.components.faq.components.index")

export default function FaqUI(dynamicComponent: ViewComponentProps) {
  const componentDetails = dynamicComponent.componentInformation
  if (!componentDetails || !componentDetails.metaData) {
    log.error("Invalid data passed to FaqUI", componentDetails);
    return <div>Error rendering FaqUI: Missing data</div>;
  }
  const data = componentDetails;
  populateMetaData(data)
  let matchingData = data.data

  if (!matchingData) {
    matchingData = {}
  }

  const faqList = matchingData.faqsList as  Faqs;

  return (
    <>
      <div id="faqs" className={`${getSectionBackgroundColour(matchingData?.backgroundColour as string, "")}`}>
        <div className="relative w-full container pt-14 mt-1 pb-24 mb-1 md:pt-20 md:pb-28 md:mb-2 md:mt-0 text-my-brown-grey font-urbanist">
          <Suspense><DevButton metaData={componentDetails.metaData} /></Suspense>
          <div className="">
            <AccordionFaqLoader faqList={faqList} languageSite={data?.pageDefinition?.languageSite} />
          </div>
        </div>
      </div>
    </>
  );
}

function populateMetaData(componentDetails: IndividualComponentProps) {
  if(componentDetails.metaData){
    // Get the relative path of the current file
    componentDetails.metaData.rendering = "theme/components/fag/components/index.tsx"
    // Get the name of the current function
    componentDetails.metaData.renderingExportFunction = "FaqUI"
  }
}

