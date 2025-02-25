import DevButton from "../../../../../components/developer/devButton";
import { alignmentClasses, cn, getLogger, IndividualComponentProps, ViewComponentProps } from "@conversiondigital/headless-basics-data/src";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { Key, Suspense } from "react";

const log = getLogger("theme.components.featurethreeimagessection.components.index")

export default function FeatureThreeImagesUI(dynamicComponent: ViewComponentProps) {
  const componentDetails = dynamicComponent.componentInformation

  if (!componentDetails || !componentDetails.metaData) {
    log.error("Invalid data passed to FeatureThreeImagesUI", componentDetails);
    return <div>Error rendering FeatureThreeImagesUI: Missing data</div>;
  }
  const data = componentDetails;

  populateMetaData(data)
  let matchingData = data.data;

  if (!matchingData) {
    matchingData = {}
  }



  const align = (matchingData?.align || "center") as string
  const { textAlignClass, objectPositionClass } = alignmentClasses({ align } )

  return (
    <>
      <div
        className="relative w-full pb-9 pt-16 font-urbanist md:pb-16 md:pt-16"
        style={{ backgroundColor: `#${matchingData?.backgroundColour}` }}
      >
        <Suspense>
          <DevButton metaData={componentDetails.metaData} />
        </Suspense>
        <h2
          className={`leading-12 container mb-12 font-urbanist text-3xl font-800 text-my-brown-grey md:text-h3 md:leading-h3 ${textAlignClass}`}
        >
          {matchingData.name as any}
        </h2>
        <div className="container w-full break-after-auto">
          <div className="flex flex-wrap justify-between">
            {(matchingData.featureThreeImagesSectionListing as any).map(
              (featurethreeImages: { content: { featureImage: { url: string | StaticImport; media: { altText: string; name: string; }; }; featureDescription: any; }; name: string; }, index: Key | null | undefined) => (
                <div
                  key={index}
                  className="mb-16 flex w-full flex-col sm:max-w-sm md:mb-0"
                >
                  <Image
                    className={`mb-[24px] max-h-60 w-full object-contain md:mb-[32px] ${objectPositionClass}`}
                    src={featurethreeImages.content.featureImage?.url}
                    sizes="(max-width: 600px) 354px, (min-width: 601px) 354px"
                    height={240}
                    width={354}
                    loading="lazy"
                    alt={
                      featurethreeImages.content.featureImage?.media?.altText !=
                      ""
                        ? featurethreeImages.content.featureImage?.media
                            ?.altText
                        : featurethreeImages.content.featureImage?.media
                            ?.name != ""
                        ? featurethreeImages.content.featureImage?.media?.name
                        : featurethreeImages.name
                    }
                    priority={false}
                  />
                  <div
                    className={cn(
                      `text-base leading-6 text-my-brown-grey md:text-xl md:leading-[30px] ${textAlignClass}`,
                      {
                        "*:text-left!":
                          textAlignClass?.includes("text-left"),
                        "*:text-center!":
                          textAlignClass?.includes("text-center"),
                        "*:text-right!":
                          textAlignClass?.includes("text-right"),
                      }
                    )}
                    dangerouslySetInnerHTML={{
                      __html: featurethreeImages.content.featureDescription,
                    }}
                  ></div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  )
}

function populateMetaData(componentDetails: IndividualComponentProps) {
  if(componentDetails.metaData){
    // Get the relative path of the current file
    componentDetails.metaData.rendering = "theme/components/featurethreeimagessection/components/index.tsx"
    // Get the name of the current function
    componentDetails.metaData.renderingExportFunction = "FeatureThreeImagesUI"
  }
}
