import React from "react";

export interface TextBlockProps {
  item: {
    title?: string;
    subtitle?: string;
    text?: string;
  };
}

export const TextBlockComponent: React.FC<TextBlockProps> = ({ item }) => {
  const { title, subtitle, text } = item;

  return (
    <div className="text-block-component">
      {title && <h3 className="text-xl font-bold mb-2">{title}</h3>}
      {subtitle && <h4 className="text-lg font-semibold mb-2 text-gray-700">{subtitle}</h4>}
      {text && <p className="text-gray-600">{text}</p>}
    </div>
  );
}; 