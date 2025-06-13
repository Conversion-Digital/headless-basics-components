import React from 'react';
import { ServiceIntroData, serviceIntroMockData, getMockOrRealData } from '../../../../mockData/servicePageMockData';

interface CdserviceintroDefaultVariantProps {
  data: ServiceIntroData;
}

const CdserviceintroDefaultVariant: React.FC<CdserviceintroDefaultVariantProps> = ({ data }) => {
  // Use mock data if enabled, otherwise use provided data
  const displayData = getMockOrRealData(serviceIntroMockData, data);
  
  return (
    <section data-testid="cdserviceintro">
      <div>
        <div className="grid md:grid-cols-2 grid-cols-1 pb-[60px]">
          <h1 className="text-body-color text-[72px] font-staatliches">{displayData.heading}</h1>
        </div>
        <div className="grid md:grid-cols-[40%_60%] grid-cols-1 pt-[60px]">
          <h2 className="text-body-color text-[48px] mb-0 pr-70px font-staatliches">{displayData.title}</h2>
          <div 
            className={`contentServiceIntroWrapper text-body-color text-[18px] mb-0 pr-70px font-figtree leading-[36px]`}
            dangerouslySetInnerHTML={{ __html: displayData.content }}
          />
        </div>
      </div>
    </section>
  );
};

export default CdserviceintroDefaultVariant; 