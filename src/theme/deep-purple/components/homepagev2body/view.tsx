'use server'

import dynamic from "next/dynamic";
import { ViewComponentProps } from "@conversiondigital/cd-headless-data/src"

const Homepagev2bodyComponent = dynamic(() => import("./components"), { loading: () => (<p>Loading...</p>) });

export async function View(dynamicComponent: ViewComponentProps) {
  return <Homepagev2bodyComponent {...dynamicComponent} />;
}
