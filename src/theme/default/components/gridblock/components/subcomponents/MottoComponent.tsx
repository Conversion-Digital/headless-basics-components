import React from "react";

export interface MottoProps {
  item: {
    words?: string;
    align?: string;
    globalComponentSource?: {
      _key?: string;
    };
  };
}

export const MottoComponent: React.FC<MottoProps> = ({ item }) => {
  const mottoText = item.words || "Motto Component";
  
  // Determine alignment based on the 'align' prop
  let alignmentClass = "text-left";
  if (item.align === "center") {
    alignmentClass = "text-center";
  } else if (item.align === "right") {
    alignmentClass = "text-right";
  }
  
  return (
    <div className={`motto-component bg-blue-50 p-6 rounded ${alignmentClass}`}>
      <blockquote className="italic text-xl font-light text-blue-900">"{mottoText}"</blockquote>
    </div>
  );
}; 