"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import DevButtonLoader from "./devButtonLoader";
import { ComponentMetaData } from "../../interfaces/componentMetaData";

interface DevButtonProps {
  metaData: ComponentMetaData;
}

const DevButton = (props: DevButtonProps) => {
  const searchParams = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dev = searchParams && searchParams.get("dev");
  const isDev = dev === "true" || process.env.NEXT_PUBLIC_AUTHOR_MODE === "true" || process.env.STORYBOOK_ENV === "storybook";
  if (!isDev) {
    return null;
  }

  const handleClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="absolute right-0  z-1000 -translate-y-1/2">
          <button
            onClick={handleClick}
            className="rounded-full border-2 border-blue-600 bg-blue-600 p-2 text-white hover:border-blue-700 hover:bg-blue-700 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
          >
            {/* <FontAwesomeIcon icon={faInfo} /> */}
            Info
          </button>
        </div>
        {isModalOpen && <DevButtonLoader metaData={props.metaData} setIsModalOpen={setIsModalOpen} />}
      </Suspense>
    </>
  );
};

export default DevButton;
