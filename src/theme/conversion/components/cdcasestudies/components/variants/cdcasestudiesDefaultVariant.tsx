import React from "react";
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps";
import { getCmsImage } from "@conversiondigital/headless-basics-data/src/cms/tools/multiCmsImageTools";

export default function DefaultVariant(props: StandardComponentProps) {
  const { matchingData } = props;
  const title = matchingData?.title?.toUpperCase() || "Our Latest Work";
  const subtitle = matchingData?.subtitle || "At Conversion Digital, we thrive on achieving amazing results across all aspects of digital marketing!";
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

        <div className="grid md:grid-cols-2 gap-16">
          {items.map((item: any, index: number) => {
            const { hasImage, imageLocation } = getCmsImage(item);
            const finalImage = hasImage ? imageLocation : item?.imageUrl;

            return (
              <div key={index} className="flex flex-col gap-8">
                <div className="shadow-2xl rounded-3xl overflow-hidden h-[400px]">
                  <img
                    src={finalImage || "/case-studies/befitfood.jpg"}
                    alt={item?.title || "Case Study"}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h5 className="text-[#0C093F] font-extrabold text-xl mb-2">{item?.title || "Be Fit Food"}</h5>
                  <p className="text-[#0C093F] mb-6">
                    {item?.description || "Enhancing user journey through tailored solutions and operational excellence."}
                  </p>

                  {item?.link && (
                    <a href={item.link} className="inline-flex items-center gap-2 text-[#0C093F] font-semibold text-sm underline hover:opacity-80 transition">
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0C093F] text-white rounded-full hover:bg-opacity-90 transition"
            >
              {button.text}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

