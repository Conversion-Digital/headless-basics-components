import React from "react";
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps";
import { demoVariantData } from "./data/demoVariantData";

const DemoVariant: React.FC<StandardComponentProps> = ({
  matchingData
}) => {
  const title = matchingData?.title || demoVariantData.title;
  const subtitle = matchingData?.subtitle || demoVariantData.subtitle;
  const buttonLabel = matchingData?.buttonLabel || demoVariantData.buttonLabel;
  const buttonUrl = matchingData?.buttonUrl || demoVariantData.buttonUrl;
  const imageUrl = matchingData?.image?.asset?.url || demoVariantData.imageUrl;

  return (
    <section id="cdcta-demo" className="py-8 px-4 text-center bg-[#E9E9FA]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{subtitle}</p>
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Demo CTA Banner"
            className="mx-auto mb-4 w-full max-w-md object-cover rounded-md"
          />
        )}
        <a
          href={buttonUrl}
          className="inline-block bg-[#0D0E47] text-white py-2 px-5 rounded-md hover:bg-[#800928] transition-colors"
        >
          {buttonLabel}
        </a>
      </div>
    </section>
  );
};

export default DemoVariant;