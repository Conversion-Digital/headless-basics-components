import React from "react";
import { LogoCarousel, LogoCarouselProps } from "../../../../components/carousel";
import { mapCarouselData } from "./carousel-mapping";

interface CarouselViewProps {
  data: any; // Replace `any` with the actual type if available
}

export default function CarouselView({ data }: CarouselViewProps) {
  const mappedData: LogoCarouselProps = mapCarouselData(data); // Ensure the mapped data matches the expected props
  return <LogoCarousel {...mappedData} />;
}