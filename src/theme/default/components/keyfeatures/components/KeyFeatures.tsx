import { alignmentClasses, cn, filterAndUpdateClass, LanguageSite } from "@conversiondigital/cd-headless-data/src"
import { FeatureCard } from "./FeatureCard"
import FeatureSection from "../../../../../components/sections/feature-section"
import Carousel from "../../common/carousel/carousel"

const columnClasses = {
  "Key Features - Four Column":
    "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  "Key Features - Three Column": "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
}

interface KeyFeaturesProps {
  data: {
    align?: string;
    backgroundColour?: string;
    heading?: string;
    text?: string;
    selectableVariant?: "Key Features - Four Column" | "Key Features - Three Column";
    keyFeatures?: any;
  }
  languageSite: LanguageSite | undefined
}

export const KeyFeatures = ({ data, languageSite }: KeyFeaturesProps) => {
  const align = data?.align || "center"
  const { textAlignClass, alignItemsClass } = alignmentClasses({ align })

  if(!languageSite) {
    return null
  }

  return (
    <FeatureSection
      className="py-8"
      style={{ backgroundColor: `#${data?.backgroundColour}` }}
    >
      <div className={`flex w-full flex-col ${alignItemsClass}`}>
        <FeatureSection.Headline className="mb-6 max-w-(--breakpoint-lg) text-3xl leading-normal sm:mb-8 sm:text-h3! sm:leading-h3!">
          {data?.heading}
        </FeatureSection.Headline>
        <div
          className={cn(`mb-10 max-w-(--breakpoint-md) sm:mb-16 ${textAlignClass}`, {
            "*:text-left!": textAlignClass?.includes("text-left"),
            "*:text-center!": textAlignClass?.includes("text-center"),
            "*:text-right!": textAlignClass?.includes("text-right"),
          })}
          dangerouslySetInnerHTML={{
            __html: filterAndUpdateClass(data?.text || '', languageSite),
          }}
        />
      </div>
      <div
        className={cn(
          "hidden grid-cols-1 justify-items-center gap-8 font-urbanist sm:grid sm:grid-cols-2",
          columnClasses[data?.selectableVariant || "Key Features - Four Column"]
        )}
      >
        <FeatureCard features={data?.keyFeatures} languageSite={languageSite} align={align} />
      </div>
      <div className="w-full px-4 sm:hidden">
        <Carousel
          settings={{
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrow: true,
          }}
        >
          <FeatureCard features={data?.keyFeatures} languageSite={languageSite} align={align} />
        </Carousel>
      </div>
    </FeatureSection>
  )
}
