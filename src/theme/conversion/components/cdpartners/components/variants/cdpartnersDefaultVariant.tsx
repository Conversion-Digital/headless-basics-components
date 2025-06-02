import React from "react";
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps";
import { getCmsImage } from "@conversiondigital/headless-basics-data/src/cms/tools/multiCmsImageTools";

export default function DefaultVariant(props: StandardComponentProps) { const { matchingData } = props;
  // Basic fields
  const title = matchingData?.title?.toUpperCase() || "OUR PARTNERS";
  const subtitle = matchingData?.subtitle || "We work with leading technology providers.";
  const partners = matchingData?.partnerLogos || [];

  return (
    <section
      id="cdpartners-default"
      className="bg-white text-[#0D0E47] py-20 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-3xl font-bold text-[#0D0E47] mb-4">{title}</h2>
          <div className="w-full h-0.5 bg-gray-300"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12">
          {Array.isArray(partners) &&
            partners.map((partner: any, index: number) => {
              const logoUrl = partner?.logo?.asset?.url;
              return (
                <div key={index} className="flex items-center justify-center h-24 md:h-32 p-4">
                  {logoUrl && (
                    <img
                      src={logoUrl}
                      alt={partner?.name || "Partner"}
                      className="object-contain max-h-16 md:max-h-20 hover:opacity-80 transition"
                    />
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}