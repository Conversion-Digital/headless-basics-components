import React from "react";
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps";
import { getCmsImage } from "@conversiondigital/headless-basics-data/src/cms/tools/multiCmsImageTools";

const DefaultVariant: React.FC<StandardComponentProps> = ({
  matchingData
}) => {
  const { hasImage, imageLocation, altText } = getCmsImage(matchingData);
  const title = matchingData?.title || "Empower Your Business";
  const subtitle = matchingData?.subtitle || "Drive conversions with our solution";
  const buttonLabel = matchingData?.buttonLabel || "Get Started";
  const buttonUrl = matchingData?.buttonUrl || "#";

  return (
    <section
      id="cdcta-default"
      className="bg-[#f7f7fc] text-black py-12 px-4 md:px-8"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center justify-center">
        {hasImage && (
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src={imageLocation}
              alt={altText || "CTA Banner"}
              className="rounded-md object-cover w-full md:w-4/5 h-auto"
            />
          </div>
        )}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">{title}</h2>
          <p className="text-gray-700 mb-5">{subtitle}</p>
          <a
            href={buttonUrl}
            className="inline-block bg-[#0D0E47] text-white py-3 px-6 rounded-md hover:bg-[#0F1060] transition-colors"
          >
            {buttonLabel}
          </a>
        </div>
      </div>
    </section>
  );
};

export default DefaultVariant;