import React, { useState } from 'react';
import clsx from 'clsx';

interface PostNoteProps {
  title: string;
  date: string;
  description: string;
  drawOutlineTime?: number; // 描边动画的时间（秒）
  fadeInTime?: number; // 淡入动画的时间（秒）
  animationDelay?: number; // 动画延迟时间（秒）
  width?: number; // 容器宽度
  height?: number; // 容器高度
  variant?: 'default' ; // 样式变体
}

const PostNote: React.FC<PostNoteProps> = ({
  title,
  date,
  description,
  drawOutlineTime = 5,
  fadeInTime = 5,
  animationDelay = 3,
  width = 300,
  height = width*1.4,

}) => {

  return (
    <div
      id="root"
      className={clsx(
        'relative flex items-center justify-center mx-auto', // 添加居中样式
      )}
      style={{ width: `${width}px`, height: `${height}px`,transform: 'translate(8%, 0%)' }}
    >
      {/* 描边动画的 SVG */}
      <svg
        className="absolute"
        width="100%"
        height="100%"
        viewBox="0 0 60 84"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 精确阴影路径 */}
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

        {/* 纸张轮廓 */}
        <path
          className="paper-outline"
          d="M6 2h42 a4 4 0 0 1 4 4 v64 a4 4 0 0 1-4 4 H6 a4 4 0 0 1-4-4 V6 a4 4 0 0 1 4-4z"
          fill="none"
          stroke="#4b5563"
          strokeWidth="2"
          strokeDasharray="240"
          strokeDashoffset="240"
          style={{
            animation: `drawOutline ${drawOutlineTime}s ease forwards`,
          }}
        />

        {/* 折角效果 */}
        <path
          d="M48 74c2.2 0 4-1.8 4-4v-8l-12 12h8z"
          fill="#9ca3af"
          style={{
            opacity: 0,
            animation: `fadeIn ${fadeInTime}s ease forwards`,
            animationDelay: `${animationDelay}s`,
          }}
        />

        {/* 右上角钉子 */}
        <circle
          className="pin"
          cx="50"
          cy="4"
          r="1.5"
          fill="#1f2937"
          style={{
            opacity: 0,
            animation: `fadeIn ${fadeInTime}s ease forwards`,
            animationDelay: `${animationDelay}s`,
          }}
        />
      </svg>

      {/* 中心文字内容 */}
      <div
        id="post-note-text"
        className="relative text-center border border-green-500"
        style={{
          width: '75%',
          height: '70%',
          transform: 'translate(-7%, -5%)',
          overflow: 'hidden', // 添加此行以隐藏超出部分
          opacity: 0,
          animation: `fadeIn ${fadeInTime}s ease forwards`,
          animationDelay: `${animationDelay}s`,
        }}
      >
        <p className="text-sm text-gray-800 mb-20 text-left">
          {date}
        </p>
        <p className="text-lg font-bold text-gray-900 mb-10">
          {title}
        </p>
        <p className="text-sm text-gray-800">
          {description}
        </p>
      </div>

      {/* 动画定义 */}
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
