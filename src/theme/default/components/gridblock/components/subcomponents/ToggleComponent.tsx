import React from 'react';
import { Toggle } from '../../../../../../components/toggle';

interface ToggleComponentProps {
  item: {
    text?: string;
    aRIALabel?: string;
    showIcon?: boolean;
    variant?: "default" | "primary" | "secondary";
    className?: string;
    [key: string]: any;
  };
}

export const ToggleComponent: React.FC<ToggleComponentProps> = ({ item }) => {
  return (
    <Toggle
      text={item.text || "Toggle"}
      ariaLabel={item.aRIALabel || "Toggle Button"}
      showIcon={item.showIcon || false}
      variant={item.variant || "default"}
      className={item.className}
    />
  );
}; 