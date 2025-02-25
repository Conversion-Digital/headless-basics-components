import { useEffect, useRef } from "react";

export const useInterval = (callback: () => void, delay: number, runOnce?: boolean) => {
  // eslint-disable-next-line
  const savedCallback = useRef<any | null>(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const runCallback = () => {
      savedCallback.current();
    };
    if (runOnce) {
      const id = setTimeout(runCallback, delay);
      return () => clearTimeout(id);
    } else {
      const id = setInterval(runCallback, delay);
      return () => clearInterval(id);
    }
  }, []);
};
