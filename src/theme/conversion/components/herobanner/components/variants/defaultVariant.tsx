import React from "react"
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps"
import Link from "next/link"
import { buttonIcon as ButtonIcon } from "../../../../styles/icons/icons"

export default function DefaultVariant(props: StandardComponentProps) {
  const { matchingData } = props;
  const imageUrl = matchingData?.image?.asset?.url
  const altText = matchingData?.altText || matchingData?.image?.asset?.altText || "HeroBanner Image"

  const buttonLabel = matchingData?.button?.label
  const buttonLink = matchingData?.button?.link
  return (
    <div id="herobanner-default" className="bg-[#FFF6EC] min-h-screen sm:min-h-[648px] flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-12 md:py-16 lg:py-20 hero-cover container-stretch">
      <div className="w-full lg:w-1/2 max-w-xl flex flex-col justify-center text-center lg:text-left mb-8 lg:mb-0">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0D0E47] leading-tight mb-4 sm:mb-6">
          {(matchingData?.title || "Default HeroBanner Title").toUpperCase()}
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-[#0D0E47] mb-6 sm:mb-8 md:mb-[54px] max-w-lg mx-auto lg:mx-0">
          {matchingData?.subtitle || "Default HeroBanner Subtitle"}
        </p>
        {buttonLabel && buttonLink && (
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <Link
              href={buttonLink}
              className="bg-[#800928] hover:bg-blue-950 text-white font-semibold py-3 px-6 rounded-full text-lg sm:text-xl w-full sm:w-auto min-w-[280px] h-[50px] sm:h-[59px] flex items-center justify-center tracking-wide gap-4 sm:gap-[44px] transition-colors duration-300"
            >
              {buttonLabel}
              <ButtonIcon />
            </Link>
          </div>
        )}
      </div>
      {imageUrl && (
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <img 
            src={imageUrl}
            alt={altText}
            className="w-48 sm:w-56 md:w-64 lg:w-80 xl:w-96 max-w-full h-auto object-contain"
          />
        </div>
      )}
    </div>
  )
}
