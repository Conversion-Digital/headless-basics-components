import { useEffect, useState } from "react";
import { ClassWatcher } from "./classWatcher";

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const onAdd = () => setIsDarkMode(true);
  const onRemove = () => setIsDarkMode(false);
  const targetNode = document.documentElement;
  new ClassWatcher(targetNode, "dark", onAdd, onRemove);
  useEffect(() => {
    setIsDarkMode(targetNode.classList.contains("dark"));
  }, []);
  return isDarkMode;
};
