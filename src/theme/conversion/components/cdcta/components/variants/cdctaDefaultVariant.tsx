import React from "react";
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps";
import { getCmsImage } from "@conversiondigital/headless-basics-data/src/cms/tools/multiCmsImageTools";
import { buttonIcon as ButtonIcon } from "../../../../styles/icons/icons";

const DefaultVariant: React.FC<StandardComponentProps> = ({
  matchingData
}) => {
  const { hasImage, imageLocation, altText } = getCmsImage(matchingData);
  const title = matchingData?.title || "Empower Your Business";
  const subtitle = matchingData?.subtitle || "Drive conversions with our solution";
  const buttonLabel = matchingData?.buttonLabel || "Get Started";
  const buttonUrl = matchingData?.buttonUrl || "#";

  return (
    <section className="bg-[#86002F] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-32 text-center text-[#FFF3EA] px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight uppercase mb-6 sm:mb-8 md:mb-10 leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-10 text-[#FFF3EA] opacity-90">
            {subtitle}
          </p>
        )}
        <a 
          href={buttonUrl} 
          className="bg-[#FFF3EA] text-[#0C093F] font-semibold text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full shadow-md hover:shadow-lg hover:scale-105 hover:bg-[#0D0E47] hover:text-[#FFF6EC] inline-flex items-center gap-4 sm:gap-[44px] transition-all duration-300"
        >
          {buttonLabel}
          <ButtonIcon/>
        </a>
      </div>
    </section>
  );
};

export default DefaultVariant;