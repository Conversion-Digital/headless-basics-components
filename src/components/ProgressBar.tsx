import React, { useEffect, useState } from "react";
//ProgressBar
interface ProgressBarProps {
  duration: number;
  type?: "linear" | "circular";
  radius?: number;
  gradientColors?: [string, string];
  strokeWidth?: number;
}
   
const ProgressBar: React.FC<ProgressBarProps> = ({ duration, type = "linear", radius = 50, gradientColors = ["blue", "purple"], strokeWidth = 10 }) => {
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

  if (type === "circular") {
    const adjustedRadius = Math.max(Math.min(radius, 70), 30);
    const circumference = 2 * Math.PI * adjustedRadius;
    const offset = circumference - (progress / 100) * circumference;

    return (
      <circle className="relative w-40 h-40 mx-auto">
        <svg className="w-full h-full transform -rotate-90">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={gradientColors[0]} />
              <stop offset="100%" stopColor={gradientColors[1]} />
            </linearGradient>
          </defs>
          <circle
            className="text-gray-300"
            strokeWidth={strokeWidth}
            stroke="currentColor"
            fill="transparent"
            r={adjustedRadius}
            cx="50%"
            cy="50%"
          />
          <circle
            className="text-blue-500"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            stroke="url(#gradient)"
            fill="transparent"
            r={adjustedRadius}
            cx="50%"
            cy="50%"
          />
        </svg>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-blue-500 text-xl">
          {Math.floor(progress)}%
        </div>
      </circle>
    );
  }

  return (
    <div className="relative w-4/5 h-5 bg-opacity-20 bg-white rounded-lg overflow-hidden mx-auto">
      <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg transition-width duration-500 ease-in-out" style={{ width: `${progress}%` }}>
        <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-30 opacity-50 animate-wave"></div>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-sm">{Math.floor(progress)}%</div>
    </div>
  );
};

export default ProgressBar;
