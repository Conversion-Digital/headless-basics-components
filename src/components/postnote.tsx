import React, { useState } from 'react';
import clsx from 'clsx';

interface PostNoteProps {
  title: string;
  date: string;
  description: string;
  drawOutlineTime?: number; // Time in seconds for the outline animation to complete
  fadeInTime?: number; // Time in seconds for the fade-in animation to complete
  animationDelay?: number; // Delay in seconds before animations start
  width?: number; // Container width
  height?: number; // Container height
  variant?: 'default'; // Style variant
}

const postnote: React.FC<PostNoteProps> = ({
  title,
  date,
  description,
  drawOutlineTime = 5,
  fadeInTime = 5,
  animationDelay = 3,
  width = 300,
  height = width * 1.4,
}) => {
  return (
    <div
      id="root"
      className={clsx(
        'relative flex items-center justify-center mx-auto ' , 
      )}
      style={{ width: `${width}px`, height: `${height}px`, transform: 'translate(8%, 0%)' }}
    >
      {/* SVG for outline animation */}
      <svg
        className="absolute"
        width="100%"
        height="100%"
        viewBox="0 0 60 84"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Precise shadow path */}
        <path
          className="shadow"
          d="M52 6 v64 a4 4 0 0 1-4 4 H6 c-1.1 0-2-.9-2-2 v3 c0 2.2 1.8 4 4 4 h42 c4.4 0 8-3.6 8-8 V6 z"
          fill="#6b7280"
          style={{
            opacity: 0,
            animation: `fadeIn ${fadeInTime}s ease forwards`,
            animationDelay: `${animationDelay}s`,
          }}
        />

        {/* Paper outline */}
        <path
          className="paper-outline"     
          d="M6 2h42 a4 4 0 0 1 4 4 v64 a4 4 0 0 1-4 4 H6 a4 4 0 0 1-4-4 V6 a4 4 0 0 1 4-4z"
          fill="none"
          stroke="#4b5563"
          strokeWidth="2"
          strokeDasharray="240"
          strokeDashoffset="240"
          style={{
            animation: `drawOutline ${drawOutlineTime}s ease forwards`, // Animation duration controlled by drawOutlineTime
          }}
        />

        {/* Corner effect */}
        <path
          d="M48 74c2.2 0 4-1.8 4-4v-8l-12 12h8z"
          fill="#9ca3af"
          style={{
            opacity: 0,
            animation: `fadeIn ${fadeInTime}s ease forwards`, // Animation duration controlled by fadeInTime
            animationDelay: `${animationDelay}s`, // Animation delay controlled by animationDelay
          }}
        />

        {/* Top-right pin */}
        <circle
          className="pin"
          cx="50"
          cy="4"
          r="1.5"
          fill="#1f2937"
          style={{
            opacity: 0,
            animation: `fadeIn ${fadeInTime}s ease forwards`, // Animation duration controlled by fadeInTime
            animationDelay: `${animationDelay}s`, // Animation delay controlled by animationDelay
          }}
        />
      </svg>

      {/* Center text content */}
      <div
        id="post-note-text"
        className="relative text-center border border-green-500"
        style={{
          width: '38%',
          height: '70%',
          transform: 'translate(-7%, -5%)',
          overflow: 'hidden', // Hide overflow content
          opacity: 0,
          animation: `fadeIn ${fadeInTime}s ease forwards`,
          animationDelay: `${animationDelay}s`,
        }}
      >
        <p
          id="post-note-date"
          className="text-sm text-gray-800 mb-20 text-left"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 1, // Limit to 1 line
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {date}
        </p>
        <p
          id="post-note-title"
          className="text-lg font-bold text-gray-900 mb-10"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 2, // Limit to 2 lines
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {title}
        </p>
        <p
          id="post-note-description"
          className="text-sm text-gray-800 "
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 4, // Limit to 4 lines
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {description}
        </p>
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

export default postnote;
