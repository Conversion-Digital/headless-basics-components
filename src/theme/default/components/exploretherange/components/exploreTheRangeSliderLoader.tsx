"use client"

import dynamic from "next/dynamic"

const ExploreTheRangeComponentSlider = dynamic(
  () => import("./exploreTheRangeSlider")
)

import { ReactNode } from "react";

export default function ExploreTheRangeComponentSliderLoader({ children }: { children: ReactNode }) {
  return (
    <>
      <ExploreTheRangeComponentSlider>
        {children}
      </ExploreTheRangeComponentSlider>
    </>
  )
}
