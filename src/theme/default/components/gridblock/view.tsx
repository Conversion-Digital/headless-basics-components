'use server'
import { ViewComponentProps } from "@conversiondigital/headless-basics-data/src";
import dynamic from "next/dynamic"

const GridblockUI = dynamic(() => import("./components"), { loading: () => (<p>Loading...</p>) })

export async function View(dynamicComponent: ViewComponentProps) {
  return <GridblockUI {...dynamicComponent} />
}