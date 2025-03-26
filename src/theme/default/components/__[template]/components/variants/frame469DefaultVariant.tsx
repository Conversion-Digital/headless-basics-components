
import React from "react";
import type { ViewComponentProps } from "@conversiondigital/headless-basics-data/src/interfaces/ThemeConfig.interface";
import { getCmsImage } from "@conversiondigital/headless-basics-data/src/cms/tools/multiCmsImageTools";
import { StandardComponentProps } from "../../../../../../interfaces/standardComponentProps";

export default function Frame469DefaultVariant(props: StandardComponentProps) {
  const { matchingData } = props || {};
  const title = matchingData?.title || "Frame469 Default Title";
  const description = matchingData?.description || "Default description text.";
  const { hasImage, imageLocation, altText } = getCmsImage(matchingData);

  return (
    <section className="p-5 bg-gray-50 flex flex-col md:flex-row md:gap-6 gap-4">
      <div className="md:w-1/2">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-sm">{description}</p>
      </div>
      {hasImage && (
        <div className="md:w-1/2">
          <img src={imageLocation} alt={altText} className="w-full h-auto" />
        </div>
      )}
    </section>
  );
}
