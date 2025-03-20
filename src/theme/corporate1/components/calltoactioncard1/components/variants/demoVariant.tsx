import React from "react"
import { callToActionCard1DemoData } from "./demoVariantData"
import type { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps"
import Image from "next/image"

export function CallToActionCard1Demo(props: StandardComponentProps) {
  const data = callToActionCard1DemoData
  return (
    <div className="relative w-[1920px] h-[819px] text-white bg-zinc-800">
      <div className="absolute inset-0 flex flex-row">
        <div className="w-[960px] h-[819px] bg-zinc-800 flex-shrink-0" />
        <Image
          src={data.image?.asset?.url}
          alt={data.image?.asset?.title || "callToActionCard1 image"}
          width={960}
          height={819}
          className="h-[819px] w-[960px] object-cover"
        />
      </div>
      <div className="absolute top-[115px] left-[120px] text-5xl font-[Oswald] uppercase">
        {data.title}
      </div>
      <div className="absolute top-[208.5px] left-[120px] w-[648px] text-stone-400 text-lg font-['Roboto'] leading-7">
        {data.description}
      </div>
      <div className="absolute top-[638px] left-[120px] w-72 h-14 border-[1.5px] border-red-400 rounded-[60px]" />
      <div className="absolute top-[655px] left-[150px] text-base font-[Oswald] uppercase">visit the Creek website</div>
      <div className="absolute top-[661.5px] left-[374px] w-1.5 h-3 outline outline-2 outline-offset-[-1px] outline-red-400"></div>
      <div className="absolute top-[661.5px] left-[368px] w-1.5 h-3 outline outline-2 outline-offset-[-1px] outline-red-400"></div>
    </div>
  )
}