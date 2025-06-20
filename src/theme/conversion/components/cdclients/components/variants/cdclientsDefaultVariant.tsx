import React from "react";
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps";
import { getCmsImage } from "@conversiondigital/headless-basics-data/src/cms/tools/multiCmsImageTools";
import { buttonIcon as ButtonIcon } from "../../../../styles/icons/icons";


export default function DefaultVariant(props: StandardComponentProps) { 
  const { matchingData } = props;
  const title = matchingData?.title?.toUpperCase() || "OUR CLIENTS";
  const clients = matchingData?.clientsList || [];
  const buttonText = matchingData?.buttonText || "View All Clients";
  const buttonLink = matchingData?.buttonLink || "#";

  return (
    <section
      id="cdclients-default"
      className="bg-white text-[#0D0E47] py-20 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-[#0C093F] font-extrabold text-2xl !important md:text-3xl !important mb-4">{title}</h2>
          <div className="w-full h-0.5 bg-gray-300"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
          {Array.isArray(clients) &&
            clients.map((client: any, index: number) => {
              const logoUrl = client?.logo?.asset?.url;
              return (
                <div key={index} className="flex items-center justify-center h-24 md:h-32 p-4">
                  {logoUrl && (
                    <img
                      src={logoUrl}
                      alt={client?.name || "Client"}
                      className="object-contain max-h-16 md:max-h-20 hover:opacity-80 transition"
                    />
                  )}
                </div>
              );
            })}
        </div>
        <div className="flex justify-center mt-12">
          <a
            href={buttonLink}
            className="bg-[#800928] text-[#FFF6EC] font-semibold text-lg md:text-xl px-10 py-4 rounded-full hover:bg-[#0D0E47] hover:text-[#FFF6EC] inline-flex items-center gap-[44px]"
          >
            {buttonText}
            <ButtonIcon/>
          </a>
        </div>
      </div>
    </section>
  );
};
