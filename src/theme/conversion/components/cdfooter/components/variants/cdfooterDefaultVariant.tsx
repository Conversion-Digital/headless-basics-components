import React from "react"
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps"
import { getCmsImage } from "@conversiondigital/headless-basics-data/src/cms/tools/multiCmsImageTools"

export default function DefaultVariant(props: StandardComponentProps) {
  const { blueprint, componentInformation, matchingData } = props;
  const logo = matchingData?.logo?.asset?.url || null;
  const links = matchingData?.links || []

  return (
    <footer className="bg-[#0D0E47] text-[#333333] p-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-2 text-white">
          {matchingData?.title || "CD Footer Default"}
        </h2>
        {matchingData?.subtitle && (
          <p className="mb-4 text-white">{matchingData.subtitle}</p>
        )}
        {logo ? (
          <div className="mb-4">
            <img src={logo} alt="" className="h-12 w-auto object-contain" />
          </div>
        ) : (
          <div className="mb-4">
            <p className="text-white">Logo not found</p>
          </div>
        )}
        <ul className="flex flex-wrap gap-5">
          {links.map((linkItem: any, idx: number) => (
            <li key={idx}>
              <a
                href={linkItem.url ?? "#"}
                className="text-white underline"
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
