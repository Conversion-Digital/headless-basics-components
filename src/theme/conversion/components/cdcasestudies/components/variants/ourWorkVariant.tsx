"use client"
import React, { useState, useMemo } from "react";
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps";
import { getCmsImage } from "@conversiondigital/headless-basics-data/src/cms/tools/multiCmsImageTools";

export default function OurWorkVariant(props: StandardComponentProps) {
  const { matchingData } = props;
  const title = matchingData?.title?.toUpperCase();
  const subtitle = matchingData?.subtitle;
  const keywords = matchingData?.keywords || [];
  const items = matchingData?.items || [];
  const button = matchingData?.button || {};

  // State for active filter
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Filter case studies based on active filter
  const filteredItems = useMemo(() => {
    if (activeFilter === 'all') {
      return items;
    }

    return items.filter((item: any) => {
      const itemTopics = item?.topics || [];
      // Check if any of the item's topics match the selected keyword (case-insensitive)
      return itemTopics.some((topic: string) => 
        topic?.toLowerCase() === activeFilter?.toLowerCase()
      );
    });
  }, [items, activeFilter]);

  const handleFilterClick = (keyword: string) => {
    setActiveFilter(activeFilter === keyword ? 'all' : keyword);
  };

  return (
    <section className="bg-white px-6 md:px-12 lg:px-20 py-24">
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

        {keywords.length > 0 && (
          <div className="flex flex-wrap gap-4 mb-16">
            <button
              onClick={() => handleFilterClick('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === 'all'
                  ? 'bg-[#FF6B35] text-white'
                  : 'bg-[#fff6ec] text-[#0C093F] hover:bg-[#FF6B35]/10'
              }`}
            >
              All ({items.length})
            </button>
            {keywords.map((keyword: string, index: number) => {
              // Count items that match this keyword (case-insensitive)
              const matchingCount = items.filter((item: any) => 
                item?.topics?.some((topic: string) => 
                  topic?.toLowerCase() === keyword?.toLowerCase()
                )
              ).length;

              return (
                <button
                  key={index}
                  onClick={() => handleFilterClick(keyword)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === keyword
                      ? 'bg-[#FF6B35] text-white'
                      : 'bg-[#fff6ec] text-[#0C093F] hover:bg-[#FF6B35]/10'
                  }`}
                >
                  {keyword} ({matchingCount})
                </button>
              );
            })}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-16">
          {filteredItems.map((item: any, index: number) => {
            const { hasImage, imageLocation } = getCmsImage(item);
            const finalImage = hasImage ? imageLocation : item?.imageUrl;

            return (
              <a 
                key={index} 
                href={item?.link || "#"} 
                className="group relative h-[400px] rounded-3xl overflow-hidden shadow-2xl"
              >
                <div className="absolute inset-0">
                  <img
                    src={finalImage || "/case-studies/befitfood.jpg"}
                    alt={item?.title || "Case Study"}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/40 to-transparent " />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  {item?.topics && item.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {item.topics.map((topic: string, topicIndex: number) => (
                        <span
                          key={topicIndex}
                          className="py-3 text-white text-xs font-medium"
                        >
                          {topic.toUpperCase()}
                        </span>
                      ))}
                    </div>
                  )}
                  <h5 className="text-white font-extrabold text-2xl mb-4">{item?.title || "Be Fit Food"}</h5>
                </div>
              </a>
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
}