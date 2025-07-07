"use client"
import React, { useState, useMemo } from "react";
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps";
import { getCmsImage } from "@conversiondigital/headless-basics-data/src/cms/tools/multiCmsImageTools";

export default function OurWorkVariant(props: StandardComponentProps) {
  console.log('DEBUG: OurWorkVariant props:', props);
  
  const { matchingData } = props;
  console.log('DEBUG: matchingData:', matchingData);
  
  const title = matchingData?.title?.toUpperCase();
  const subtitle = matchingData?.subtitle;
  const topics = matchingData?.topics || [];
  const items = matchingData?.items || [];
  const button = matchingData?.button || {};
  
  console.log('DEBUG: Extracted data:');
  console.log('- title:', title);
  console.log('- subtitle:', subtitle);
  console.log('- topics:', topics);
  console.log('- items:', items);
  console.log('- button:', button);

  // State for active filter
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Use topics from main schema
  const availableTopics = topics;

  // Filter case studies based on active filter
  const filteredItems = useMemo(() => {
    console.log('DEBUG: Filtering - activeFilter:', activeFilter);
    console.log('DEBUG: Filtering - items:', items);
    
    if (activeFilter === 'all') {
      return items;
    }

    const filtered = items.filter((item: any) => {
      const itemTopics = item?.topics || [];
      console.log('DEBUG: Item topics:', itemTopics, 'for item:', item?.title);
      
      const matches = itemTopics.some((topic: string) => {
        const match = topic?.toLowerCase().trim() === activeFilter?.toLowerCase().trim();
        console.log('DEBUG: Comparing:', topic, 'with', activeFilter, 'match:', match);
        return match;
      });
      
      console.log('DEBUG: Item matches filter:', matches);
      return matches;
    });
    
    console.log('DEBUG: Filtered items:', filtered);
    return filtered;
  }, [items, activeFilter]);

  const handleFilterClick = (topic: string) => {
    console.log('DEBUG: handleFilterClick called with topic:', topic);
    setActiveFilter(topic);
    console.log('DEBUG: activeFilter set to:', topic);
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

        {availableTopics && availableTopics.length > 0 && (
          <div className="mb-16">
            <div className="flex flex-wrap gap-4 mb-4">
              <button
                onClick={() => handleFilterClick('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === 'all'
                    ? 'bg-[#FF6B35] text-white shadow-lg'
                    : 'bg-[#fff6ec] text-[#0C093F] hover:bg-[#FF6B35]/10'
                }`}
              >
                All ({items.length})
              </button>
            {availableTopics.map((topic: string, index: number) => {
              // Count items that match this topic (case-insensitive)
              const matchingCount = items.filter((item: any) => 
                item?.topics?.some((itemTopic: string) => 
                  itemTopic?.toLowerCase().trim() === topic?.toLowerCase().trim()
                )
              ).length;

              return (
                <button
                  key={index}
                  onClick={() => handleFilterClick(topic)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === topic
                      ? 'bg-[#FF6B35] text-white shadow-lg'
                      : 'bg-[#fff6ec] text-[#0C093F] hover:bg-[#FF6B35]/10'
                  }`}
                >
                  {topic} ({matchingCount})
                </button>
              );
            })}
            </div>
          </div>
        )}

        {activeFilter !== 'all' && filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#0C093F] text-lg mb-4">No case studies found for topic "{activeFilter}"</p>
            <button
              onClick={() => handleFilterClick('all')}
              className="px-6 py-3 bg-[#FF6B35] text-white rounded-full hover:bg-[#FF6B35]/90 transition"
            >
              Show All Case Studies
            </button>
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