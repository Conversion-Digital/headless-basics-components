
import DevButton from "../../../../../components/developer/devButton";
import { filterAndUpdateClass, getLogger, IndividualComponentProps, ViewComponentProps } from "@conversiondigital/headless-basics-data/src";
import { Suspense } from "react";

const log = getLogger("theme.components.phoneblock.components.index");

export default function PhoneBlockUI(dynamicComponent: ViewComponentProps) {
  const componentDetails = dynamicComponent.componentInformation

  if (!componentDetails || !componentDetails.metaData) {
    log.error("Invalid PhoneBlockUI", componentDetails);
    return <div>Error rendering PhoneBlockUI: Missing data</div>;
  }
  const data = componentDetails;
  let matchingData = componentDetails.data;

  if (!matchingData) {
    matchingData = {}
  }
  populateMetaData(data);

  let contacTitle = "";
  let contactDetails = "";
  let contactNumber = "";
  let sectionName = "";

  contacTitle = data?.data?.contactTitle as string;
  contactDetails = data?.data?.contactDetails as string;
  contactNumber = data?.data?.contactNumber as string;
  sectionName = data?.data?.name as string;

  return (
    <>
      <div className="container">
        <div className="m-auto bg-gray-100 w-full md:w-72 md:mb-20 mb-24 p-8">
          <Suspense><DevButton metaData={componentDetails.metaData} /></Suspense>
          <h2 className="font-urbanist text-base font-800 text-my-blue">{contacTitle}</h2>
          <div className="font-urbanist text-sm font-400 text-my-brown-grey leading-5" dangerouslySetInnerHTML={{ __html: data.pageDefinition?.languageSite ? filterAndUpdateClass(contactDetails, data.pageDefinition.languageSite) : contactDetails }} />
          <div className="font-urbanist font-800 text-base text-white hover:text-my-black uppercase text-center tracking-widest bg-my-blue hover:bg-my-yellow rounded-full w-full p-3 mt-4 inline-block transition">
            <a href={`tel:${contactNumber}`}>Call {contactNumber}</a>
          </div>
        </div>
      </div>
    </>
  );
}


function populateMetaData(componentDetails: IndividualComponentProps) {
  if (componentDetails.metaData) {
    // Get the relative path of the current file
    componentDetails.metaData.rendering = "theme/components/phoneblock/components/index.tsx";
    // Get the name of the current function
    componentDetails.metaData.renderingExportFunction = "PhoneBlockUI";
  }
}
