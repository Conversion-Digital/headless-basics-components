import React from "react"
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps"
import { demoVariantData } from "./data/demoVariantData"

export default function DemoVariant(props: StandardComponentProps) {
  const { matchingData } = props;
  const fallbackTitle = matchingData?.title || demoVariantData.title
  const fallbackSubtitle = matchingData?.subtitle || demoVariantData.subtitle

  return (
    <footer className="bg-[#D1F4FA] text-[#000] p-6">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-2">{fallbackTitle}</h2>
        <p className="mb-2">{fallbackSubtitle}</p>
        <p className="italic text-sm">
          This is the xDemo variant for cdfooter - for demonstration only.
        </p>
      </div>
    </footer>
  )
}
