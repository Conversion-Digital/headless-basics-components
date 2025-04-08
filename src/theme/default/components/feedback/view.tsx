'use server'

import { ViewComponentProps } from "@conversiondigital/headless-basics-data/src";
import dynamic from "next/dynamic"

// const Feedback = dynamic(() => import("./components"), { loading: () => (<p>Loading...</p>) })

export async function View(dynamicComponent: ViewComponentProps) {
  const matchingData = dynamicComponent.componentInformation.data as any;
  return (<> Feedback {matchingData.heading} {matchingData.text} </>)
}
 