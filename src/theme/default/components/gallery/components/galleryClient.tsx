"use client"
import { getLogger } from "@conversiondigital/cd-headless-data/src"

import CenterModeCarousel from "../../../components/common/carousel/centered-carousel"

const log = getLogger("ui-base.cms.heartcore.content.GalleryClient");

interface GalleryClientProps {
  images: any[];
}

export default function GalleryClient({ images }: GalleryClientProps) {

  return (
    <>
      <CenterModeCarousel slides={images} />
    </>
  );
}
