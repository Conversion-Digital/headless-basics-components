import React from "react";
import Image from "next/image";

export interface StoriesCardProps {
  image_src?: string;
  image_alt?: string;
  image_src1?: string;
  image_alt1?: string;
  text?: string;
  text1?: string;
  text2?: string;
}

const StoriesCard = (props: StoriesCardProps) => {
  return (
    <div className="flex w-full shrink-0 grow-0 basis-auto flex-col items-start rounded-lg bg-white p-8 shadow-[0px_10px_20px_0px_rgba(41,41,42,0.07)]">
      <Image alt={props.image_alt || ""} src={props.image_src || ""} width={15} height={15} className="mb-8 w-[100px] object-cover" />
      <div className="flex h-auto w-full shrink-0 grow-0 basis-auto flex-row items-start justify-start">
        <Image
          alt={props.image_alt1 || ""}
          src={props.image_src1 || ""}
          width={15}
          height={15}
          className="right-auto bottom-auto left-[46px] top-[81px] w-4 object-cover"
        />
        <div className="flex flex-col items-start justify-start">
          <span className="mb-8 text-lg font-normal normal-case text-['Inter'] no-underline">{props.text}</span>
          <span className="text-lg font-bold normal-case text-['Inter'] no-underline">{props.text1}</span>
          <span className="text-sm font-medium normal-case text-['Inter'] text-gray-700 no-underline">{props.text2}</span>
        </div>
      </div>
    </div>
  );
};

export default StoriesCard;
