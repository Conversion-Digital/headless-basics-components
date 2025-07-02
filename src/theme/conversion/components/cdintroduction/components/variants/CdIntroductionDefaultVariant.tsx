import React from 'react';
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps";
import {toHTML} from '@portabletext/to-html'

const CdIntroductionDefaultVariant: React.FC<StandardComponentProps> = ({ matchingData }) => {
  const title = matchingData?.title || '';
  const content = matchingData?.richtextRaw || '';

  return (
    <section className="bg-[white] px-6 md:px-12 lg:px-20 py-16" data-testid="cdintroduction">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-[40%_60%] grid-cols-1 pt-[60px] gap-[24px]">
          <h2 className="text-primary-bg md:text-[48px] text-[32px] mb-0 pr-70px font-staatliches">{title}</h2>
          <div 
            className={`contentIntroductionWrapper text-primary-bg text-[18px] mb-0 pr-70px font-figtree leading-[36px]`}
            dangerouslySetInnerHTML={{ __html: toHTML(content) }}
          />
        </div>
      </div>
    </section>
  );
};

export default CdIntroductionDefaultVariant; 