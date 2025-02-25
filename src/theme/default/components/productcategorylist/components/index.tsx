import DevButton from "../../../../../components/developer/devButton";
import { getLogger, IndividualComponentProps, ViewComponentProps } from "@conversiondigital/headless-basics-data/src";
import { Suspense } from "react";
import { ProductCategory } from "./ProductCategory";
import { CategoryData } from "../../../../interfaces/productCategory.interface";
const log = getLogger("theme.components.productcategorylist.components.index")

export default function ProductCategoryListUI(dynamicComponent: ViewComponentProps) {
  const componentDetails = dynamicComponent.componentInformation

  if (!componentDetails || !componentDetails.metaData) {
    log.error("Invalid data passed to ProductCategoryListUI", componentDetails);
    return <div>Error rendering productListComponent: Missing data</div>;
  }
  const data = componentDetails;

  populateMetaData(data);

  const languageSite = data.pageDefinition?.languageSite;

  if (!languageSite) {
    return (<></>);
  }

  return (
    <div className="w-full">
      <Suspense><DevButton metaData={componentDetails.metaData} /></Suspense>
      <ProductCategory category={data.data as unknown as CategoryData} languageSite={languageSite} />
    </div>
  )
}


function populateMetaData(componentDetails: IndividualComponentProps) {
  // Get the relative path of the current file
  if (componentDetails.metaData) {
    componentDetails.metaData.rendering = "theme/components/productcategorylist/components/index.tsx";
    // Get the name of the current function
    componentDetails.metaData.renderingExportFunction = "ProductCategoryListUI";
  }
}
