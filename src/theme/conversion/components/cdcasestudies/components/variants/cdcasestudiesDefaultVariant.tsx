import React from "react";
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps";
import { getCmsImage } from "@conversiondigital/headless-basics-data/src/cms/tools/multiCmsImageTools";

const DefaultVariant: React.FC<StandardComponentProps> = ({ matchingData }) => {
  const title = matchingData?.title || "Our Case Studies";
  const subtitle = matchingData?.subtitle || "Here are some success stories from our clients";
  const items = matchingData?.items || [];

  return (
    <section id="cdcasestudies-default" className="bg-white text-[#0D0E47] py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{title}</h2>
          <p className="text-lg text-gray-600">{subtitle}</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Array.isArray(items) &&
            items.map((item: any, index: number) => {
              // Attempt to get an image if item has an image object, else item.imageUrl
              const { hasImage, imageLocation } = getCmsImage(item);
              const finalImage = hasImage ? imageLocation : item?.imageUrl;

              return (
                <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow">
                  {finalImage && (
                    <img
                      src={finalImage}
                      alt={item.title || "Case Study"}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-5 flex flex-col gap-2">
                    <h3 className="text-xl font-semibold text-[#0D0E47]">
                      {item?.title || "Untitled Case"}
                    </h3>
                    <p className="text-sm text-gray-700">
                      {item?.description || "No description provided"}
                    </p>
                    {item?.link && (
                      <a
                        href={item.link}
                        className="mt-3 inline-block text-[#0D0E47] underline hover:text-blue-600"
                      >
                        Read more
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default DefaultVariant;
