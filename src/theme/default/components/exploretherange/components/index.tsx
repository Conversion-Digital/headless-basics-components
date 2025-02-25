import Link from "next/link"
import { Suspense } from "react"
import DevButton from "../../../../../components/developer/devButton"
import FeatureSection from "../../../../../components//sections/feature-section"
import ExploreTheRangeComponentSliderLoader from "./exploreTheRangeSliderLoader"
import {
  IndividualComponentProps,
  LanguageSite,
  ViewComponentProps,
  alignmentClasses,
  cn,
  getLogger
} from "@conversiondigital/cd-headless-data/src"
import { getSectionBackgroundColour } from "../../../../utils/getSectionBackgroundColour"
import { renderCTA } from "../../ctalist/components/RenderCTA"

const log = getLogger("theme.components.exploretherange.components.index")

export default function ExploreTheRangeUI(dynamicComponent: ViewComponentProps) {
  const componentDetails = dynamicComponent.componentInformation

  if (!componentDetails || !componentDetails.metaData) {
    log.error("Invalid data passed to ExploreTheRangeUI", componentDetails);
    return <div>Error rendering ExploreTheRangeUI: Missing data</div>;
  }
  const data = componentDetails;

  populateMetaData(componentDetails)

  return (
    <div className="w-full">
      <Suspense><DevButton metaData={componentDetails.metaData} /></Suspense>
      {(data.data?.explore as { content: any }[])?.map(({ content }) => (
        <div
          className={`inline-block w-full py-14 align-top font-urbanist text-my-blue md:py-28 ${getSectionBackgroundColour(
            content?.fullSectionBackgroundColour,
            ""
          )}`}
        >
          <div
            className={`container w-full ${getSectionBackgroundColour(
              content?.fullSectionBackgroundColour,
              ""
            )}`}
          >
            <div className={`my-4 flex flex-wrap font-urbanist`}>
              <h3 className="mb-6 text-3xl font-800 leading-[45px] md:mb-8 md:text-h3 md:leading-h3">
                {content.heading}
              </h3>
              <div
                className="flex w-full flex-col items-center gap-6 p-8 sm:flex-row sm:justify-between"
                style={{ backgroundColor: `#${content?.backgroundColour}` }}
              >
                <p
                  className={cn(
                    "text-sm font-400 leading-body2 text-my-black md:text-base",
                    {
                      hidden: !content?.introductionText,
                    }
                  )}
                >
                  {content.introductionText}
                </p>
                {content?.button && (
                  <Link
                    className="box-border w-full max-w-sm shrink-0 rounded-full bg-my-blue px-8 py-3 text-center text-body1 font-800 uppercase leading-body1 tracking-0.1em text-white transition hover:bg-my-yellow hover:text-my-blue sm:max-w-max"
                    href={content?.button?.url}
                  >
                    {content.button.name}
                  </Link>
                )}
              </div>
              <ShouldShowSlider
                childrenProducts={content?.childrenProducts}
                languageSite={data.pageDefinition?.languageSite}
                slug={data?.pageDefinition?.preliminarySlug || ""}
                align={data.data?.align as string}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function ShouldShowSlider({
  childrenProducts,
  languageSite,
  slug,
  align = "center",
}: {
  childrenProducts: any[],
  languageSite: LanguageSite | undefined,
  slug: string,
  align?: string,
}) {
  log.debug(
    "Explore the range ShouldShowSlider: ",
    childrenProducts?.length,
    slug
  )
  if (childrenProducts?.length > 3) {
    return (
      <>
        <ExploreTheRangeComponentSliderLoader>
          {renderProducts(childrenProducts, languageSite, align)}
        </ExploreTheRangeComponentSliderLoader>
      </>
    )
  } else {
    return (
      <div
        className={`container hidden grid-cols-1 gap-8 py-4 sm:grid-cols-2 md:grid lg:grid-cols-3`}
      >
        {renderProducts(childrenProducts, languageSite, align)}
      </div>
    )
  }
}

const renderProducts = (childrenProducts: any[], languageSite: LanguageSite | undefined, align: string) => {
  const { alignItemsClass, justifyGridClass, objectPositionClass } =
    alignmentClasses({ align : align || "center" })
  return childrenProducts?.map((card, index) => (
    <>
      <FeatureSection.Card
        key={index}
        imageSrc={card?.imageUrl}
        altText={card?.altText}
        title={card?.name}
        wrapperClassName={alignItemsClass}
        className={`w-full gap-4 ${justifyGridClass}`}
        imageClassName={`h-52 w-full ${objectPositionClass}`}
        description={card?.description}
        feature={card?.feature}
        titleClassName="my-0 self-start text-base font-800 uppercase text-my-blue"
        descriptionClassName="self-start text-body2! font-bold  capitalize leading-body2 text-my-black"
        renderCTA={() =>
          renderCTA({ url: card?.url, name: "Learn More" }, languageSite)
        }
      >
      </FeatureSection.Card>
    </>
  ))
}

function populateMetaData(componentDetails: IndividualComponentProps) {
  if(componentDetails.metaData){
    // Get the relative path of the current file
    componentDetails.metaData.rendering = "theme/components/exploretherange/components/index.tsx"
    // Get the name of the current function
    componentDetails.metaData.renderingExportFunction = "ExploreTheRangeUI"
  }
}
