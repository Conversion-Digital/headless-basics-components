import React from 'react';
import CdserviceofferingsDefaultVariant from './variants/cdserviceofferingsDefaultVariant';
import { ServiceOfferingsData } from '../../../mockData/servicePageMockData';
import { IndividualComponentProps } from '@conversiondigital/headless-basics-data/src/interfaces';

export interface CdserviceofferingsProps {
  componentInformation?: IndividualComponentProps;
  data?: ServiceOfferingsData;
  variant?: 'default';
  activeServiceId?: string;
  onServiceSelect?: (serviceId: string) => void;
}

const Cdserviceofferings: React.FC<CdserviceofferingsProps> = ({ 
  componentInformation,
  data, 
  variant = 'default',
  activeServiceId,
  onServiceSelect
}) => {
  // Get data from componentInformation if available (for CMS integration)
  const componentData = componentInformation?.data || {};
  
  // If using componentInformation, extract the needed props
  const offeringsData: ServiceOfferingsData = {
    title: componentData.title || (data ? data.title : ''),
    intro: componentData.intro || (data ? data.intro : ''),
    offerings: componentData.offerings || (data ? data.offerings : [])
  };
  
  // If no data is provided, return null
  if (!offeringsData.offerings || offeringsData.offerings.length === 0) {
    return null;
  }

  // Render the appropriate variant
  switch (variant) {
    case 'default':
    default:
      return (
        <CdserviceofferingsDefaultVariant 
          data={offeringsData} 
          activeServiceId={activeServiceId}
          onServiceSelect={onServiceSelect}
        />
      );
  }
};

export default Cdserviceofferings; 