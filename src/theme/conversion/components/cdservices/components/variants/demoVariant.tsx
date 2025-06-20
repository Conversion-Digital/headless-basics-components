import React from "react";
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps";
import { demoVariantData } from "./data/demoVariantData";

const DemoVariant: React.FC<StandardComponentProps> = ({matchingData
}) => {
  const title = matchingData?.title || demoVariantData.title;
  const subtitle = matchingData?.subtitle || demoVariantData.subtitle;
  const services = matchingData?.servicesList || demoVariantData.servicesList;

  return (
    <section id="cdservices-demo" className="p-5 bg-[#ECE8DA] text-center">
      <h2 className="text-2xl font-bold mb-3">{title}</h2>
      <p className="mb-5">{subtitle}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
        {services.map((item: any, index: number) => (
          <div
            key={index}
            className="bg-white p-4 rounded-md shadow-md hover:shadow-xl transition-shadow"
          >
            <h3 className="text-lg font-semibold text-[#0D0E47] mb-2">{item.title}</h3>
            <p className="text-gray-700 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DemoVariant;