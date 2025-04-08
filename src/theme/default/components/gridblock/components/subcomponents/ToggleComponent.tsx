import React from "react";

export interface ToggleProps {
  item: {
    aRIALabel?: string;
    showIcon?: boolean;
    variant?: string;
    className?: string;
    text?: string;
  };
}

export const ToggleComponent: React.FC<ToggleProps> = ({ item }) => {
  const { aRIALabel, showIcon = true, variant = "Primary", className = "", text = "Toggle Content" } = item;

  return (
    <div className={`toggle-component ${className}`}>
      <div className="flex items-center mb-2">
        {showIcon && (
          <div className="toggle-icon mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        )}
        <h3 className="text-lg font-semibold">{aRIALabel || "Toggle"}</h3>
      </div>
      {text && (
        <div className="toggle-content pl-6">
          <p>{text}</p>
        </div>
      )}
    </div>
  );
}; 