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
    <section className="bg-[#FFF3EA] px-6 md:px-12 lg:px-20 py-24">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <h2 className="text-[#0C093F] font-extrabold text-2xl md:text-3xl mb-4">
            {heading}
          </h2>
          <p className=" mt-4 md:mt-0 max-w-xl text-2xl text-[#0D0E47]">
            {tagline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Array.isArray(items) && items.map((item: any, index: number) => {
            const { hasImage, imageLocation } = getCmsImage(item);
            const url = hasImage ? imageLocation : item?.imageUrl;
            return (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition flex flex-col">
                {url && (
                  <div className="h-52 bg-gray-100 rounded-md overflow-hidden mb-6 flex items-center justify-center">
                    <img
                      src={url}
                      alt={item?.title || ""}
                      className="object-cover h-full w-full"
                    />
                  </div>
                )}

              <div className="p-6">
                {item.topics && item.topics.length > 0 && (
                  <div className="uppercase text-xs font-semibold tracking-wide text-[#0C093F] mb-2 ">
                    {item.topics.map((topic: any, i: number) => (
                      <React.Fragment key={i}>
                        {i > 0 && ", "}
                        <a href={topic.url} className="hover:text-[#86002F]">
                          {topic.name}
                        </a>
                      </React.Fragment>
                    ))}
                  </div>
                )}

                <h3 className="font-extrabold text-[#0C093F] text-base leading-snug mb-4">
                  {item?.title?.toUpperCase()}
                </h3>
                {item.buttonText && item.buttonUrl && (
                  <a
                    href={item.buttonUrl}
                    className="text-sm font-semibold text-[#0C093F] mt-auto inline-flex items-center gap-[22px] hover:underline"
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

        <div className="mt-16 text-center">
          <a
            href="/insights"
            className="bg-[#800928] text-[#FFF6EC] font-semibold text-lg md:text-xl px-10 py-4 rounded-full shadow-md hover:bg-[#0D0E47] hover:text-[#FFF6EC] inline-flex items-center gap-[44px]"
          >
            {buttonText}
            <ButtonIcon />
          </a>
        </div>
      </div>
    </section>
  );
}