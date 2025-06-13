import React from 'react';
import CdservicestatsDefaultVariant from './variants/cdservicestatsDefaultVariant';
import { ServiceStatsData } from '../../../mockData/servicePageMockData';
import { IndividualComponentProps } from '@conversiondigital/headless-basics-data/src/interfaces';

export interface CdservicestatsProps {
  componentInformation?: IndividualComponentProps;
  data?: ServiceStatsData;
  variant?: 'default';
}

const Cdservicestats: React.FC<CdservicestatsProps> = ({ 
  componentInformation,
  data, 
  variant = 'default' 
}) => {
  // Get data from componentInformation if available (for CMS integration)
  const componentData = componentInformation?.props || {};
  
  // If using componentInformation, extract the needed props
  const statsData: ServiceStatsData = {
    stats: componentData.stats || (data ? data.stats : [])
  };
  
  // If no data is provided, return null
  if (!statsData.stats || statsData.stats.length === 0) {
    return null;
  }

  // Render the appropriate variant
  switch (variant) {
    case 'default':
    default:
      return <CdservicestatsDefaultVariant data={statsData} />;
  }
};

export default Cdservicestats; 