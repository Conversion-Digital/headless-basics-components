import React from 'react';

interface TextBlockComponentProps {
  item: {
    title?: string;
    subtitle?: string;
    text?: string;
    [key: string]: any;
  };
}

export const TextBlockComponent: React.FC<TextBlockComponentProps> = ({ item }) => {
  return (
    <div className="text-block">
      {item.title && <h3 className="text-xl font-semibold mb-2">{item.title}</h3>}
      {item.subtitle && <h4 className="text-lg text-gray-600 mb-2">{item.subtitle}</h4>}
      {item.text && (
        <div className="prose max-w-none">
          {typeof item.text === 'string' ? (
            <p>{item.text}</p>
          ) : (
            <div>{item.text}</div>
          )}
        </div>
      )}
    </div>
  );
}; 