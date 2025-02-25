import { renderCTA } from "../../../../components/ctalist/components/RenderCTA"
import FeatureSection from "../../../../../../components/sections/feature-section"
import { alignmentClasses, LanguageSite, parseText } from "@conversiondigital/headless-basics-data/src"
import { getSectionBackgroundColour } from "../../../../../utils/getSectionBackgroundColour";

interface CtaImagesProps {
  data: {
    align?: string;
    backgroundColour?: string;
    heading?: string;
    text?: string;
    callToActionItems?: Array<{
      content: {
        icon?: {
          url?: string;
          media?: {
            altText?: string;
            name?: string;
          };
        };
        heading?: string;
        text?: string;
        link?: any;
      };
    }>;
  };
  languageSite: LanguageSite | undefined;
}

export const CtaImages = ({ data, languageSite }: CtaImagesProps) => {
  const {
    textAlignClass,
    alignItemsClass,
    justifyGridClass,
    objectPositionClass,
  } = alignmentClasses({ align: data?.align || "center" })
  let gridColsClass = "md:grid-cols-3"
  if (data?.callToActionItems?.length === 2) {
    gridColsClass = "md:grid-cols-2"
  }

  return (
    <FeatureSection
      className={`font-urbanist text-my-brown-grey ${getSectionBackgroundColour(
        data?.backgroundColour as string,
        ""
      )}`}
    >
      <div className={`flex w-full flex-col ${alignItemsClass}`}>
        <FeatureSection.Headline
          className="font-800 leading-h2 text-my-blue md:text-h2"
          align={data?.align}
        >
          {data.heading}
        </FeatureSection.Headline>
        <FeatureSection.Description
          className="mb-0 mt-6 max-w-(--breakpoint-md) text-xl font-400 leading-strap text-my-blue md:mb-16"
          align={data?.align}
        >
          {parseText(data.text || "").text}
        </FeatureSection.Description>
      </div>
      <div className="invisible grid-cols-2 md:grid-cols-3">
        This is present as tailwind doesn&apos;t like dynamic assignments of
        grid-cols
      </div>
      <div
        className={`grid grid-cols-1 justify-items-center gap-12 sm:grid-cols-2 ${gridColsClass}`}
      >
        {data?.callToActionItems?.map(({ content: card }, index) => (
          <FeatureSection.Card
            key={index}
            imageSrc={card?.icon?.url || ""}
            title={card?.heading || ""}
            className={`w-full gap-4 ${justifyGridClass}`}
            wrapperClassName={alignItemsClass}
            altText={
              card?.icon?.media?.altText != ""
                ? card?.icon?.media?.altText || ""
                : card?.icon?.media?.name != ""
                ? card?.icon?.media?.name || ""
                : card?.heading || ""
            }
            description={card?.text}
            titleClassName="my-6 self-start text-center text-h4 font-800 leading-h4 md:my-8"
            imageClassName={`h-52 w-full md:h-72 xl:h-96 ${objectPositionClass}`}
            descriptionClassName={`self-start text-base font-400 text-my-blue ${textAlignClass}`}
            renderCTA={() => renderCTA(card?.link, languageSite)}
          />
        ))}
      </div>
    </FeatureSection>
  )
}