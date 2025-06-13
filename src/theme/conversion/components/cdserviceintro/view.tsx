'use server'
import { ViewComponentProps } from "@conversiondigital/headless-basics-data/src";
import dynamic from "next/dynamic"

const CdserviceintroUI = dynamic(() => import("./components"), { 
  loading: () => (<p>Loading...</p>) 
});

export async function View(dynamicComponent: ViewComponentProps) {
  return <CdserviceintroUI {...dynamicComponent} />
} 