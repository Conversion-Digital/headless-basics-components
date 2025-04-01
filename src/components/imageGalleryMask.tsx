import React, { useState } from 'react';

interface ImageGalleryMaskProps {
  leftImage?: string; // 直接使用图片 URL
  rightImage?: string; // 直接使用图片 URL
}

const ImageGalleryMask: React.FC<ImageGalleryMaskProps> = ({ leftImage, rightImage }) => {
  const [hoverSide, setHoverSide] = useState<'left' | 'right' | null>(null);

  return (
    <div className="image-gallery-mask flex justify-center items-center w-[800px] h-screen overflow-hidden">
      <div
        className={`image-gallery-container relative w-[1200px] h-[500px] flex transition-transform duration-500 ${
          hoverSide === 'left' ? 'translate-x-[20%]' : hoverSide === 'right' ? '-translate-x-[20%]' : 'translate-x-0'
        }`}
        style={{
          // 移除背景
        }}
        onMouseLeave={() => setHoverSide(null)}
      >
        {/* Left Image */}
        <div
          className="image-gallery-left h-full overflow-hidden transition-all duration-500"
          style={{
            width: '90%', // 左图宽度占父容器的 90%
            height: '500px', // 固定高度
            clipPath: 'polygon(0 0, 100% 0, 60% 100%, 0 100%)', // 倾角调整为 60 度
            position: 'absolute', // 使左图绝对定位
            left: hoverSide === 'left' ? '-150px' : '-250px', // 悬停时为 -150px，默认为 -250px
            zIndex: 1, // 确保左图在右图之上
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

        {/* Right Image */}
        <div
          className="image-gallery-right h-full overflow-hidden transition-all duration-500"
          style={{
            width: '90%', // 右图宽度占父容器的 90%
            height: '500px', // 固定高度
            clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 0 100%)', // 倾角调整为 60 度
            position: 'absolute', // 使右图绝对定位
            right: hoverSide === 'right' ? '-150px' : '-250px', // 悬停时为 -150px，默认为 -250px
            zIndex: 0, // 确保右图在左图之下
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
