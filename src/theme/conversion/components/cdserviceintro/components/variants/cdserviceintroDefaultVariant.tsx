import React from 'react';
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps";

const CdserviceintroDefaultVariant: React.FC<StandardComponentProps> = ({ matchingData }) => {
  const heading = matchingData?.heading || '';
  const title = matchingData?.title || '';
  const content = matchingData?.content || '';
  
  return (
    <section className="bg-[white] px-6 md:px-12 lg:px-20 py-16" data-testid="cdserviceintro">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-2 grid-cols-1 md:pb-[60px] pb-[0px]">
          <h1 className="text-body-color md:text-[72px] text-[52px] font-staatliches">{heading}</h1>
        </div>
        <div className="grid md:grid-cols-[40%_60%] grid-cols-1 pt-[60px] gap-[24px]">
          <h2 className="text-body-color md:text-[48px] text-[32px] mb-0 pr-70px font-staatliches">{title}</h2>
          <div 
            className={`contentServiceIntroWrapper text-body-color text-[18px] mb-0 pr-70px font-figtree leading-[36px]`}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </section>
  );
};

export default CdserviceintroDefaultVariant; 