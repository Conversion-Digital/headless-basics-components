'use server'

import { ViewComponentProps } from "@conversiondigital/headless-basics-data/src"
import dynamic from "next/dynamic"

const PostNoteUI = dynamic(() => import("./component"), { loading: () => (<p>Loading...</p>) })

export async function View(dynamicComponent: ViewComponentProps) {
  return (
  <div className="flex p-6 pl-48 pr-48 flex-col items-center">
    <PostNoteUI {...dynamicComponent} />
  </div>
  )
}
