import React from "react";
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps";
import { demoVariantData } from "./data/demoVariantData";

const DemoVariant: React.FC<StandardComponentProps> = ({ matchingData }) => {
  const title = matchingData?.title || demoVariantData.title;
  const subtitle = matchingData?.subtitle || demoVariantData.subtitle;
  const description = matchingData?.description || demoVariantData.description;
  const imageUrl = matchingData?.image?.asset?.url || demoVariantData.imageUrl;

  return (
    <section id="cdmission-demo" className="p-6 bg-[#EFEFFB] text-center">
      <h2 className="text-2xl font-bold mb-3">{title}</h2>
      {subtitle && <p className="mb-2 italic text-gray-600">{subtitle}</p>}
      {imageUrl && (
        <div className="flex justify-center my-4">
          <img
            src={imageUrl}
            alt={title}
            className="w-64 h-auto object-cover rounded-md"
          />
        </div>
      )}
      {description && (
        <p className="text-sm text-gray-700 max-w-lg mx-auto">{description}</p>
      )}
    </section>
  );
};

export default DemoVariant;