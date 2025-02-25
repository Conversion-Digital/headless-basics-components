"use client"

import dynamic from "next/dynamic"
import { AccordionFaqClientProps } from "./accordionClient"

const AccordionFaqClient = dynamic(() => import("./accordionClient"))

export default function AccordionFaqLoader({ faqList, languageSite }: AccordionFaqClientProps) {
  return (
    <>
      <AccordionFaqClient faqList={faqList} languageSite={languageSite} />
    </>
  )
}
