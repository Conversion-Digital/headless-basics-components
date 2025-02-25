'use server'

import { ViewComponentProps } from "@conversiondigital/headless-basics-data/src";
import dynamic from "next/dynamic";

const KeyFeaturesUI = dynamic(() => import("./components"), { loading: () => (<p>Loading...</p>) });

export async function View(dynamicComponent: ViewComponentProps) {
  return <KeyFeaturesUI {...dynamicComponent} />;
}
