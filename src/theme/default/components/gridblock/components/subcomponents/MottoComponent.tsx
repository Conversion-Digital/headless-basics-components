import React from 'react';

interface MottoComponentProps {
  item: {
    words?: string;
    align?: 'left' | 'center' | 'right';
    [key: string]: any;
  };
}

export const MottoComponent: React.FC<MottoComponentProps> = ({ item }) => {
  const textAlign = item.align || 'center';
  
  const alignmentClasses = {
    'left': 'text-left',
    'center': 'text-center',
    'right': 'text-right'
  };
  
  return (
    <div className={`motto ${alignmentClasses[textAlign]}`}>
      {item.words && (
        <blockquote className="text-xl font-medium italic text-gray-800 p-4 border-l-4 border-gray-300 bg-gray-50 rounded">
          "{item.words}"
        </blockquote>
      )}
    </div>
  );
}; 