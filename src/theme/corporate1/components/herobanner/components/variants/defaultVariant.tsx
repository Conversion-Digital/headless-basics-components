import React from "react"
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps"
import Link from "next/link"

export default function DefaultVariant(props: StandardComponentProps) {
  const { matchingData } = props;
  const imageUrl = matchingData?.image?.asset?.url
  const altText = matchingData?.altText || matchingData?.image?.asset?.altText || "HeroBanner Image"

  const buttonLabel = matchingData?.button?.label
  const buttonLink = matchingData?.button?.link

  return (
    <div id="herobanner-default" className="relative">
      {imageUrl && (
        <div className="w-fit">
          <img
            src={imageUrl}
            alt={altText}
            className="w-full h-auto object-cover"
          />
        </div>
      )}
      <div className="absolute inset-0  p-4 flex flex-col justify-center">
        <h2 className="text-xl font-bold mb-2 text-white">
          {(matchingData?.title || "Default HeroBanner Title").toUpperCase()}
        </h2>
        <p className="text-base mb-4 text-white">
          {matchingData?.subtitle || "Default HeroBanner Subtitle"}
        </p>
        {buttonLabel && buttonLink && (
          <Link
            href={buttonLink}
            className="px-6 py-3 text-[16px] bg-red-900 hover:bg-blue-950 text-white rounded-[50rem] flex items-center gap-2 w-fit"
          >
            {buttonLabel}
          </Link>
        )}
      </div>
    </div>
  )
}
