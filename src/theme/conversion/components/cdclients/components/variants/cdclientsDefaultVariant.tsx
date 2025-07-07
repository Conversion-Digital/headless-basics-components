import React from "react";
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps";
import { getCmsImage } from "@conversiondigital/headless-basics-data/src/cms/tools/multiCmsImageTools";
import { buttonIcon as ButtonIcon } from "../../../../styles/icons/icons";
import Link from "next/link";

interface ClientItem {
  name: string;
  link?: string;
  inactiveLogo?: any;
  activeLogo?: any;
}

interface CdclientsDefaultVariantProps extends StandardComponentProps {
  matchingData: {
    title?: string;
    subtitle?: string;
    clientsList?: ClientItem[];
    buttonText?: string;
    buttonUrl?: string;
  };
}

const CdclientsDefaultVariant: React.FC<CdclientsDefaultVariantProps> = (props) => {
  const { matchingData } = props;
  const title = matchingData?.title?.toUpperCase() || "OUR CLIENTS";
  const subtitle = matchingData?.subtitle;
  const clientsList = matchingData?.clientsList || [];
  const buttonText = matchingData?.buttonText;
  const buttonUrl = matchingData?.buttonUrl;

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
      

        {/* Clients Grid */}
        {clientsList.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
            {clientsList.map((client, index) => (
              <div
                key={index}
                className="group flex items-center justify-center p-4"
              >
                {client.link ? (
                  <a
                    href={client.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                  >
                    <div className="relative w-full h-16 flex items-center justify-center">
                      {/* Inactive Logo */}
                      {client.inactiveLogo && (
                        <img
                          src={client.inactiveLogo.asset?.url || client.inactiveLogo}
                          alt={`${client.name} logo`}
                          className="absolute inset-0 w-full h-16 object-contain filter grayscale opacity-70 group-hover:opacity-0 transition-all duration-300 ease-in-out"
                        />
                      )}
                      
                      {/* Active Logo */}
                      {client.activeLogo && (
                        <img
                          src={client.activeLogo.asset?.url || client.activeLogo}
                          alt={`${client.name} logo`}
                          className="absolute inset-0 w-full h-16 object-contain opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
                        />
                      )}
                      
                      {/* Fallback if only inactive logo exists */}
                      {client.inactiveLogo && !client.activeLogo && (
                        <img
                          src={client.inactiveLogo.asset?.url || client.inactiveLogo}
                          alt={`${client.name} logo`}
                          className="absolute inset-0 w-full h-16 object-contain opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
                        />
                      )}
                    </div>
                  </a>
                ) : (
                  <div className="relative w-full h-16 flex items-center justify-center">
                    {/* Inactive Logo */}
                    {client.inactiveLogo && (
                      <img
                        src={client.inactiveLogo.asset?.url || client.inactiveLogo}
                        alt={`${client.name} logo`}
                        className="absolute inset-0 w-full h-16 object-contain filter grayscale opacity-70 group-hover:opacity-0 transition-all duration-300 ease-in-out"
                      />
                    )}
                    
                    {/* Active Logo */}
                    {client.activeLogo && (
                      <img
                        src={client.activeLogo.asset?.url || client.activeLogo}
                        alt={`${client.name} logo`}
                        className="absolute inset-0 w-full h-16 object-contain opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
                      />
                    )}
                    
                    {/* Fallback if only inactive logo exists */}
                    {client.inactiveLogo && !client.activeLogo && (
                      <img
                        src={client.inactiveLogo.asset?.url || client.inactiveLogo}
                        alt={`${client.name} logo`}
                        className="absolute inset-0 w-full h-16 object-contain opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
                      />
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Button */}
        {buttonText && buttonUrl && (
          <div className="text-center">
            <Link
              href={buttonUrl}
              className="bg-[#800928] text-[#FFF6EC] font-semibold text-lg md:text-xl px-10 py-4 rounded-full hover:bg-[#0D0E47] hover:text-[#FFF6EC] inline-flex items-center gap-[44px]"
            >
              {buttonText}
              <ButtonIcon/>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default CdclientsDefaultVariant;
