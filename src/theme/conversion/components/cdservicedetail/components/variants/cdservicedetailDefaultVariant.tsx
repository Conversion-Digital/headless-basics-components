"use client"
import React, { useState, useEffect } from 'react';
import { ServiceDetailData, serviceDetailMockData, getMockOrRealData } from '../../../../mockData/servicePageMockData';
import { 
  containerStyles,
  innerContainerStyles,
  contentContainerStyles,
  titleStyles,
  contentStyles,
  noSelectionContainerStyles,
  noSelectionTextStyles,
  subHeadingStyles,
  paragraphStyles,
  listContainerStyles
} from '../styles/cdservicedetail.styles';

interface CdservicedetailDefaultVariantProps {
  data: ServiceDetailData;
  activeServiceId?: string;
}

const CdservicedetailDefaultVariant: React.FC<CdservicedetailDefaultVariantProps> = ({ 
  data, 
  activeServiceId
}) => {
  // Use mock data if enabled, otherwise use provided data
  const displayData = getMockOrRealData(serviceDetailMockData, data);
  
  // Find the selected service
  const selectedService = displayData.services.find(service => service.id === activeServiceId);
  
  // State for animation
  const [isVisible, setIsVisible] = useState(true);
  const [currentService, setCurrentService] = useState(selectedService);
  
  // Handle service change with animation
  useEffect(() => {
    if (selectedService?.id !== currentService?.id) {
      setIsVisible(false);
      
      // After animation completes, change the content
      const timer = setTimeout(() => {
        setCurrentService(selectedService);
        setIsVisible(true);
      }, 300); // Match this with your CSS transition duration
      
      return () => clearTimeout(timer);
    }
  }, [selectedService, currentService]);
  
  // Chỉnh sửa CSS cho phần tử HTML từ CMS
  const processContent = (htmlContent: string) => {
    // Đây chỉ là biện pháp tạm thời để demo - trong thực tế sẽ cần xử lý HTML một cách an toàn hơn
    return htmlContent
      .replace(/<h3/g, `<h3 class="${subHeadingStyles}"`)
      .replace(/<p>/g, `<p class="${paragraphStyles}">`)
      .replace(/<ul>/g, `<ul class="${listContainerStyles}">`);
  };
  
  // If no service is selected, show a message
  if (!activeServiceId || !selectedService) {
    return (
      <section className={containerStyles} data-testid="cdservicedetail">
        <div className={innerContainerStyles}>
          <div className={noSelectionContainerStyles}>
            <p className={noSelectionTextStyles}>
              Please select a service to view details
            </p>
          </div>
        </div>
      </section>
    );
  }
  
  return (
    <section className={containerStyles} data-testid="cdservicedetail">
      <div className={innerContainerStyles}>
        <div 
          className={`${contentContainerStyles} ${isVisible ? 'opacity-100 transition-opacity duration-300' : 'opacity-0 transition-opacity duration-300'}`}
        >
          {currentService && (
            <>
              <h3 className={titleStyles}>{currentService.title}</h3>
              <div 
                className={contentStyles}
                dangerouslySetInnerHTML={{ 
                  __html: processContent(currentService.content) 
                }}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default CdservicedetailDefaultVariant; 