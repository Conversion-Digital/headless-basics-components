import React from "react"
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps"
import { demoVariantData } from "./data/demoVariantData"

const DemoVariant: React.FC<StandardComponentProps> = ({ matchingData }) => {
  const fallbackTitle = matchingData?.title || demoVariantData.title
  const fallbackSubtitle = matchingData?.subtitle || demoVariantData.subtitle
  const backgroundColor = matchingData?.backgroundColor || demoVariantData.backgroundColor
  const fallbackLinks = matchingData?.links || demoVariantData.links
  return (
    <nav
      id="cdnav-demo"
      className="p-5 text-center"
      style={{ backgroundColor }}
    >
      <h2 className="text-2xl font-bold mb-2">
        {fallbackTitle}
      </h2>
      <p className="mb-5 italic">
        {fallbackSubtitle}
      </p>
      <ul className="flex gap-5 justify-center">
        {fallbackLinks.map((linkItem: any, idx: number) => (
          <li key={idx}>
            <a
              href={linkItem.url ?? "#"}
              className="text-blue-800 hover:text-blue-500 underline"
            >
              {linkItem.label ?? "Link"}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default DemoVariant