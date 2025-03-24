import React from "react"
import { StandardComponentProps } from "../../../../../../interfaces/standardComponentProps"


export function BasicCarouselVariant(props: StandardComponentProps){
  const { matchingData } = props
  const title = matchingData?.title
  const images = matchingData?.images || []

  return (
    <section className="w-full flex flex-col">
      {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
      <div className="overflow-x-auto flex space-x-4">
        {images.map((img: any, idx: number) => (
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