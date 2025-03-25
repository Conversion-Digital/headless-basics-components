import React from "react"
import type { ViewComponentProps } from "@conversiondigital/headless-basics-data/src/interfaces"
import dynamic from "next/dynamic"

const LazyComp = dynamic(() => import("./components"), {
  ssr: true,
  loading: () => <div>Loading callToActionCard1...</div>,
})

export function View(dynamicComponent: ViewComponentProps) {
  return <LazyComp {...dynamicComponent} />
}