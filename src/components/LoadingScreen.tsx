import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";

interface LoadingScreenProps {
  duration?: number;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ duration = 5000 }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start: number;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min((elapsed / duration) * 100, 100);
      setProgress(progress);
      if (progress < 100) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);

    return () => setProgress(0); // Reset progress on unmount
  }, [duration]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
      <div className="text-center">
        <ProgressBar duration={duration} radius={Math.max(Math.min(60, 70), 30)} gradientColors={["red", "yellow"]} strokeWidth={8} />
        <p className="mt-4 text-white">Loading... {Math.floor(progress)}%</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
