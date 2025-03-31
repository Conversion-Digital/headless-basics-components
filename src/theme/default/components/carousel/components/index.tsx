import React from "react"
import { ViewComponentProps } from "@conversiondigital/headless-basics-data/src/interfaces"
import { componentBoilerPlate } from "@conversiondigital/headless-basics-data/src/component-tools/componentBoilerPlate"
import { CarouselDemoVariant } from "./variants/demoVariant"
import { BasicCarouselVariant } from "./variants/BasicCarouselVariant"

export default function Index(dynamicComponent: ViewComponentProps) {
  const { componentInformation, blueprint } = dynamicComponent
  const { variant, matchingData } = componentBoilerPlate(dynamicComponent)

  if (!matchingData) return null

  switch (variant) {
    case "demo":
      return (
        <CarouselDemoVariant
          blueprint={blueprint}
          componentInformation={componentInformation}
          matchingData={matchingData}
        />
      )

    default:
      return (
        <BasicCarouselVariant
          blueprint={blueprint}
          componentInformation={componentInformation}
          matchingData={matchingData}
        />
      )
  }
}