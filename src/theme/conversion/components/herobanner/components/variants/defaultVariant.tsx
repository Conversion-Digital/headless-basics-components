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
    <div id="herobanner-default" className="bg-[#FFF6EC] h-[648px] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 hero-cover container-stretch pt-300px pb-300px d-flex flex-wrap justify-content-between">
      <div className="max-w-xl flex flex-col justify-center">
        <h2 className="text-5xl md:text-6xl font-extrabold text-[#0D0E47] leading-tight">
          {(matchingData?.title || "Default HeroBanner Title").toUpperCase()}
        </h2>
        <p className="mt-6 text-lg md:text-xl text-[#0D0E47] mb-[54px]">
          {matchingData?.subtitle || "Default HeroBanner Subtitle"}
        </p>
        {buttonLabel && buttonLink && (
          <div className="flex items-center gap-8">
            <Link
              href={buttonLink}
              className="bg-[#800928] hover:bg-blue-950 text-white font-semibold py-3 px-6 rounded-full text-xl w-[409px] h-[59px] flex items-center justify-center tracking-wide gap-[44px]"
            >
              {buttonLabel}
              <ButtonIcon />
            </Link>
          </div>
        )}
      </div>
      {imageUrl && (
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img 
            src={imageUrl}
            alt={altText}
            className="w-48 md:w-64 lg:w-80 mt-[293px]"
          />
        </div>
      )}
    </div>
  )
}
