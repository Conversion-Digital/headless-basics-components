"use client";
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps";
import { CdFaqsData, FaqItem } from "../index";
import { toHTML } from "@portabletext/to-html";
import React, { useState } from "react";

interface CdFaqsDefaultVariantProps extends StandardComponentProps {
  matchingData: CdFaqsData;
}

const CdFaqsDefaultVariant: React.FC<CdFaqsDefaultVariantProps> = ({ matchingData }) => {
  const [indexActive, setIndexActive] = useState(0);

  const title = matchingData?.title || "";
  const description = matchingData?.description || "";
  const items = matchingData?.items || [];
  const uniqueId = matchingData?._key || "";

  return (
    <section className="bg-primary-bg px-6 md:px-12 lg:px-20 py-16">
      <div className="max-w-screen-xl mx-auto md:py-[100px] py-[40px]">
        <div className="w-full">
          <div className={"grid md:grid-cols-[40%_60%] grid-cols-1 gap-[24px]"}>
            <h2 className={"font-staatliches font-[600] md:text-[48px] text-[32px] text-[white] md:mb-0 mb-6"}>{title}</h2>
            <p className={"font-figtree md:text-[21px] text-[18px] leading-[36px] text-[white] font-[500]"}>{description}</p>
          </div>
          <div className={"grid md:grid-cols-[40%_60%] grid-cols-1 mt-[60px] gap-[24px]"}>
            <div className={"bg-[rgba(76,100,68,0.2)] h-fit rounded-[0.625rem] md:max-w-[425px] max-w-[325px] mx-auto md:mx-0"}>
              {items.map((item: FaqItem, index: number) => {
                return (
                  <div
                    key={`${uniqueId}-title-${index}`}
                    className={`${
                      index === indexActive ? "bg-[white] rounded-[10px]" : ""
                    } cursor-pointer flex justify-between items-center py-[24px] pl-[24px] pr-[44px]`}
                    onClick={() => setIndexActive(index)}
                    role="button"
                    tabIndex={0}
                    aria-pressed={index === indexActive}
                  >
                    <h3
                      className={`font-figtree font-[700] md:text-[21px] text-[18px] ${
                        index === indexActive ? "text-primary-bg" : "text-[white]"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <svg className="fill-primary" width="8" height="11" viewBox="0 0 8 11">
                      <path
                        fill={index === indexActive ? "#0d0e47" : "white"}
                        d="M7.57029 5.56935L1.63533 10.0206C1.37163 10.2183 0.996094 10.0296 0.996094 9.7L0.996094 0.8C0.996094 0.470382 1.37163 0.281655 1.63533 0.479426L7.5703 4.93065C7.78363 5.09065 7.78363 5.40935 7.57029 5.56935Z"
                      ></path>
                    </svg>
                  </div>
                );
              })}
            </div>
            <div data-testid="cdfaqs" className="md:mt-0 mt-10 relative">
              {items.map((item: FaqItem, index: number) => {
                return (
                  <div
                    key={`${uniqueId}-content-${index}`}
                    className={`${
                      index === indexActive ? "opacity-100 transition-opacity duration-300" : "opacity-0 transition-opacity duration-300 absolute top-0 left-0"
                    }`}
                  >
                    <div className={`contentFaqsWrapper`} dangerouslySetInnerHTML={{ __html: toHTML(item.richtextRaw) }} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CdFaqsDefaultVariant;
