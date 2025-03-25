import React from "react"
import Image from "next/image"
import { StandardComponentProps } from "../../../../../../interfaces/standardComponentProps"
import { CarouselScroller } from "../CarouselScroller"

export function BasicCarouselVariant(props: StandardComponentProps) {
  const { matchingData } = props
  const title = matchingData?.title
  const images = matchingData?.images || []

  return (
    <section className="w-full flex flex-col">
      {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
      <CarouselScroller>
        {/* Double the images array for seamless loop */}
        {[...images, ...images].map((img: any, idx: number) => (
          <div 
            key={`${img?.asset?.url}-${idx}`}
            className="flex-none w-64 h-64 relative"
          >
            <Image
              src={img?.asset?.url || ''}
              alt={img?.asset?.altText || ''}
              width={256}
              height={256}
              className="object-cover rounded-lg"
              priority={idx < images.length}
              unoptimized={true}
            />
          </div>
        ))}
      </CarouselScroller>
    </section>
  )
}