import React from 'react';
import { ServiceIntroData } from '../../../mockData/servicePageMockData';
import { IndividualComponentProps } from '@conversiondigital/headless-basics-data/src/interfaces';
import CdserviceintroDefaultVariant from './variants/cdserviceintroDefaultVariant';

export interface CdserviceintroProps {
  componentInformation?: IndividualComponentProps;
  data?: ServiceIntroData;
  variant?: 'default';
}

const Cdserviceintro: React.FC<CdserviceintroProps> = ({ 
  componentInformation,
  data, 
  variant = 'default' 
}) => {
  // Get data from componentInformation if available (for CMS integration)
  const componentData = componentInformation?.props || {};
  
  // If using componentInformation, extract the needed props
  const introData: ServiceIntroData = {
    heading: componentData.heading || (data ? data.heading : ''),
    title: componentData.title || (data ? data.title : ''),
    content: componentData.content || (data ? data.content : '')
  };
  
  // If no data is provided, return null
  if (!introData.title && !introData.content) {
    return null;
  }

  // Render the appropriate variant
  switch (variant) {
    case 'default':
    default:
      return <CdserviceintroDefaultVariant data={introData} />;
  }
};

export default Cdserviceintro; 