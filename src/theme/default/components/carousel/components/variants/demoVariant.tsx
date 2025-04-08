import React from "react"

import { demoVariantData } from "./demoVariantData"
import { StandardComponentProps } from "../../../../../../interfaces/standardComponentProps"

export function CarouselDemoVariant(props: StandardComponentProps){
  const data = demoVariantData

  return (
    <section className="w-full flex flex-col">
      <h2 className="text-xl font-bold mb-4">{data.title}</h2>
      <div className="overflow-x-auto flex space-x-4">
        {data.images.map((img: any, idx: number) => (
          <div key={idx} className="flex-none w-64 h-64 relative">
            <img
              className="w-full h-full object-cover"
              src={img?.asset?.url}
              alt={img?.asset?.altText || ""}
            />
          </div>
        ))}
      </div>
    </section>
  )
}