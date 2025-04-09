import React, { useState } from 'react';
import clsx from 'clsx';

interface PostNoteProps {
  title: string;
  date: string;
  description: string;
  drawOutlineTime?: number; // Time for drawOutline animation in seconds
  fadeInTime?: number; // Time for fadeIn animation in seconds
  animationDelay?: number; // Delay before animations start in seconds
  size?: number; // Size of the root container (width and height)
  variant?: 'default' | 'MouseEffest'; // Styling variants
}

const PostNote: React.FC<PostNoteProps> = ({
  title,
  date,
  description,
  drawOutlineTime = 5,
  fadeInTime = 5,
  animationDelay = 3,
  size = 500,
  variant = 'default',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const variantClasses = {
    default: '',
    MouseEffest: ''
  };

  return (
    <div
      id="root"
      className={clsx(
        'relative mx-auto my-[50px] border transition-all duration-300',
        variantClasses[variant]
      )}
      style={{ width: `${size}px`, height: `${size}px` }}
      onMouseEnter={() => variant === 'MouseEffest' && setIsHovered(true)}
    >
      {/* Tooltip */}
      {isHovered && variant === 'MouseEffest' && (
        <div
          className="absolute top-1/2 right-[-150px] transform -translate-y-1/2 bg-gray-800 text-white text-sm p-2 rounded shadow-lg"
          style={{ width: '120px' }}
        >
          Tooltip Content
        </div>
      )}

      {/* SVG for outline animation */}
      <svg
        className="absolute top-0 left-0"
        width="100%"
        height="100%"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Precise shadow path */}
        <path
          className="shadow"
          d="M48 8v36c0 4.4-3.6 8-8 8H20c-1.1 0-2-.9-2-2v2c0 2.2 1.8 4 4 4h24c4.4 0 8-3.6 8-8V8z"
          fill="#6b7280"
          style={{
            opacity: 0,
            animation: `fadeIn ${fadeInTime}s ease forwards`,
            animationDelay: `${animationDelay}s`,
          }}
        />

        {/* Paper outline animation */}
        <path
          className="paper-outline"
          d="M16 4h28a4 4 0 0 1 4 4v40a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4z"
          fill="none"
          stroke="#4b5563"
          strokeWidth="2"
          strokeDasharray="240"
          strokeDashoffset="240"
          style={{
            animation: `drawOutline ${drawOutlineTime}s ease forwards`,
          }}
        />

        {/* Folded corner effect */}
        <path
          d="M44 52c2.2 0 4-1.8 4-4v-8l-12 12h8z"
          fill="#9ca3af"
          style={{
            opacity: 0,
            animation: `fadeIn ${fadeInTime}s ease forwards`,
            animationDelay: `${animationDelay}s`,
          }}
        />

        {/* Top-right pin */}
        <circle
          className="pin"
          cx="46"
          cy="6"
          r="1.5"
          fill="#1f2937"
          style={{
            opacity: 0,
            animation: `fadeIn ${fadeInTime}s ease forwards`,
            animationDelay: `${animationDelay}s`,
          }}
        />
      </svg>

      {/* Centered text content */}
      <div
        id="post-note-text"
        className="absolute inset-0 m-auto flex flex-col items-center justify-center text-center border border-green-500"
        style={{
          width: '50%',
          height: '60%',
          transform: 'translate(-5%, -15%)',
          opacity: 0,
          animation: `fadeIn ${fadeInTime}s ease forwards`,
          animationDelay: `${animationDelay}s`,
        }}
      >
        <p className="text-sm text-gray-800 mb-4 text-left w-full" style={{ transform: 'translateY(-150%)' }}>
          {date}
        </p>
        <p className="text-lg font-bold text-gray-900 mb-4">{title}</p>
        <p className="text-sm text-gray-800">{description}</p>
      </div>

      {/* Animation definitions */}
      <style>
        {`
          @keyframes drawOutline {
            to {
              stroke-dashoffset: 0;
            }
          }

          @keyframes fadeIn {
            to {
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default PostNote;
