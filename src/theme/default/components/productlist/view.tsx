'use server'

import { ViewComponentProps } from "@conversiondigital/cd-headless-data/src";
import dynamic from "next/dynamic";

const ProductListUI = dynamic(() => import("./components"), { loading: () => (<p>Loading...</p>) });

export async function View(dynamicComponent: ViewComponentProps) {
  return <ProductListUI {...dynamicComponent} />;
}
