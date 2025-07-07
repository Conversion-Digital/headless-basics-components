import React from "react";
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps";

interface PartnerItem {
  name: string;
  url?: string;
  inactiveLogo?: any;
  activeLogo?: any;
}

interface CdpartnersDefaultVariantProps extends StandardComponentProps {
  matchingData: {
    title?: string;
    subtitle?: string;
    partnerLogos?: PartnerItem[];
  };
}

const CdpartnersDefaultVariant: React.FC<CdpartnersDefaultVariantProps> = (props) => {
  const { matchingData } = props;
  const title = matchingData?.title || "OUR PARTNERS";
  const subtitle = matchingData?.subtitle;
  const partnerLogos = matchingData?.partnerLogos || [];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          {title && (
            <h2 className="text-3xl md:text-3xl font-bold text-[#0D0E47] mb-4">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
          <div className="w-full h-0.5 bg-gray-300"></div>
        </div>

        {/* Partners Grid */}
        {partnerLogos.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
            {partnerLogos.map((partner: PartnerItem, index: number) => (
              <div
                key={index}
                className="group flex items-center justify-center p-4"
              >
                {partner.url ? (
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                  >
                    <div className="relative w-full h-16 flex items-center justify-center">
                      {/* Inactive Logo */}
                      {partner.inactiveLogo && (
                        <img
                          src={partner.inactiveLogo.asset?.url || partner.inactiveLogo}
                          alt={`${partner.name} logo`}
                          className="absolute inset-0 w-full h-16 object-contain filter grayscale opacity-70 group-hover:opacity-0 transition-opacity duration-300 ease-in-out"
                        />
                      )}
                      
                      {/* Active Logo */}
                      {partner.activeLogo && (
                        <img
                          src={partner.activeLogo.asset?.url || partner.activeLogo}
                          alt={`${partner.name} logo`}
                          className="absolute inset-0 w-full h-16 object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                        />
                      )}
                      
                      {/* Fallback if only inactive logo exists */}
                      {partner.inactiveLogo && !partner.activeLogo && (
                        <img
                          src={partner.inactiveLogo.asset?.url || partner.inactiveLogo}
                          alt={`${partner.name} logo`}
                          className="absolute inset-0 w-full h-16 object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                        />
                      )}
                    </div>
                  </a>
                ) : (
                  <div className="relative w-full h-16 flex items-center justify-center">
                    {/* Inactive Logo */}
                    {partner.inactiveLogo && (
                      <img
                        src={partner.inactiveLogo.asset?.url || partner.inactiveLogo}
                        alt={`${partner.name} logo`}
                        className="absolute inset-0 w-full h-16 object-contain filter grayscale opacity-70 group-hover:opacity-0 transition-opacity duration-300 ease-in-out"
                      />
                    )}
                    
                    {/* Active Logo */}
                    {partner.activeLogo && (
                      <img
                        src={partner.activeLogo.asset?.url || partner.activeLogo}
                        alt={`${partner.name} logo`}
                        className="absolute inset-0 w-full h-16 object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                      />
                    )}
                    
                    {/* Fallback if only inactive logo exists */}
                    {partner.inactiveLogo && !partner.activeLogo && (
                      <img
                        src={partner.inactiveLogo.asset?.url || partner.inactiveLogo}
                        alt={`${partner.name} logo`}
                        className="absolute inset-0 w-full h-16 object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                      />
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default CdpartnersDefaultVariant;