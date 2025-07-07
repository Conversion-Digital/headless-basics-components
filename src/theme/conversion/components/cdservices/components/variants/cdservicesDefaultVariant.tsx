import React from "react";
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps";
import { getCmsImage } from "@conversiondigital/headless-basics-data/src/cms/tools/multiCmsImageTools";

export default function DefaultVariant(props: StandardComponentProps) {
  const { matchingData } = props;
  const { hasImage, imageLocation, altText } = getCmsImage(matchingData);
  const backgroundColor = matchingData?.backgroundColor || "#0D0D3F";
  const servicesList = matchingData?.servicesList || [];

  // Basic fields
  const title = matchingData?.title?.toUpperCase() || "Our Services";
  const subtitle = matchingData?.subtitle || "How we help businesses thrive";

  return (
    <section className="bg-[#0D0E47] py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 sm:mb-12 md:mb-16 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-0">{title}</h2>
          <div className="max-w-xl mx-auto lg:mx-0">
            <p className="text-white text-lg sm:text-xl md:text-2xl">{subtitle}</p>
          </div>
        </div>

        {/* Optional image */}
        {hasImage && (
          <div className="my-6 sm:my-8 flex justify-center">
            <img
              src={imageLocation}
              alt={altText}
              className="w-full max-w-2xl h-32 sm:h-40 md:h-48 object-cover rounded-md"
            />
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {servicesList.map((serviceItem: any, index: number) => (
            <div key={index} className="flex flex-col p-4 sm:p-6 rounded-lg transition-all duration-300 hover:bg-[#FFF6EC] group hover:shadow-lg">
              {serviceItem?.image?.asset?.url && (
                <img
                  src={serviceItem.image.asset.url}
                  alt={serviceItem.title}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain mb-3 sm:mb-4 group-hover:brightness-0 group-hover:invert-[0.4] group-hover:text-[#0D0E47] group-hover:saturate-[2000%] group-hover:hue-rotate-[180deg] transition-all duration-300"
                />
              )}
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-[#0D0E47] mb-2 sm:mb-3">{serviceItem.title?.toUpperCase()}</h3>
              <p className="text-white text-sm sm:text-base md:text-lg group-hover:text-[#0D0E47] leading-relaxed">{serviceItem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
