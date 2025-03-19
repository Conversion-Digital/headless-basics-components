import React from "react";
import type { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps";
import { getCmsImage } from "@conversiondigital/headless-basics-data/src/cms/tools/multiCmsImageTools";
import Link from "next/link";

export default function DefaultOurCompany({ matchingData }: StandardComponentProps) {
  const { hasImage, imageLocation, altText } = getCmsImage(matchingData);
  const { title, subTitle, description, facts, learnMoreUrl, learnMoreLabel } = matchingData;

  return (
    <section className="w-full bg-[#F7F7F7] p-4">
      <div className="mx-auto flex max-w-5xl flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0">
        <div className="md:w-1/2">
          <h2 className="font-oswald text-3xl uppercase text-center md:text-left">
            {title || "OUR COMPANY"}
          </h2>
          {description && (
            <p className="text-[#5C5A58] text-base leading-6 mt-4">
              {description}
            </p>
          )}
          {learnMoreUrl && (
            <div className="mt-6">
              <Link
                className="inline-flex items-center rounded-full bg-black px-6 py-2 text-sm uppercase text-white hover:bg-gray-800"
                href={learnMoreUrl}
              >
                {learnMoreLabel || "LEARN MORE"}
              </Link>
            </div>
          )}
        </div>
        <div className="md:w-1/2 flex flex-col items-center md:items-end">
          {facts && facts.length > 0 && (
            <div className="mt-4 space-y-2">
              {facts.map((fact: string, idx: number) => (
                <div key={idx} className="text-[#000000] text-md uppercase">
                  {fact}
                </div>
              ))}
            </div>
          )}
          {hasImage && (
            <div className="mt-6 md:mt-8 w-full max-w-md">
              <img
                src={imageLocation}
                alt={altText}
                className="h-auto w-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}