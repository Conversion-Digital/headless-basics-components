import React from "react"
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps"
import { getCmsImage } from "@conversiondigital/headless-basics-data/src/cms/tools/multiCmsImageTools"

const DefaultVariant: React.FC<StandardComponentProps> = ({ matchingData }) => {
  const { hasImage, imageLocation } = getCmsImage(matchingData?.logo)
  const backgroundColor = matchingData?.backgroundColor || "#0D0E47"
  const links = matchingData?.links || []
  return (
    <nav
      className="text-[#ffffff] px-6 py-4"
      style={{ backgroundColor }}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          {hasImage ? (
            <img
              src={imageLocation}
              alt="logo"
              className="h-8 w-auto object-contain"
            />
          ) : (
            <span className="font-bold text-white">
              {matchingData?.title || "CDNav Default"}
            </span>
          )}
          {matchingData?.subtitle && (
            <span className="text-sm text-white/80">{matchingData.subtitle}</span>
          )}
        </div>
        <ul className="flex gap-6">
          {links.map((linkItem: any, idx: number) => (
            <li key={idx}>
              <a
                href={linkItem.url ?? "#"}
                className="text-white hover:underline"
              >
                {linkItem.label ?? "Link"}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default DefaultVariant