import React, { useState } from 'react';

interface ImageGalleryMaskProps {
  leftImage?: string;
  rightImage?: string;
}

const ImageGalleryMask: React.FC<ImageGalleryMaskProps> = ({ leftImage, rightImage }) => {
  const [hoverSide, setHoverSide] = useState<'left' | 'right' | null>(null);

  return (
    <div className="image-gallery-mask flex justify-center items-center w-full h-screen overflow-hidden">
      <div
        className={`image-gallery-container relative w-full h-full flex transition-transform duration-500 ${
          hoverSide === 'left' ? 'translate-x-[20%]' : hoverSide === 'right' ? '-translate-x-[20%]' : 'translate-x-0'
        }`}
        onMouseLeave={() => setHoverSide(null)}
      >
        <div
          className="image-gallery-left h-full overflow-hidden transition-all duration-500 z-1 absolute"
          style={{
            width: '90%',
            height: '500px',
            clipPath: 'polygon(0 0, 100% 0, 60% 100%, 0 100%)',
            left: hoverSide === 'left' ? '-20%' : '-25%',
          }}
          onMouseEnter={() => setHoverSide('left')}
        >
          {leftImage ? (
            <img
              src={leftImage}
              alt="Left"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-r from-black to-red-500"></div>
          )}
        </div>
        <div
          className="image-gallery-right h-full overflow-hidden transition-all duration-500  z-0 absolute"
          style={{
            width: '90%',
            height: '500px',
            clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 0 100%)',
            right: hoverSide === 'right' ? '-20%' : '-25%',
          }}
          onMouseEnter={() => setHoverSide('right')}
        >
          {rightImage ? (
            <img
              src={rightImage}
              alt="Right"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-r from-blue-500 to-black"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageGalleryMask;
