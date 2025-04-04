import React from "react"
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps"

const DefaultVariant: React.FC<StandardComponentProps> = ({ blueprint, componentInformation, matchingData }) => {
  const imageUrl = matchingData?.image?.asset?.url
  const altText = matchingData?.altText || matchingData?.image?.asset?.altText || "HeroBanner Image"

  return (
    <div id="herobanner-default" className="p-4 bg-gray-50">
      <h2 className="text-xl font-bold mb-2">
        {matchingData?.title || "Default HeroBanner Title"}
      </h2>
      <p className="text-base">
        {matchingData?.subtitle || "Default HeroBanner Subtitle"}
      </p>
      {imageUrl && (
        <div className="mt-4">
          <img
            src={imageUrl}
            alt={altText}
            className="w-full h-auto object-cover"
          />
        </div>
      )}
    </div>
  )
}

export default DefaultVariant