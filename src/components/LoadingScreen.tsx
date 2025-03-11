import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
      <div className="text-center">
        <ProgressBar duration={5000} />
        <p className="mt-4 text-white">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
