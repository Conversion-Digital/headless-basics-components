import React from 'react';
import CdservicedetailDefaultVariant from './variants/cdservicedetailDefaultVariant';
import { ServiceDetailData } from '../../../mockData/servicePageMockData';
import { IndividualComponentProps } from '@conversiondigital/headless-basics-data/src/interfaces';

export interface CdservicedetailProps {
  componentInformation?: IndividualComponentProps;
  data?: ServiceDetailData;
  variant?: 'default';
  activeServiceId?: string;
}

const Cdservicedetail: React.FC<CdservicedetailProps> = ({ 
  componentInformation,
  data, 
  variant = 'default',
  activeServiceId
}) => {
  // Get data from componentInformation if available (for CMS integration)
  const componentData = componentInformation?.data || {};
  
  // If using componentInformation, extract the needed props
  const detailData: ServiceDetailData = {
    services: (componentData.services as { id: string; title: string; content: string; }[]) || (data ? data.services : [])
  };
  
  // If no data is provided, return null
  if (!detailData.services || detailData.services.length === 0) {
    return null;
  }

  // Render the appropriate variant
  switch (variant) {
    case 'default':
    default:
      return (
        <CdservicedetailDefaultVariant 
          data={detailData} 
          activeServiceId={activeServiceId}
        />
      );
  }
};

export default Cdservicedetail; 