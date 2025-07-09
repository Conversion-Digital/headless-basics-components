import React from "react";
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps";
import { getCmsImage } from "@conversiondigital/headless-basics-data/src/cms/tools/multiCmsImageTools";
import { buttonIcon as ButtonIcon } from "../../../../styles/icons/icons";

export default function DefaultVariant(props: StandardComponentProps) {
  const { matchingData } = props;
  const heading = matchingData?.heading?.toUpperCase() || "Insights & Perspectives";
  const tagline = matchingData?.tagline || "Read the latest insights and marketing trends, as they are happening, from our team of digital experts here at Conversion Digital.";
  const items = matchingData?.items || [];
  const buttonText = matchingData?.buttonText || "View all insights";

  return (
    <section className="bg-[#FFF3EA] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 sm:mb-10 md:mb-12 text-center lg:text-left">
          <h2 className="text-[#0C093F] font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 lg:mb-0">
            {heading}
          </h2>
          <p className="max-w-xl text-base sm:text-lg md:text-xl lg:text-2xl text-[#0D0E47] leading-relaxed">
            {tagline}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {Array.isArray(items) && items.map((item: any, index: number) => {
            const { hasImage, imageLocation } = getCmsImage(item);
            const url = hasImage ? imageLocation : item?.imageUrl;
            return (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
                {url && (
                  <div className="h-40 sm:h-48 md:h-52 bg-gray-100 rounded-t-xl overflow-hidden flex items-center justify-center">
                    <img
                      src={url}
                      alt={item?.title || ""}
                      className="object-cover h-full w-full"
                    />
                  </div>
                )}

                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  {item.topics && item.topics.length > 0 && (
                    <div className="uppercase text-xs font-semibold tracking-wide text-[#0C093F] mb-2">
                      {item.topics.map((topic: any, i: number) => (
                        <React.Fragment key={i}>
                          {i > 0 && ", "}
                          <a href={topic.url} className="hover:text-[#86002F] transition-colors duration-300">
                            {topic.name}
                          </a>
                        </React.Fragment>
                      ))}
                    </div>
                  )}

                  <h3 className="font-extrabold text-[#0C093F] text-sm sm:text-base md:text-lg leading-snug mb-3 sm:mb-4 flex-grow">
                    {item?.title?.toUpperCase()}
                  </h3>
                  {item.buttonText && item.buttonUrl && (
                    <a
                      href={item.buttonUrl}
                      className="text-xs sm:text-sm font-semibold text-[#0C093F] mt-auto inline-flex items-center gap-2 sm:gap-[22px] hover:underline transition-all duration-300"
                    >
                      {item.buttonText} 
                      <ButtonIcon />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 sm:mt-12 md:mt-16 text-center">
          <a
            href="/insights"
            className="bg-[#800928] text-[#FFF6EC] font-semibold text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full shadow-md hover:bg-[#0D0E47] hover:text-[#FFF6EC] inline-flex items-center gap-4 sm:gap-[44px] transition-all duration-300"
          >
            {buttonText}
            <ButtonIcon />
          </a>
        </div>
      </div>
    </section>
  );
}