import React from 'react';
import { ServiceStatsData, serviceStatsMockData, getMockOrRealData } from '../../../../mockData/servicePageMockData';

interface CdservicestatsDefaultVariantProps {
  data: ServiceStatsData;
}

const CdservicestatsDefaultVariant: React.FC<CdservicestatsDefaultVariantProps> = ({ data }) => {
  const displayData = getMockOrRealData(serviceStatsMockData, data);
  
  return (
    <section className={``} data-testid="cdservicestats">
        <div className={"grid md:grid-cols-4 grid-cols-1 gap-[24px]"}>
          {displayData.stats.map((stat, index) => (
            <div key={index}>
              <div className={"text-left text-body-color text-[48px] font-staatliches font-[500] mb-[16px]"}>{stat.value}</div>
              <div className={"text-left text-body-color text-[24px] font-figtree leading-[36px] max-w-[300px]"}>{stat.description}</div>
            </div>
          ))}
        </div>
    </section>
  );
};

export default CdservicestatsDefaultVariant; 