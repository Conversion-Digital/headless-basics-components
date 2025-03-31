
import React from "react";
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps";
import { getCmsImage } from "@conversiondigital/headless-basics-data/src/cms/tools/multiCmsImageTools";

const Frame469DefaultVariant: React.FC<StandardComponentProps> = ({ matchingData }) => {
  const title = matchingData?.title || "Frame469 Default Title";
  const subtitle = matchingData?.subtitle || "Frame469 Default subtitle text.";
  const highlightColor = matchingData?.highlightColor || "#f3b234";
  const { hasImage, imageLocation, altText } = getCmsImage(matchingData);

  return (
    <section className="p-5 md:flex md:items-center bg-gray-50 relative">
      <div className="md:w-1/2 mb-4 md:mb-0">
        <h2 className="text-2xl font-semibold" style={{ color: highlightColor }}>
          {title}
        </h2>
        <p className="mt-2 text-base text-gray-600">{subtitle}</p>
      </div>
      {hasImage && (
        <div className="md:w-1/2 flex justify-center">
          <img src={imageLocation} alt={altText} className="w-full h-auto object-cover" />
        </div>
      )}
    </section>
  );
};

export default Frame469DefaultVariant;
