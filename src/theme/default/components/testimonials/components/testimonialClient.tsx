"use client"

import { cn, getLogger } from "@conversiondigital/cd-headless-data";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import React, { useRef } from "react";
import Slider from 'react-slick';

const log = getLogger("ui-base.cms.heartcore.content.TestimonialClient");

interface Testimonial {
  content: {
    testimonialTitle: string;
    testimonialDescription: string;
    authorName: string;
  };
}

interface TestimonialClientProps {
  pageTestimonial: Testimonial[];
}

export default function TestimonialClient({ pageTestimonial }: TestimonialClientProps) {

  const sliderRef = useRef<Slider | null>(null);

  const [currentIndex, setCurrentIndex] = React.useState(0)

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    beforeChange: (_: any, next: number) => {
      setCurrentIndex(next)
    },
  }

  const handleNextClick = () => {
    if(sliderRef.current === null) return;
    sliderRef.current.slickNext();
  }
  //
  const handlePrevClick = () => {
    if(sliderRef.current === null) return;
    sliderRef.current.slickPrev()
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-4" data-carousel-item>
        <Slider {...settings} ref={sliderRef}>
          {pageTestimonial.map((testimonial, index) => (
            <div key={index} className="px-4 rounded-lg text-center">
              <span className="mb-10 text-center inline-block">
                <svg
                  width="28"
                  height="22"
                  viewBox="0 0 28 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.26875 21.88L6.42875 0.999996H13.7888L11.3088 21.88H0.26875ZM14.4288 21.72L20.5888 0.839998H27.9488L25.4688 21.72H14.4288Z"
                    fill="#FAA634"
                  />
                </svg>
              </span>
              {/*<h3 className="text-xl font-semibold mb-2">{testimonial.content.testimonialTitle}</h3>*/}
              <div
                className="mb-4 md:mb-8 max-w-4xl text-sm leading-[21px] md:text-base mx-auto font-normal text-my-black"
                dangerouslySetInnerHTML={{
                  __html: testimonial?.content?.testimonialDescription,
                }}
              ></div>
              <p className="text-base font-extrabold text-my-black">
                - {testimonial.content.authorName}
              </p>
            </div>
          ))}
        </Slider>
        <div className="mt-6 flex w-full items-center justify-around sm:mt-12">
          <button
            className="mr-2 rounded-full bg-my-yellow hover:bg-my-black p-1 text-white [&:hover>svg]:fill-white transition"
            onClick={handlePrevClick}
          >
            <ChevronLeftIcon className="md:h-10 md:w-10 w-8 h-8" />
          </button>

          <div className="flex">
            {pageTestimonial.map((testimonial, index) => (
              <button
                key={index}
                className={cn("mx-1 h-3.5 w-3.5 rounded-full", {
                  "bg-neutral-700 border border-neutral-700 border-solid mx-3":
                    index === currentIndex,
                  "border border-neutral-700 border-solid mx-3":
                    index !== currentIndex,
                })}
                onClick={() => sliderRef?.current?.slickGoTo(index)}
              />
            ))}
          </div>

          <button
            className="ml-2 rounded-full bg-my-yellow hover:bg-my-black p-1 text-white [&:hover>svg]:fill-white transition"
            onClick={handleNextClick}
          >
            <ChevronRightIcon className="md:h-10 md:w-10 w-8 h-8" />
          </button>
        </div>
      </div>
    </>
  );
}
