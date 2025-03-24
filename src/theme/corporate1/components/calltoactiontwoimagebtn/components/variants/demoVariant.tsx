import React from "react";
import type { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps";
import Image from "next/image";
import { callToActionTwoImageBtnDemoData } from "./demoVariantData";

export function CallToActionTwoImageBtnDemo(props: StandardComponentProps) {
  const data = callToActionTwoImageBtnDemoData;

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 px-4 py-10">
      <h2 className="mb-4 text-4xl font-bold uppercase">{data.title}</h2>
      <p className="mb-6 text-center text-base">{data.description}</p>
      <div className="flex w-full flex-col gap-8 md:flex-row">
        {/* Left Column */}
        <div className="flex-1 flex flex-col items-center">
          <Image
            src={data.imageLeft?.asset?.url || "https://placehold.co/436x706"}
            alt={data.imageLeft?.asset?.title || "Left image"}
            width={436}
            height={706}
            className="h-auto w-full object-cover"
          />
          <div className="mt-4">
            <button className="rounded-full border border-red-400 bg-red-400 px-4 py-2 font-[Oswald] uppercase text-black hover:bg-red-500">
              {data.ctaLabelLeft}
            </button>
          </div>
        </div>
        {/* Right Column */}
        <div className="flex-1 flex flex-col items-center">
          <Image
            src={data.imageRight?.asset?.url || "https://placehold.co/1065x706"}
            alt={data.imageRight?.asset?.title || "Right image"}
            width={1065}
            height={706}
            className="h-auto w-full object-cover"
          />
          <div className="mt-4">
            <button className="rounded-full border border-red-400 px-4 py-2 font-[Oswald] uppercase text-red-400 hover:bg-red-400 hover:text-white">
              {data.ctaLabelRight}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}