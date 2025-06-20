import React from "react";
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps";
import { demoVariantData } from "./data/demoVariantData";

const DemoVariant: React.FC<StandardComponentProps> = ({
  matchingData
}) => {
  const title = matchingData?.title || demoVariantData.title;
  const subtitle = matchingData?.subtitle || demoVariantData.subtitle;
  const items = matchingData?.items || demoVariantData.items;

  return (
    <section id="cdcasestudies-demo" className="p-6 bg-[#F0F0FA] text-center">
      <h2 className="text-2xl font-bold mb-3">{title}</h2>
      <p className="mb-5">{subtitle}</p>
      <div className="flex flex-wrap justify-center gap-6">
        {items.map((item: any, index: number) => (
          <div key={index} className="bg-white rounded-md shadow-md w-full sm:w-64 p-5">
            {item.imageUrl && (
              <img
                src={item.imageUrl}
                alt={item.title}
                className="mb-3 w-full h-40 object-cover"
              />
            )}
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.description}</p>
            {item.link && (
              <a
                href={item.link}
                className="inline-block mt-2 text-blue-600 hover:text-blue-800 underline"
              >
                Read more
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default DemoVariant;