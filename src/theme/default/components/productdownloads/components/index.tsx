import DevButton from "../../../../../components/developer/devButton";
import { getLogger } from "@conversiondigital/headless-basics-data";
import { IndividualComponentProps, ViewComponentProps } from "@conversiondigital/headless-basics-data/src";
import { Suspense } from "react";
import { IconDownloadCTA } from "../../ctalist/components/variants";
import { getSectionBackgroundColour } from "../../../../utils/getSectionBackgroundColour";

const log = getLogger("theme.components.productdownloads.components.index");


export default function ProductDownloadsUI(dynamicComponent: ViewComponentProps) {
  const componentDetails = dynamicComponent.componentInformation

  if (!componentDetails || !componentDetails.metaData) {
    log.error("Invalid ComponentDataProps passed to productCategoryListComponent", componentDetails);
    return <div>Error rendering productdownloadsComponent: Missing data</div>;
  }
  const data = componentDetails;

  populateMetaData(data);

  const product = data?.data?.productPicker as any;
  const backgdoundColur = data?.data?.backgroundColour;
  return (
    <div className={`w-full  ${getSectionBackgroundColour(backgdoundColur as string, "")}`}>
      <Suspense><DevButton metaData={componentDetails.metaData} /></Suspense>
        {product?.downloads && product?.downloads?.length > 0 ? (
          <IconDownloadCTA data={product} />
        ) : null}
    </div>
  )
}

function populateMetaData(componentDetails: IndividualComponentProps) {
  // Get the relative path of the current file
  if (componentDetails.metaData) {
    componentDetails.metaData.rendering = "theme/components/productdownloads/components/index.tsx";
    // Get the name of the current function
    componentDetails.metaData.renderingExportFunction = "ProductDownloadsUI"
  }
}
