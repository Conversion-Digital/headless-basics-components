import { getSectionBackgroundColour } from '../../../../../utils/getSectionBackgroundColour';
import { renderCTA } from '../../../../components/ctalist/components/RenderCTA';
import { alignmentClasses, cn } from '@conversiondigital/cd-headless-data';
import { CtaBlocksProps } from './CtaBlocksProps';

export const CtaBlocks = ({ data, heading, text, languageSite }: CtaBlocksProps) => {
  const { textAlignClass, justifyClass } = alignmentClasses({
    align: data?.align || "center",
  })
  return (
    <div
      className={`w-full ${getSectionBackgroundColour(
        data?.backgroundColour as string,
        "bg-[#D1D3D433]"
      )} py-12 font-urbanist`}
    >
      <div className={`container flex w-full flex-col ${justifyClass}`}>
        <h3
          className={`mb-8 ${textAlignClass} text-3xl font-800 text-my-blue md:text-h3 md:leading-h3`}
        >
          {heading}
        </h3>
        <h2
          className={`${textAlignClass} text-lg font-medium`}
          dangerouslySetInnerHTML={{ __html: text }}
        ></h2>
      </div>
      <div className="container grid grid-cols-1 gap-x-14 gap-y-10 md:grid-cols-2 ">
        {data?.callToActionItems?.map(({ content }, index) => {
          let bg = getSectionBackgroundColour(content?.backgroundColour ?? "", "")
          if (!bg) {
            bg = index % 2 === 0 ? "bg-my-black" : "bg-my-yellow" // Updated background colors
          }

          const lowercaseBg = bg ? bg.toLowerCase() : ""

          return (
            <div
              key={content.id ?? index}
              className={cn(
                "flex flex-col justify-center px-6 py-12 text-center ",
                bg
              )}
            >
              <p
                className={
                  "text-h4 md:text-h3 " +
                  cn("font-800 leading-h4 md:leading-h3 ", {
                    "text-white": lowercaseBg.includes("black"),
                    "text-my-black": lowercaseBg.includes("yellow"),
                  })
                }
              >
                {content.heading}
              </p>
              {renderCTA(
                { name: content.heading, url: content?.link },
                languageSite,
                cn("mx-auto mt-6 sm:min-w-[236px]", {
                  "bg-white text-my-blue hover:bg-my-yellow hover:text-my-blue transition":
                    lowercaseBg.includes("black"), // White buttons for black background
                  "bg-my-black text-white hover:bg-white hover:text-my-blue transition":
                    lowercaseBg.includes("yellow"), // Black buttons for orange background
                })
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
