import React from "react";

export interface HeroProps {
  item: {
    title?: string;
    heading?: string;
    subtitle?: string;
    backgroundImage?: {
      asset?: {
        url?: string;
      };
    };
    button?: {
      label?: string;
      url?: string;
      target?: string;
    };
  };
}

export const HeroComponent: React.FC<HeroProps> = ({ item }) => {
  const { title, heading, subtitle, backgroundImage, button } = item;
  
  const backgroundStyle = backgroundImage?.asset?.url 
    ? { backgroundImage: `url(${backgroundImage.asset.url})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : { backgroundColor: '#f3f4f6' };

  return (
    <div className="hero-component p-6 rounded relative overflow-hidden" style={backgroundStyle}>
      <div className="absolute inset-0 bg-blue-50 bg-opacity-30 z-0"></div>
      
      <div className="relative z-10 text-blue-900">
        {title && <h3 className="text-xl font-bold mb-2">{title}</h3>}
        {heading && <h2 className="text-3xl font-bold mb-3">{heading}</h2>}
        {subtitle && <h4 className="text-lg mb-4">{subtitle}</h4>}
        
        {button && button.label && button.url && (
          <button 
            className="mt-4 px-6 py-2 bg-white text-gray-900 font-medium rounded hover:bg-gray-100 transition-colors"
            onClick={() => window.open(button.url, button.target || '_self')}
          >
            {button.label}
          </button>
        )}
      </div>
    </div>
  );
}; 