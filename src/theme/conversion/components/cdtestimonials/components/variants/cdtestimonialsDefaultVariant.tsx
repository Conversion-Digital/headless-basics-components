import React from "react";
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps";
import { getCmsImage } from "@conversiondigital/headless-basics-data/src/cms/tools/multiCmsImageTools";

const DefaultVariant: React.FC<StandardComponentProps> = ({ matchingData }) => {
  const title = matchingData?.title || "Customer Testimonials";
  const subtitle = matchingData?.subtitle || "What our clients say about us";
  const testimonials = matchingData?.testimonials || [];

  return (
    <section
      id="cdtestimonials-default-variant"
      className="bg-white text-[#0D0E47] py-12 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{title}</h2>
          <p className="text-lg text-gray-600">{subtitle}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Array.isArray(testimonials) &&
            testimonials.map((item: any, index: number) => {
              const logoUrl = item?.logo;
              return (
                <div
                  key={index}
                  className="bg-[#F5F5FE] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col"
                >
                  <div className="flex items-center gap-4 mb-4">
                    {logoUrl && (
                      <img
                        src={logoUrl}
                        alt={item?.clientName || "Client Logo"}
                        className="w-12 h-12 rounded object-contain"
                      />
                    )}
                    <div>
                      <h4 className="font-semibold text-xl">{item?.clientName || "Client Name"}</h4>
                      <p className="text-sm text-gray-500">
                        {item?.clientCompany || "Client Company"}
                      </p>
                    </div>
                  </div>
                  <p className="flex-grow text-gray-700 italic">"{item?.quote || "Client quote"}"</p>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default DefaultVariant;
