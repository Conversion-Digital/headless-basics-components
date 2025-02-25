import { Suspense } from "react";

import { PageBlueprint, IndividualComponentProps, ProductI } from "@conversiondigital/headless-basics-data/src/interfaces"
import ProductComponent from "../../../components/common/ecommerce/Product";
import DevButton from "../../../../../components/developer/devButton";

export function detectAndRenderProductDetails(
  bluePrint: PageBlueprint
) {

  const languageSite = bluePrint?.pageData?.languageSite;
  if(!languageSite) return <></>;

  if (bluePrint?.pageData?.pageIdentifier?.pageVariant === "productPage" && bluePrint?.components) {
    const variant = bluePrint?.pageData?.pageIdentifier?.pageVariant;
    let productData = GetPageComponentData(
      bluePrint.components,
      bluePrint?.pageData?.pageIdentifier?.pageVariant
    )

    let metaData = {
      name: productData?.name || "Default Name",
      variant: variant,
      query:
        "Look in >> @/theme/components/productDetails/query.ts",
      dataProvided: productData,
      component: "Product Page Body",
      queryFileLocation: "@/theme/components/productDetails/query.ts",
      rendering: "@/sites/default/components/services/ecommerce/ecommerceRenderService.tsx",
      globalPath: null,
      id: productData?.id || "",
      url: productData?.url || "",
      typeName: productData?.__typename || "",
      liveDocumentation: "",
      youtubeVideo: "",
      lastUpdated: undefined,
      renderingExportFunction: "productDetails",
      isInsideGrid: false,
      isClientSide: false,
    }

    return productData?.showStandardProductBody === true ||
      typeof productData?.showStandardProductBody === "undefined" ? (
      <>
        <div className="w-full w-full container">
          <div className="w-full break-after-auto py-4">
            <Suspense>
              <DevButton metaData={metaData} />
            </Suspense>
          </div>
          {productData && (
            <ProductComponent
              product={productData}
              languageSite={languageSite}
            />
          )}
        </div>
      </>
    ) : (
      <></>
    )
  }
  return <></>
}

export function GetPageComponentData(
  pageComponents: IndividualComponentProps[],
  variant: string
) : ProductI | null {
  const foundComponent = pageComponents.find((component) => component?.data?.contentTypeAlias === variant);
  if (foundComponent) {
    return foundComponent.data as unknown as ProductI;
  }else {
    return null;
  }
}
