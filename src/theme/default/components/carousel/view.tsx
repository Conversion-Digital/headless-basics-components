import React from "react"
import { ViewComponentProps } from "@conversiondigital/headless-basics-data/src/interfaces"
import Index from "./components"

export function View(dynamicComponent: ViewComponentProps) {
  return <Index {...dynamicComponent} />
}