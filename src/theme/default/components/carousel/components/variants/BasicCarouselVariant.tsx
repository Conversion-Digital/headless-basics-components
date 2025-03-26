import React from "react";
import Image from "next/image";
import { StandardComponentProps } from "../../../../../../interfaces/standardComponentProps";
import { CarouselScroller } from "../CarouselScroller";

export function BasicCarouselVariant(props: StandardComponentProps) {
  const { matchingData } = props;
  const title = matchingData?.title;
  const images = matchingData?.images || [];

  return (
    <section className="w-full flex flex-col">
      {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
      <CarouselScroller speed={40}>
        {images.map((img: any, idx: number) => (
          <div
            key={`${img?.asset?.url}-${idx}`}
            className="flex-none relative w-[300px] h-[300px] border-red-500"
          >
            <Image
              src={img?.asset?.url || ""}
              alt={img?.asset?.altText || "img"}
              fill
              style={{ objectFit: "cover" }}
              priority={idx < images.length}
              unoptimized
            />
          </div>
        ))}
      </CarouselScroller>
    </section>
  );
}