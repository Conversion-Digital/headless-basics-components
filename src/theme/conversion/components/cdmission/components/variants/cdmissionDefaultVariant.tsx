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
    <section className="bg-white text-[#0C093F] px-6 md:px-12 lg:px-20 py-16">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Column */}
        <div>
          <h3 className="text-2xl font-bold text-[#0C093F] mb-4">
            {title}
          </h3>
          <p className="text-[#0C093F] text-base leading-relaxed text-2xl">
            {description}
          </p>
        </div>

        {/* Right Column - Icon List */}
        <div className="grid sm:grid-cols-3 gap-6">
          {keyPoints.map((point: any, i: number) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-6 h-6 mt-1 bg-[#86002F] rounded-full flex items-center justify-center text-white text-2xl font-bold">
              <TickIcon/>
              </div>
              <p className="text-[#0C093F] text-2xl">{point.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Promises Section */}
      <section id="cdmission-default" 
      className="bg-white text-[#0D0E47] py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
          <h2 className="text-3xl md:text-3xl font-bold text-[#0D0E47] mb-4">{promiseTitle}</h2>
          <div className="w-full h-0.5 bg-gray-300"></div>
        </div>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            <div className="flex-shrink-0 flex items-center gap-4">
              {promises[0]?.icon?.asset?.url && (
                <img
                  src={promises[0].icon.asset.url}
                  alt={promises[0].title}
                  className="h-20 w-auto"
                />
              )}
              <h5 className="text-2xl font-bold text-[#27B195]">
                {promises[0]?.title}
              </h5>
            </div>
            {hasImage && (
              <div className="flex-1">
                <img 
                  src={imageLocation} 
                  alt={altText || "Mission Image"} 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            )}
            <p className="text-[#0C093F] text-2xl flex-1">
              {promiseSubtitle}
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};