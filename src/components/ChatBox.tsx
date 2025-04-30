import React from 'react';

interface ChatBoxProps {
  message: string;
  width?: number;
  height?: number;
  animationDuration?: number; 
  variant?: 'default' | 'flip'; // Added variant prop
}

const ChatBox: React.FC<ChatBoxProps> = ({ 
  message, 
  width = 700, // Updated default width to 500
  height = width / 1.4, 
  animationDuration = 2.5, 
  variant = 'default' // Default variant
}) => {
  const isFlipped = variant === 'flip'; // Check if the variant is flip

  return (
    <div
      id="chatbox-container"
      className="relative correct-mask-reveal flex items-center justify-center"
      style={{ width: `${width}px`, height: `${height}px`, margin: 'auto' }}
    >
      {/* Shadow */}
      <svg
        className="absolute"
        width="100%"
        height="100%"
        viewBox="0 0 220 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform={isFlipped ? 'scale(-1,1) translate(-220,0)' : undefined}> {/* Apply flip transformation */}
          <path
            d="M30 20 h150 a10 10 0 0 1 10 10 v40 a10 10 0 0 1 -10 10 h-150 a10 10 0 0 1 -10 -10 v-25 l-18 -8 l18 -2 v-5 a10 10 0 0 1 10 -10 z"
            fill="#00000033"
            transform="translate(4,4)"
          />
        </g>
      </svg>

      {/* Chat bubble */}
      <svg
        className="absolute"
        width="100%"
        height="100%"
        viewBox="0 0 220 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform={isFlipped ? 'scale(-1,1) translate(-220,0)' : undefined}> {/* Apply flip transformation */}
          <path
            d="M30 20 h150 a10 10 0 0 1 10 10 v40 a10 10 0 0 1 -10 10 h-150 a10 10 0 0 1 -10 -10 v-25 l-18 -8 l18 -2 v-5 a10 10 0 0 1 10 -10 z"
            fill="#ffffff"
            stroke="#000000"
            strokeWidth="2"
          />
        </g>
      </svg>

      {/* Message content */}
      <div
        id="chatbox-content"
        className="absolute inset-0 flex items-center justify-center px-4"
      >
        <p className="text-sm text-gray-800">{message}</p>
      </div>

      {/* Animation styles */}
      <style>
        {`
          .correct-mask-reveal {
            opacity: 0; /* Initially fully transparent */
            animation: pureMaskReveal ${animationDuration}s linear forwards;

            /* Create a hard-edge mask */
            mask: linear-gradient(to right, 
              transparent 0%,
              black 0%
            );
            mask-size: 200% 100%; /* Double width */
            mask-repeat: no-repeat;
            mask-position: ${isFlipped ? '-100% 0' : '200% 0'}; /* Start off-screen based on variant */
          }

          @keyframes pureMaskReveal {
            0% {
              mask-position: ${isFlipped ? '-100% 0' : '200% 0'}; /* Fully hidden based on variant */
              opacity: 0; /* For browsers that don't support mask */
            }
            1% {
              opacity: 1; /* Immediately show the element (visibility controlled by mask) */
            }
            100% {
              mask-position: ${isFlipped ? '100% 0' : '100% 0'}; /* Fully revealed */
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ChatBox;
