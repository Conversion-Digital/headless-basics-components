import React from 'react';
import clsx from 'clsx';

interface CTAProps {
  title: string;
  text: string;
  onClick: () => void;
  variant?: 'default' | 'light';
  className?: string;
}

const CTA: React.FC<CTAProps> = ({ title, text, onClick, variant = 'default', className }) => {
  const variantClasses = {
    default: 'bg-black text-white border-white hover:border-red-500',
    light: 'bg-white text-black border-red-500 hover:border-red-700',
  };

  return (
    <div
      className={clsx(
        'relative flex justify-between items-center border-2 rounded-lg p-4 transition-all duration-300 h-36 w-72',
        variantClasses[variant],
        className
      )}
    >
      <div className="flex flex-col items-start">
        <h2 className="text-xl sm:text-2xl m-0">{title}</h2>
        <p className="mt-2">{text}</p>
      </div>
      <button
        type="button"
        onClick={onClick}
        className="absolute top-2 right-2 bg-none border-none cursor-pointer 
        transition-transform duration-300 
        hover:bg-red-500 rounded-full p-2 h-10 w-10 flex items-center justify-center"
        aria-label="CTA button"
      >
        <span className="text-xl sm:text-2xl transition-transform duration-300 hover:rotate-45">
          ↗
        </span>
      </button>
    </div>
  );
};

export default CTA;
