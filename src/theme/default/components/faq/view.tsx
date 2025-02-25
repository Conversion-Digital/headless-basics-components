'use server'

import { ViewComponentProps } from "@conversiondigital/cd-headless-data/src";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const FaqUI = dynamic(() => import("./components"), { loading: () => (<p>Loading...</p>) });

export async function View(dynamicComponent: ViewComponentProps) {
  return (
    <Suspense>
      <FaqUI {...dynamicComponent} />
    </Suspense>
  );
}
