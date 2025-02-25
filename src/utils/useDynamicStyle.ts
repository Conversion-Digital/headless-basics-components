import { useEffect } from "react";

export const useDynamicStyle = (property: string, value: string) => {
  useEffect(() => {
    document.documentElement.style.setProperty(property, value);
  }, [value]);
};
