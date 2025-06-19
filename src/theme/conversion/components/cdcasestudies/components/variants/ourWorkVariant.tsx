import React from "react";
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps";
import { getCmsImage } from "@conversiondigital/headless-basics-data/src/cms/tools/multiCmsImageTools";

export default function OurWorkVariant(props: StandardComponentProps) {
  const { matchingData } = props;
  const title = matchingData?.title?.toUpperCase();
  const subtitle = matchingData?.subtitle;
  const items = matchingData?.items || [];
  const button = matchingData?.button || {};

  return (
    <section className="bg-[#FFF3EA] px-6 md:px-12 lg:px-20 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
          <h2 className="text-[#0C093F] font-extrabold text-2xl md:text-3xl mb-6 md:mb-0">
            {title}
          </h2>
          <div className="max-w-xl">
            <p className="text-[#0C093F] text-2xl">
              {subtitle}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item: any, index: number) => {
            const { hasImage, imageLocation } = getCmsImage(item);
            const finalImage = hasImage ? imageLocation : item?.imageUrl;

            return (
              <div key={index} className="flex flex-col gap-6 group">
                <div className="shadow-2xl rounded-3xl overflow-hidden h-[300px] relative">
                  {finalImage && (
                    <img
                      src={finalImage}
                      alt={item?.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div>
                  {item?.title && (
                    <h5 className="text-[#0C093F] font-extrabold text-xl mb-2 group-hover:text-[#FF6B35] transition-colors duration-300">
                      {item.title}
                    </h5>
                  )}
                  {item?.description && (
                    <p className="text-[#0C093F] mb-4 line-clamp-3">
                      {item.description}
                    </p>
                  )}

                  {item?.link && (
                    <a 
                      href={item.link} 
                      className="inline-flex items-center gap-2 text-[#0C093F] font-semibold text-sm hover:text-[#FF6B35] transition-colors duration-300"
                    >
                      View case study <span className="text-lg">↗</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {button?.text && button?.link && (
          <div className="mt-12 text-center">
            <a 
              href={button.link}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0C093F] text-white rounded-full hover:bg-[#FF6B35] transition-colors duration-300"
            >
              {button.text}
            </a>
          </div>
        )}
      </div>
    </section>
  );
} 