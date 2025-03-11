import React, { useEffect, useState } from "react";
//ProgressBar
interface ProgressBarProps {
  duration: number;
  type?: "linear" | "circular";
}
   
const ProgressBar: React.FC<ProgressBarProps> = ({ duration, type = "linear" }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, duration / 100);

    return () => clearInterval(interval);
  }, [duration]);

  if (type === "circular") {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    return (
      <circle className="relative w-24 h-24">
        <svg className="w-full h-full transform -rotate-90">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="blue" />
              <stop offset="100%" stopColor="purple" />
            </linearGradient>
          </defs>
          <circle
            className="text-gray-300"
            strokeWidth="10"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="50%"
            cy="50%"
          />
          <circle
            className="text-blue-500"
            strokeWidth="10"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            stroke="url(#gradient)"
            fill="transparent"
            r={radius}
            cx="50%"
            cy="50%"
          />
        </svg>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-blue-500 text-xl">
          {progress}%
        </div>
      </circle>
    );
  }

  return (
    <div className="relative w-4/5 h-5 bg-opacity-20 bg-white rounded-lg overflow-hidden mx-auto">
      <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg transition-width duration-500 ease-in-out" style={{ width: `${progress}%` }}>
        <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-30 opacity-50 animate-wave"></div>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-sm">{progress}%</div>
    </div>
  );
};

export default ProgressBar;
