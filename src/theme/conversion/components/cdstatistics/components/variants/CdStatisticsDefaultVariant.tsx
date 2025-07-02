import React from 'react';
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps";

interface Stat {
  value: string;
  description: string;
}

const CdStatisticsDefaultVariant: React.FC<StandardComponentProps> = ({ matchingData }) => {
  const stats = matchingData?.stats || [];
  
  return (
    <section className={"bg-[white] px-6 md:px-12 lg:px-20 py-16"} data-testid="cdstatistics">
      <div className="max-w-screen-xl mx-auto">
        <div className={"grid md:grid-cols-4 grid-cols-1 gap-[24px]"}>
            {stats.map((stat: Stat, index: number) => (
              <div key={index}>
                <div className={"text-left text-primary-bg text-[48px] font-staatliches font-[500] mb-[16px]"}>{stat.value}</div>
                <div className={"text-left text-primary-bg text-[24px] font-figtree leading-[36px] max-w-[300px]"}>{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};

export default CdStatisticsDefaultVariant; 