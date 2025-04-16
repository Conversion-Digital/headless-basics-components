import React from "react"
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps"
import { getCmsImage } from "@conversiondigital/headless-basics-data/src/cms/tools/multiCmsImageTools"

export default function DefaultVariant(props: StandardComponentProps) {
  const { blueprint, componentInformation, matchingData } = props;
  const { hasImage, imageLocation, altText } = getCmsImage(matchingData?.logo)
  const links = matchingData?.links || []
  return (
    <footer className="bg-[#F2F2F2] text-[#333333] p-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-2">
          {matchingData?.title || "CD Footer Default"}
        </h2>
        {matchingData?.subtitle && (
          <p className="mb-4">{matchingData.subtitle}</p>
        )}
        {hasImage && (
          <div className="mb-4">
            <img src={imageLocation} alt={altText} className="h-12 w-auto object-contain" />
          </div>
        )}
        <ul className="flex flex-wrap gap-5">
          {links.map((linkItem: any, idx: number) => (
            <li key={idx}>
              <a
                href={linkItem.url ?? "#"}
                className="text-blue-600 underline"
              >
                {linkItem.label ?? "Link"}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

