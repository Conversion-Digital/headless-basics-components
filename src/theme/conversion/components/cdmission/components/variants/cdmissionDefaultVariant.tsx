'use client'
import React from "react";
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps";
import { getCmsImage } from "@conversiondigital/headless-basics-data/src/cms/tools/multiCmsImageTools";
import { tickIcon as TickIcon } from "../../../../styles/icons/icons";

export default function CdmissionDefaultVariant(props: StandardComponentProps) { 
  const { matchingData } = props;
  const title = matchingData?.title || "Our Mission";
  const subtitle = matchingData?.subtitle || "Making a Difference Through Innovation";
  const description = matchingData?.description || "";
  const keyPoints = matchingData?.keyPoints || [];
  const promiseTitle = matchingData?.promiseTitle?.toUpperCase() || "Our Promise";
  const promiseSubtitle = matchingData?.promiseSubtitle || "";
  const promises = matchingData?.promises || [];
  const { hasImage, imageLocation, altText } = getCmsImage(matchingData);

  return (
    <section className="bg-white text-[#0C093F] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 sm:py-12 md:py-16">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
        {/* Left Column */}
        <div className="text-center lg:text-left">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0C093F] mb-4">
            {title}
          </h3>
          <p className="text-[#0C093F] text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
            {description}
          </p>
        </div>

        {/* Right Column - Icon List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {keyPoints.map((point: any, i: number) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-5 h-5 sm:w-6 sm:h-6 mt-1 bg-[#86002F] rounded-full flex items-center justify-center text-white text-lg sm:text-2xl font-bold flex-shrink-0">
                <TickIcon/>
              </div>
              <p className="text-[#0C093F] text-sm sm:text-base md:text-lg lg:text-xl lg:text-2xl leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Promises Section */}
      <section id="cdmission-default" 
      className="bg-white text-[#0D0E47] py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl md:text-3xl font-bold text-[#0D0E47] mb-4">{promiseTitle}</h2>
            <div className="w-full h-0.5 bg-gray-300 mx-auto"></div>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-10 text-center lg:text-left">
            <div className="flex-shrink-0 flex items-center gap-3 sm:gap-4">
              {promises[0]?.icon?.asset?.url && (
                <img
                  src={promises[0].icon.asset.url}
                  alt={promises[0].title}
                  className="h-12 w-auto sm:h-16 md:h-20"
                />
              )}
              <h5 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#27B195]">
                {promises[0]?.title}
              </h5>
            </div>
            {hasImage && (
              <div className="flex-shrink-0 lg:max-w-none">
                <img 
                  src={imageLocation} 
                  alt={altText || "Mission Image"} 
                  className="w-full max-w-[428px] h-auto max-h-[93px] object-cover mx-auto lg:mx-0"
                />
              </div>
            )}
            <div className="w-full lg:w-auto">
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                {promiseSubtitle}
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};