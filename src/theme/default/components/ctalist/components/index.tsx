import {
  CtaBlocks,
  CtaButtons,
  CtaIconLinks,
  CtaImages,
} from "../../../components/ctalist/components/variants"
import DevButton from "../../../../../components/developer/devButton"
import { getLogger, IndividualComponentProps, ViewComponentProps } from "@conversiondigital/headless-basics-data/src"
import { Suspense } from "react"

const log = getLogger("theme.components.ctalist.components.index")

export default function CTAListUI(dynamicComponent: ViewComponentProps) {
  const componentDetails = dynamicComponent.componentInformation
  if (!componentDetails || !componentDetails.metaData) {
    log.error("Invalid ComponentDataProps passed to ctaList", componentDetails)
    return <div>Error rendering heroComponent: Missing data</div>
  }
  populateMetaData(componentDetails)
  const matchingData = componentDetails.metaData

  let renderedVariant = <></>
  switch (componentDetails.metaData.variant) {
    case "Feature - Button CTAs":
      renderedVariant = (
        <>
          <CtaButtons
            data={{
              align: componentDetails.data?.align as string | undefined,
              backgroundColour: componentDetails.data?.backgroundColour as string | undefined,
              callToActionItems: componentDetails.data?.callToActionItems as { content: { id?: string; backgroundColour?: string; heading: string; link: string; } }[] | undefined,
            }}
            heading={componentDetails?.data?.heading as string}
            text={componentDetails?.data?.text as string}
            languageSite={componentDetails.metaData?.languageSite}
          />
        </>
      )
      break
    case "Feature - Icon CTAs":
      renderedVariant = (
        <>
          <CtaIconLinks
            data={{
              align: componentDetails.data?.align as string | undefined,
              backgroundColour: componentDetails.data?.backgroundColour as string | undefined,
              callToActionItems: componentDetails.data?.callToActionItems as any[] | undefined,
            }}
            languageSite={componentDetails.pageDefinition?.languageSite}
          />
        </>
      )
      break
    case "Feature - Image CTAs":
      renderedVariant = (
        <>
          <CtaImages
            data={{
              align: componentDetails.data?.align as string | undefined,
              backgroundColour: componentDetails.data?.backgroundColour as string | undefined,
              callToActionItems: componentDetails.data?.callToActionItems as any[] | undefined,
            }}
            languageSite={componentDetails.pageDefinition?.languageSite}
          />
        </>
      )
      break
    case "Feature - Block CTAs":
      renderedVariant = (
        <>
          {componentDetails.data && (
            <CtaBlocks
              data={{
                align: componentDetails.data?.align as string | undefined,
                backgroundColour: componentDetails.data?.backgroundColour as string | undefined,
                callToActionItems: componentDetails.data?.callToActionItems as any[] | undefined,
              }}
              heading={componentDetails?.data?.heading as string}
              text={componentDetails?.data?.text as string}
              languageSite={componentDetails.pageDefinition?.languageSite}
            />
          )}
        </>
      )
      break
    default:
      break
  }

  return (
    <div className="w-full">
      <Suspense>
        <DevButton metaData={componentDetails.metaData} />
      </Suspense>
      {renderedVariant}
    </div>
  )
}

function populateMetaData(componentDetails: IndividualComponentProps) {
  if(componentDetails.metaData){
    // Get the relative path of the current file
    componentDetails.metaData.rendering = "theme/components/ctalist/components/index.tsx"
    // Get the name of the current function
    componentDetails.metaData.renderingExportFunction = "CTAListUI"
  }
}
