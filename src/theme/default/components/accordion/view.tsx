'use server'

import dynamic from "next/dynamic";
import { ViewComponentProps } from "@conversiondigital/headless-basics-data/src"

const AccordionUI = dynamic(() => import("./components"), { loading: () => (<p>Loading...</p>) });

export async function View(dynamicComponent: ViewComponentProps) {
  return <AccordionUI {...dynamicComponent} />;
}
