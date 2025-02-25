'use server'

import { ViewComponentProps } from "@conversiondigital/cd-headless-data/src";
import dynamic from "next/dynamic";

const GoogleMapsUI = dynamic(() => import("./components"), { loading: () => (<p>Loading...</p>) });

export async function View(dynamicComponent: ViewComponentProps) {
  return <GoogleMapsUI {...dynamicComponent} />;
}
