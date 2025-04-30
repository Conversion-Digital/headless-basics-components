import React from "react"
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps"
import { demoVariantData } from "./data/demoVariantData"
import Link from "next/link"

export default function DemoVariant(props: StandardComponentProps) {
  const { matchingData } = props;
  const fallbackTitle = matchingData?.title || demoVariantData.title
  const fallbackSubtitle = matchingData?.subtitle || demoVariantData.subtitle
  const fallbackAlt = matchingData?.altText || demoVariantData.altText
  const dynamicImageUrl = matchingData?.image?.asset?.url

  const buttonLabel = matchingData?.button?.label || "Demo Button"
  const buttonLink = matchingData?.button?.link || "#"

  return (
    <section
      id="herobanner-demo"
      className="p-5 bg-white text-center border border-gray-300"
    >
      <h2 className="text-2xl font-bold mb-3">
        {fallbackTitle}
      </h2>
      <p className="mb-5">
        {fallbackSubtitle}
      </p>
      {dynamicImageUrl && (
        <img
          src={dynamicImageUrl}
          alt={fallbackAlt}
          className="mx-auto w-auto h-auto mb-5"
        />
      )}
      <Link
        href={buttonLink}
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md"
      >
        {buttonLabel}
      </Link>
    </section>
  )
}