'use server'

import { ViewComponentProps } from "@conversiondigital/headless-basics-data/src"
import dynamic from "next/dynamic"

const ToggleUI = dynamic(() => import("./components"), { loading: () => (<p>Loading...</p>) })

export async function View(dynamicComponent: ViewComponentProps) {
  return (
  <div className="flex p-6 pl-48 pr-48 flex-col items-center">
    <ToggleUI {...dynamicComponent} />
  </div>
  )
}
