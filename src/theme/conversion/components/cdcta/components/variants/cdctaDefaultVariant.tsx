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
    <section className="bg-[#86002F] py-32 text-center text-[#FFF3EA]">
      <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight uppercase mb-10">
        {title}
      </h2>
      <a href={buttonUrl} className="bg-[#FFF3EA] text-[#0C093F] font-semibold text-lg md:text-xl px-10 py-4 rounded-full shadow-md hover:shadow-lg hover:scale-105 hover:bg-[#0D0E47] hover:text-[#FFF6EC] inline-flex items-center gap-[44px]">
        {buttonLabel}
      <ButtonIcon/>
      </a>
    </section>
  );
};

export default DefaultVariant;