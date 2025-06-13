import React from 'react';
import { ServiceOfferingsData, serviceOfferingsMockData, getMockOrRealData } from '../../../../mockData/servicePageMockData';
import { 
  containerStyles,
  innerContainerStyles,
  titleStyles,
  introTextStyles,
  gridContainerStyles,
  cardStyles,
  cardActiveStyles,
  iconContainerStyles,
  iconStyles,
  cardTitleStyles,
  headingContainer
} from '../styles/cdserviceofferings.styles';

interface CdserviceofferingsDefaultVariantProps {
  data: ServiceOfferingsData;
  activeServiceId?: string;
  onServiceSelect?: (serviceId: string) => void;
}

const CdserviceofferingsDefaultVariant: React.FC<CdserviceofferingsDefaultVariantProps> = ({ 
  data, 
  activeServiceId,
  onServiceSelect 
}) => {
  // Use mock data if enabled, otherwise use provided data
  const displayData = getMockOrRealData(serviceOfferingsMockData, data);
  
  // Handle service selection
  const handleServiceClick = (serviceId: string) => {
    if (onServiceSelect) {
      onServiceSelect(serviceId);
    }
  };
  
  // Simple icon mapping for demo purposes
  const getIconElement = (iconName: string) => {
    // Icon placeholders - in production, use a proper icon library
    const iconMap: {[key: string]: string} = {
      'globe': '🌎',
      'map-pin': '📍',
      'google': 'G',
      'alert-triangle': '⚠️',
      'mic': '🎤',
      'shield': '🛡️'
    };
    
    return (
      <div className={iconStyles}>
        {iconMap[iconName] || iconName}
      </div>
    );
  };
  
  return (
    <section className={containerStyles} data-testid="cdserviceofferings">
      <div className={innerContainerStyles}>
        <div className={headingContainer}>
          <h2 className={titleStyles}>{displayData.title}</h2>
          <p className={introTextStyles}>{displayData.intro}</p>
        </div>
        
        <div className={gridContainerStyles}>
          {displayData.offerings.map((offering) => (
            <div 
              key={offering.id}
              className={offering.id === activeServiceId ? cardActiveStyles : cardStyles}
              onClick={() => handleServiceClick(offering.id)}
              role="button"
              tabIndex={0}
              aria-pressed={offering.id === activeServiceId}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleServiceClick(offering.id);
                }
              }}
            >
              <div className={iconContainerStyles}>
                {getIconElement(offering.icon)}
              </div>
              <h3 className={cardTitleStyles}>{offering.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CdserviceofferingsDefaultVariant; 