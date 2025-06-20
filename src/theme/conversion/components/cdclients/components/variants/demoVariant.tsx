import React from "react";
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps";
import { demoVariantData } from "./data/demoVariantData";

const DemoVariant: React.FC<StandardComponentProps> = ({
  matchingData
}) => {
  const title = matchingData?.title || demoVariantData.title;
  const subtitle = matchingData?.subtitle || demoVariantData.subtitle;
  const clientsList = matchingData?.clientsList || demoVariantData.clientsList;

  return (
    <section id="cdclients-demo" className="p-5 bg-[#F9F9FA] text-center">
      <h2 className="text-2xl font-bold mb-3">{title}</h2>
      <p className="mb-5 text-sm text-gray-600">{subtitle}</p>
      <div className="flex flex-wrap justify-center gap-5">
        {clientsList.map((client: any, index: number) => (
          <div
            key={index}
            className="bg-white rounded-md shadow-md w-[140px] p-4 flex items-center justify-center"
          >
            {client.logo && (
              <a href={client.link || "#"} target="_blank" rel="noopener noreferrer">
                <img
                  src={client.logo}
                  alt={client.name || "Client"}
                  className="object-contain max-h-12 hover:opacity-80 transition"
                />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default DemoVariant;