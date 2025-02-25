"use client"

import dynamic from "next/dynamic"

const AccordionClient = dynamic(() => import("./accordionClient"))

interface AccordionClientLoaderProps {
  accordionData: any;
  globalData: any;
}

export default function AccordionClientLoader({ accordionData, globalData }: AccordionClientLoaderProps) {
  return (
    <>
      <AccordionClient accordionData={accordionData} globalData={globalData} />
    </>
  )
}
