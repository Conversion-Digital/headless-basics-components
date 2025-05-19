import React from "react";
import Image from "next/image";
import { StandardComponentProps } from "../../../../../../interfaces/standardComponentProps";
import { CarouselScroller } from "../CarouselScroller";

export function BasicCarouselVariant(props: StandardComponentProps) {
  const { matchingData } = props;
  const title = matchingData?.title;
  const images = matchingData?.images || [];

  return (
    <section className="w-full flex flex-col p-6">
      carousel
      {JSON.stringify(matchingData)}
      {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
      <CarouselScroller speed={40}>
        {images.map((img: any, idx: number) => (
          <div
            key={`${img?.asset?.url}-${idx}`}
            className="relative w-[100px] h-[100px] overflow-hidden"
          >
            {img?.asset?.url && (
              <Image
                src={img.asset.url}
                sizes="(max-width: 300px) 90vw, (min-width: 601px) 100vw"
                loading="eager"
                alt={
                  img?.asset?.altText && img.asset.altText !== ""
                    ? img.asset.altText
                    : img?.asset?.originalFilename || "Image"
                }
                fill
                quality={75}
                style={{ objectFit: "cover", objectPosition: "center" }}
                priority={idx === 0} 
              />
            )}
          </div>
        ))}
      </CarouselScroller>
    </section>
  );
}
