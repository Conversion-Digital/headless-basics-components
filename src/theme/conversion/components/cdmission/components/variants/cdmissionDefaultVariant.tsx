import React from "react";
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps";
import { getCmsImage } from "@conversiondigital/headless-basics-data/src/cms/tools/multiCmsImageTools";

const CdmissionDefaultVariant: React.FC<StandardComponentProps> = ({ matchingData }) => {
  const title = matchingData?.title || "Our Mission";
  const subtitle = matchingData?.subtitle || "Making a Difference Through Innovation";
  const description = matchingData?.description || "";
  const { hasImage, imageLocation, altText } = getCmsImage(matchingData);

  return (
    <section id="cdmission-default" className="bg-white text-[#0D0E47] py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{title}</h2>
          {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
        </div>
        {hasImage && (
          <div className="flex justify-center mb-6">
            <img
              src={imageLocation}
              alt={altText}
              className="w-auto h-64 object-cover rounded-md"
            />
          </div>
        )}
        {description && (
          <p className="text-gray-800 text-base text-center md:text-left max-w-3xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </section>
  );
};

export default CdmissionDefaultVariant;