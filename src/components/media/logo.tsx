import Image from "next/image";
import React from "react";
import { ImageInputProps } from "../../interfaces/Images";


const Logo: React.FC<{image: ImageInputProps, className?: string}> = ({ image, className = "" }) => {
    // Handle case where image is null or undefined
    if (!image || !image.image) {
      return (
        <div className={`flex items-center justify-between ${className}`}>    
          <div className="bg-gray-200 rounded px-4 py-2 text-gray-600 font-semibold">
            LOGO
          </div>
        </div>
      );
    }

    return (
    <div className="flex items-center justify-between">    
      <Image
        src={image.image}
        alt={image.description || "Logo"}
        width={image.width || 100}
        height={image.height || 100}
        loading={"lazy"}
        className={className}
      />
    </div>
  );
};

export default Logo;
