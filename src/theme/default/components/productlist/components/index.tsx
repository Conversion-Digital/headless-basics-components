import { AwaitedReactNode, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, Suspense } from "react"
import Image from "next/image"
import Link from "next/link"
import DevButton from "../../../../../components/developer/devButton"
import {
  IndividualComponentProps,
  ViewComponentProps,
  getLogger,
} from "@conversiondigital/headless-basics-data/src"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import { UrlObject } from "url"

const log = getLogger("ui-base.cms.heartcore.content.productList")

export default function ProductListUI(dynamicComponent: ViewComponentProps) {
  const componentDetails = dynamicComponent.componentInformation

  if (!componentDetails || !componentDetails.metaData) {
    log.error(
      "Invalid ComponentDataProps passed to ProductListUI",
      componentDetails
    )
    return <div>Error rendering ProductListUI: Missing data</div>
  }
  const data = componentDetails

  populateMetaData(data)

  return (
    <div className="w-full container">
      <Suspense>
        <DevButton metaData={componentDetails.metaData} />
      </Suspense>
      <div className="my-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {(data.data as any).map((product: { url: string | UrlObject; id: Key | null | undefined; imageUrl: string | StaticImport; altText: string; imageWidth: any; imageHeight: any; name: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; description: any }) => (
          <Link
            href={product?.url}
            key={product.id}
            className="overflow-hidden rounded-lg bg-white shadow-sm"
          >
            <Image
              src={product.imageUrl}
              alt={product.altText}
              className="h-48 w-full object-cover"
              width={product.imageWidth ?? 500}
              height={product.imageHeight ?? 500}
            />
            <div className="p-4">
              <h2 className="mb-2 text-xl font-semibold">{product.name}</h2>
              <ul className="list-inside list-disc">Tech list has moved</ul>
              <div className="mt-4">
                <h3 className="text-sm font-medium">Description:</h3>
                <div
                  className="mt-1 max-h-16 overflow-hidden text-sm text-gray-600"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

function populateMetaData(componentDetails: IndividualComponentProps) {
  // Get the relative path of the current file
  if (componentDetails.metaData) {
    componentDetails.metaData.rendering =
      "theme/components/productlist/components/index.tsx"
    // Get the name of the current function
    componentDetails.metaData.renderingExportFunction = "ProductListUI"
  }
}
