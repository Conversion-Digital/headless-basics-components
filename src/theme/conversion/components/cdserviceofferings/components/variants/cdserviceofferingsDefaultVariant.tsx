"use client"
import React, { useState, useEffect } from 'react';
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps";

interface Offering {
  title: string;
  icon: string;
  id: {
    current: string;
  };
}

interface Service {
  id: string;
  title: string;
  content: string;
}

const CdserviceofferingsDefaultVariant: React.FC<StandardComponentProps> = ({ matchingData }) => {
  const title = matchingData?.title || '';
  const intro = matchingData?.intro || '';
  const offerings = matchingData?.offerings || [];
  const services = matchingData?.services || [];
  
  const [activeServiceId, setActiveServiceId] = useState<string | undefined>(undefined);
  const [isVisible, setIsVisible] = useState(true);
  
  const getIdValue = (offering: Offering) => offering.id?.current || '';
  
  const currentService = services.find((service: Service) => service.id === activeServiceId);
  
  useEffect(() => {
    if (!activeServiceId && offerings.length > 0) {
      setActiveServiceId(getIdValue(offerings[0]) || '1');
    }
  }, [offerings, activeServiceId]);
  
  const handleServiceClick = (serviceId: string, index: number) => {
    if (serviceId === activeServiceId) return;
    
    setIsVisible(false);
    
    setTimeout(() => {
      setActiveServiceId(serviceId || index.toString());
      setIsVisible(true);
    }, 300);
  };
  
  return (
    <section className="bg-body-color px-6 md:px-12 lg:px-20 py-16">
      <div className="max-w-screen-xl mx-auto md:py-[100px] py-[40px]">
        <div className="w-full">
          <div className={"grid md:grid-cols-[40%_60%] grid-cols-1 gap-[24px]"}>
            <h2 className={"font-staatliches font-[600] md:text-[48px] text-[32px] text-[white] md:mb-0 mb-6"}>{title}</h2>
            <p className={"font-figtree md:text-[21px] text-[18px] leading-[36px] text-[white] font-[500]"}>{intro}</p>
          </div>
          <div className={"grid md:grid-cols-[40%_60%] grid-cols-1 mt-[60px] gap-[24px]"}>
            <div className={"bg-[rgba(76,100,68,0.2)] h-fit rounded-[0.625rem] md:max-w-[425px] max-w-[325px] mx-auto md:mx-0"}>
              {offerings.map((offering: Offering, index: number) => {
                const id = getIdValue(offering);
                return (
                  <div 
                    key={id || `offering-${index}`}
                    className={`${id === activeServiceId ? "bg-[white] rounded-[10px]" : ""} cursor-pointer flex justify-between items-center py-[24px] pl-[24px] pr-[44px]`}
                    onClick={() => handleServiceClick(id, index + 1)} 
                    role="button"
                    tabIndex={0}
                    aria-pressed={id === activeServiceId}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        handleServiceClick(id, index + 1);
                      }
                    }}
                  >
                    <h3 className={`font-figtree font-[700] md:text-[21px] text-[18px] ${id === activeServiceId ? "text-body-color" : "text-[white]"}`}>{offering.title}</h3>
                    <svg className="fill-primary" width="8" height="11" viewBox="0 0 8 11">
                      <path fill={id === activeServiceId ? "#0d0e47" : "white"} d="M7.57029 5.56935L1.63533 10.0206C1.37163 10.2183 0.996094 10.0296 0.996094 9.7L0.996094 0.8C0.996094 0.470382 1.37163 0.281655 1.63533 0.479426L7.5703 4.93065C7.78363 5.09065 7.78363 5.40935 7.57029 5.56935Z"></path>
                    </svg>
                  </div>
                );
              })}
            </div>
            <div data-testid="cdservicedetail" className="md:mt-0 mt-10">
              <div>
                  <div 
                    className={`${isVisible ? 'opacity-100 transition-opacity duration-300' : 'opacity-0 transition-opacity duration-300'}`}
                  >
                     <div 
                      className={`contentServiceOfferingsWrapper`}
                      dangerouslySetInnerHTML={{ __html: currentService?.content || '' }}
                    />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CdserviceofferingsDefaultVariant; 