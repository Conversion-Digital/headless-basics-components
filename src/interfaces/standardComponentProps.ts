import { PageBlueprint, IndividualComponentProps } from "@conversiondigital/headless-basics-data/src/interfaces"

export interface StandardComponentProps {
  blueprint?: PageBlueprint
  componentInformation?: IndividualComponentProps
  matchingData: any
  variant?: string
}
