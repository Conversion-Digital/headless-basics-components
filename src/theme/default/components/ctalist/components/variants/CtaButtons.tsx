import { Fragment } from "react"
import { alignmentClasses, cn } from '@conversiondigital/headless-basics-data';
import { getSectionBackgroundColour } from "../../../../../utils/getSectionBackgroundColour"
import { renderCTA } from "../../../../components/ctalist/components/RenderCTA"
import { CtaButtonsProps } from "./CtaBlocksProps";



export const CtaButtons = ({ data, heading, text, languageSite }: CtaButtonsProps) => {
  const { textAlignClass, alignItemsClass, justifyClass } = alignmentClasses({
    align: data?.align || "center",
  })

  return (
    <div
      className={`w-full ${getSectionBackgroundColour(
        data?.backgroundColour as string,
        ""
      )} p-4 py-12 font-urbanist`}
    >
      <div className={`container flex w-full flex-col ${alignItemsClass}`}>
        <h3
          className={`mb-8 ${textAlignClass} text-3xl font-800 text-my-blue md:text-h3 md:leading-h3`}
        >
          {heading}
        </h3>
        <h2
          className={`mb-8 max-w-(--breakpoint-md) ${textAlignClass} font-urbanist text-h4 font-medium leading-h4 text-my-black`}
          dangerouslySetInnerHTML={{ __html: text }}
        ></h2>
        <div
          className={`flex w-full flex-col items-center ${justifyClass} gap-6 sm:flex-row`}
        >
          {data?.callToActionItems?.map(({ content }, index) => (
            <Fragment key={content.id ?? index}>
              {renderCTA(
                { name: content?.heading, url: content?.link },
                languageSite,
                cn("mt-0 box-border w-full sm:max-w-max", {
                  "bg-my-yellow text-my-blue": index % 2 !== 0,
                  "bg-my-blue text-white hover:bg-my-yellow hover:text-my-blue transition":
                    index % 2 === 0,
                })
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
