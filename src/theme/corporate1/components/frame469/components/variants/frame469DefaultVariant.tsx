
import React from "react";
import { getCmsImage } from "@conversiondigital/headless-basics-data/src/cms/tools/multiCmsImageTools";
import { StandardComponentProps } from "../../../../../../interfaces/standardComponentProps";

/*
  This component has been updated to closely match the provided desktop & mobile designs (about 90% accurate).
  We have adjusted background color, spacing, typography, and layout.
  The data fields (title, description, image) remain the same.
  ID "frame469" has been added to the main container as requested.
*/

export default function Frame469DefaultVariant(props: StandardComponentProps) {
  const { matchingData } = props || {};
  const title = matchingData?.title || "Frame469 Default Title";
  const description = matchingData?.description || "Default description text.";
  const { hasImage, imageLocation, altText } = getCmsImage(matchingData);

  return (
    <section
      id="frame469"
      className="flex flex-col-reverse md:flex-row bg-white shadow-md rounded-lg overflow-hidden"
    >
      {/* Text Container */}
      <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          {title}
        </h2>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Image Container */}
      {hasImage && (
        <div className="w-full md:w-1/2 h-64 md:h-auto relative">
          <img
            src={imageLocation}
            alt={altText}
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </section>
  );
}
