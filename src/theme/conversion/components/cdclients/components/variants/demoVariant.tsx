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
            className="bg-white rounded-md shadow-md w-[140px] p-4 flex items-center justify-center group"
          >
            {(client.inactiveLogo || client.activeLogo) && (
              <a href={client.link || "#"} target="_blank" rel="noopener noreferrer">
                <div className="relative w-full h-12 flex items-center justify-center">
                  {/* Inactive Logo */}
                  {client.inactiveLogo && (
                    <img
                      src={client.inactiveLogo.asset?.url || client.inactiveLogo}
                      alt={client.name || "Client"}
                      className="max-w-full max-h-full object-contain filter grayscale opacity-70 group-hover:opacity-0 transition-all duration-300"
                    />
                  )}
                  
                  {/* Active Logo */}
                  {client.activeLogo && (
                    <img
                      src={client.activeLogo.asset?.url || client.activeLogo}
                      alt={client.name || "Client"}
                      className="absolute inset-0 max-w-full max-h-full object-contain opacity-0 group-hover:opacity-100 transition-all duration-300"
                    />
                  )}
                  
                  {/* Fallback if only inactive logo exists */}
                  {client.inactiveLogo && !client.activeLogo && (
                    <img
                      src={client.inactiveLogo.asset?.url || client.inactiveLogo}
                      alt={client.name || "Client"}
                      className="absolute inset-0 max-w-full max-h-full object-contain opacity-0 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                    />
                  )}
                </div>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default DemoVariant;