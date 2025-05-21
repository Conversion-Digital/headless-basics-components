import React from "react";
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps";
import { getCmsImage } from "@conversiondigital/headless-basics-data/src/cms/tools/multiCmsImageTools";

const DefaultVariant: React.FC<StandardComponentProps> = ({ matchingData }) => {
  const title = matchingData?.title || "Our Partners";
  const subtitle = matchingData?.subtitle || "We work with leading technology providers.";
  const partners = matchingData?.partnerLogos || [];

  return (
    <section id="cdpartners-default" className="bg-white text-[#0D0E47] py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{title}</h2>
          <p className="max-w-3xl text-gray-600">{subtitle}</p>
        </div>
        <div className="grid gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {Array.isArray(partners) && partners.map((partner: any, index: number) => {
            // Attempt to get an image if item has an image object from cms, else partner.imageUrl
            const { hasImage, imageLocation } = getCmsImage(partner);
            const finalImgUrl = hasImage ? imageLocation : partner?.imageUrl;
            return (
              <div key={index} className="flex items-center justify-center">
                {finalImgUrl && (
                  <a href={partner?.link || "#"} target="_blank" rel="noopener noreferrer">
                    <img 
                      src={finalImgUrl} 
                      alt={partner?.partnerName || "Partner"} 
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