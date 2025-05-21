import React from "react";
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps";
import { demoVariantData } from "./data/demoVariantData";

const DemoVariant: React.FC<StandardComponentProps> = ({ matchingData }) => {
  const heading = matchingData?.heading || demoVariantData.heading;
  const tagline = matchingData?.tagline || demoVariantData.tagline;
  const items = matchingData?.items || demoVariantData.items;

  return (
    <section id="cdinsights-demo" className="p-5 bg-[#ECE8DA] text-center">
      <h2 className="text-2xl font-bold mb-3">{heading}</h2>
      <p className="mb-5">{tagline}</p>
      <div className="flex flex-wrap justify-center gap-5">
        {items.map((item: any, index: number) => (
          <div key={index} className="bg-white rounded-md shadow-md w-full sm:w-64 p-4">
            {item.imageUrl && (
              <img
                src={item.imageUrl}
                alt={item.subtitle}
                className="mb-3 w-full h-32 object-cover"
              />
            )}
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DemoVariant;