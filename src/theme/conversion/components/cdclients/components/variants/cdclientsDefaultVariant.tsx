import React from "react";
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps";
import { getCmsImage } from "@conversiondigital/headless-basics-data/src/cms/tools/multiCmsImageTools";

const  DefaultVariant: React.FC<StandardComponentProps> = ({
  matchingData
}) => {
  // Basic fields
  const title = matchingData?.title || "Our Clients";
  const subtitle = matchingData?.subtitle || "Check out our amazing clients!";
  const clients = matchingData?.clientsList || [];

  return (
    <section
      id="cdclients-default"
      className="bg-white text-[#0D0E47] py-12 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{title}</h2>
          <p className="max-w-3xl text-gray-600">{subtitle}</p>
        </div>
        <div className="grid gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {Array.isArray(clients) &&
            clients.map((client: any, index: number) => {
              // Attempt to get an image if item has an image object from CMS, else use client.logo
              const { hasImage, imageLocation } = getCmsImage(client);
              const finalImgUrl = hasImage ? imageLocation : client?.logo;
              return (
                <div key={index} className="flex items-center justify-center">
                  {finalImgUrl && (
                    <a
                      href={client?.link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={finalImgUrl}
                        alt={client?.name || "Client"}
                        className="object-contain max-h-12 hover:opacity-80 transition"
                      />
                    </a>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default DefaultVariant; 