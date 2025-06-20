import React from "react";
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps";
import { getCmsImage } from "@conversiondigital/headless-basics-data/src/cms/tools/multiCmsImageTools";
import { VideoPlayer } from '../VideoPlayer';

interface VideoTestimonial {
  name: string;
  position: string;
  testimonial: string;
  videoUrl: string;
}

export default function DefaultVariant(props: StandardComponentProps) {
  const { matchingData } = props;
  const title = matchingData?.title?.toUpperCase() || "CUSTOMER TESTIMONIALS";
  const testimonials = matchingData?.testimonials || [];
  const videoTitle = matchingData?.videoTitle?.toUpperCase() || "VIDEO TESTIMONIALS";
  const videoSubtitle = matchingData?.videoSubtitle || "Watch what our clients have to say";
  const videoTestimonials = matchingData?.videoTestimonials || [];

  return (
    <section id="cdtestimonials-default-variant">
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-3xl font-bold text-[#0D0E47] mb-4">{title}</h2>
            <div className="w-full h-0.5 bg-gray-300"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {Array.isArray(testimonials) &&
              testimonials.map((item: any, index: number) => {
                const imageUrl = item?.image?.asset?.url;
                return (
                  <div key={index} className="bg-white rounded-xl p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative">
                    <div className="absolute top-6 left-8 text-6xl text-gray-200 font-serif leading-none">"</div>
                    <div className="absolute bottom-6 right-8 text-6xl text-gray-200 font-serif leading-none">"</div>
                    
                    <div className="relative z-10">
                      <p className="text-lg text-gray-700 leading-relaxed mb-8">{item?.testimonial || "Client testimonial"}</p>
                      
                      <div className="border-t-2 border-gray-100 pt-6">
                        <h4 className="text-xl font-semibold text-blue-900 mb-1">{item?.name || "Client Name"}</h4>
                        <p className="text-sm text-gray-500 uppercase tracking-wide">{item?.position || "Position"}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      {videoTestimonials.length > 0 && (
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
              <h2 className="text-3xl md:text-3xl font-bold text-[#0D0E47] mb-6 md:mb-0">{videoTitle}</h2>
              <div className="max-w-xl">
                <p className="text-2xl text-[#0D0E47]">{videoSubtitle}</p>
              </div>
            </div>

            {/* Spotlight Video */}
            {videoTestimonials[0] && (
              <div className="mb-16">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-semibold text-[#0D0E47] mb-3">{videoTestimonials[0].name?.toUpperCase()}</h3>
                    <p className="mb-4 text-2xl font-semibold text-[#0D0E47]">{videoTestimonials[0].position?.toUpperCase()}</p>
                    <p className="text-[#0D0E47]">{videoTestimonials[0].testimonial}</p>
                  </div>
                  <div className="md:w-1/2">
                    <VideoPlayer 
                      url={videoTestimonials[0].videoUrl} 
                      title={`${videoTestimonials[0].name}'s Testimonial`}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* More Videos */}
            {videoTestimonials.length > 1 && (
              <>
                <h3 className="text-2xl font-semibold text-[#0D0E47] mb-8">More Videos</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {videoTestimonials.slice(1).map((testimonial: VideoTestimonial, index: number) => ( 
                    <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                      {testimonial?.videoUrl && (
                        <VideoPlayer 
                          url={testimonial.videoUrl} 
                          title={`${testimonial.name}'s Testimonial`}
                        />
                      )}
                      <div className="p-6">
                        <h4 className="text-xl font-semibold text-[#0D0E47] mb-2">{testimonial?.name}</h4>
                        <p className="text-gray-600 text-sm">{testimonial?.position}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
