import React from "react";
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps";
import { demoVariantData } from "./data/demoVariantData";

const DemoVariant: React.FC<StandardComponentProps> = ({ matchingData }) => {
  const fallbackTitle = matchingData?.title || demoVariantData.title;
  const fallbackSubtitle = matchingData?.subtitle || demoVariantData.subtitle;
  const items = matchingData?.testimonials || demoVariantData.testimonials;

  return (
    <section
      id="cdtestimonials-demo"
      className="p-5 bg-[#ECE8DA] text-center"
    >
      <h2 className="text-2xl font-bold mb-3">{fallbackTitle}</h2>
      <p className="mb-5">{fallbackSubtitle}</p>
      <div className="flex flex-wrap justify-center gap-5">
        {items.map((test: any, index: number) => (
          <div key={index} className="bg-white rounded-md shadow-md w-full sm:w-64 p-4">
            {test.logo && (
              <img
                src={test.logo}
                alt={test.clientName || "client"}
                className="mb-3 w-16 h-16 object-contain mx-auto"
              />
            )}
            <h3 className="text-lg font-semibold">{test.clientName || "Name"}</h3>
            <p className="text-sm text-gray-500 mb-2">{test.clientCompany || "Company"}</p>
            <p className="text-gray-700 italic">"{test.quote || "Their feedback"}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DemoVariant;