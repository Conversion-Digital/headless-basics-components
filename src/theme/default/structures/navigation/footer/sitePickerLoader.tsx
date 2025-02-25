"use client"

import dynamic from "next/dynamic"

const SitePicker = dynamic(() => import("./site-picker").then((module) => module.SitePicker))

export default function SitePickerLoader({}) {
  return (
    <>
      <SitePicker />
    </>
  )
}
