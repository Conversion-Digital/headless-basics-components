import React from "react";
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps";
import { getCmsImage } from "@conversiondigital/headless-basics-data/src/cms/tools/multiCmsImageTools";

const DefaultVariant: React.FC<StandardComponentProps> = ({ matchingData }) => {
  const { hasImage, imageLocation, altText } = getCmsImage(matchingData);
  const backgroundColor = matchingData?.backgroundColor || "#0D0D3F";
  const servicesList = matchingData?.servicesList || [];

  // Basic fields
  const title = matchingData?.title || "Our Services";
  const subtitle = matchingData?.subtitle || "How we help businesses thrive";

  return (
    <section id="cdservices-default" className="bg-[#0D0D3F] text-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{title}</h2>
          <p className="max-w-3xl text-gray-200">{subtitle}</p>
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

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesList.map((serviceItem: any, index: number) => (
            <div
              key={index}
              className="bg-[#0F1060] p-6 rounded-lg hover:shadow-lg transition-shadow flex flex-col"
            >
              <h3 className="text-xl font-semibold mb-2">{serviceItem.title}</h3>
              <p className="text-gray-200 flex-grow">{serviceItem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DefaultVariant;