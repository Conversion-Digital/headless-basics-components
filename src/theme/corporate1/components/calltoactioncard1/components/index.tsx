import React from "react"
import { componentBoilerPlate } from "@conversiondigital/headless-basics-data/src/component-tools/componentBoilerPlate"
import type { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps"
import { CallToActionCard1Demo } from "./variants/demoVariant"
import { ViewComponentProps } from "@conversiondigital/headless-basics-data/src"

export default function Index(dynamicComponent: ViewComponentProps) {
  const { blueprint, componentInformation, matchingData } = componentBoilerPlate(dynamicComponent)
  const { variant } = componentInformation?.metaData || {}

  if (!variant) {
    return <CallToActionCard1Demo blueprint={blueprint} componentInformation={componentInformation} matchingData={matchingData} />
  }

  switch (variant.toLowerCase()) {
    case "calltoactioncard1demo":
      return <CallToActionCard1Demo blueprint={blueprint} componentInformation={componentInformation} matchingData={matchingData} />
    default:
      return <CallToActionCard1Demo blueprint={blueprint} componentInformation={componentInformation} matchingData={matchingData} />
  }
}