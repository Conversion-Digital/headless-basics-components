import FeatureSection from "../../../../../components/sections/feature-section"
import { alignmentClasses, cn, filterAndUpdateClass, LanguageSite } from "@conversiondigital/headless-basics-data/src"

interface FeatureCardProps {
  features: any[]
  languageSite: LanguageSite
  align?: string
}

export const FeatureCard = ({ features, languageSite, align = "center" }: FeatureCardProps) => {
  const { textAlignClass, justifyGridClass, objectPositionClass } =
    alignmentClasses({ align })

  return features?.map(({ content }, index) => (
    <FeatureSection.Card
      key={index}
      imageSrc={content.image.url}
      title={content.heading}
      imageHeight={60}
      imageWidth={60}
      className={`w-full gap-4 ${justifyGridClass}`}
      imageClassName={`${objectPositionClass}`}
      titleClassName={`my-0 mt-4 self-start text-h4! font-800 leading-h4 text-my-blue ${textAlignClass}`}
      descriptionClassName="hidden"
      altText={
        content?.image?.media?.altText != ""
          ? content?.image?.media?.altText
          : content?.image?.media?.name != ""
          ? content?.image?.media?.name
          : content?.heading
      }
    >
      <div
        className={cn(textAlignClass, {
          "*:text-left!": textAlignClass?.includes("text-left"),
          "*:text-center!": textAlignClass?.includes("text-center"),
          "*:text-right!": textAlignClass?.includes("text-right"),
        })}
        dangerouslySetInnerHTML={{
          __html: filterAndUpdateClass(content?.description, languageSite),
        }}
      />
    </FeatureSection.Card>
  ))
}
