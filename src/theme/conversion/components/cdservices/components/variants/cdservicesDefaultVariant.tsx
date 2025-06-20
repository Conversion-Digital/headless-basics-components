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
    <section className="bg-[#0D0E47] py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
          <h2 className="text-3xl md:text-3xl font-bold text-white mb-6 md:mb-0">{title}</h2>
          <div className="max-w-xl">
            <p className="text-white text-2xl">{subtitle}</p>
          </div>
        </div>

        {/* Optional image */}
        {hasImage && (
          <div className="my-8 flex justify-center">
            <img
              src={imageLocation}
              alt={altText}
              className="w-auto h-48 object-cover rounded-md"
            />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {servicesList.map((serviceItem: any, index: number) => (
            <div key={index} className="flex flex-col p-4 rounded-lg transition-colors duration-300 hover:bg-[#FFF6EC] group">
              {serviceItem?.image?.asset?.url && (
                <img
                  src={serviceItem.image.asset.url}
                  alt={serviceItem.title}
                  className="w-12 h-12 object-contain mb-4 group-hover:brightness-0 group-hover:invert-[0.4] group-hover:text-[#0D0E47] group-hover:saturate-[2000%] group-hover:hue-rotate-[180deg]"
                />
              )}
              <h3 className="text-xl font-bold text-white group-hover:text-[#0D0E47] mb-2">{serviceItem.title?.toUpperCase()}</h3>
              <p className="text-white text-sm md:text-base group-hover:text-[#0D0E47]">{serviceItem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
