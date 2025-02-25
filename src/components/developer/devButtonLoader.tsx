"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ComponentMetaData } from "../../interfaces/componentMetaData";

const Modal = dynamic(() => import("./devModal"));

interface DevButtonLoaderProps {
  metaData: ComponentMetaData;
  setIsModalOpen: (isModalOpen: boolean) => void;
}

export default function DevButtonLoader({ metaData, setIsModalOpen }: DevButtonLoaderProps) {
  return (
    <>
      <Modal onClose={() => setIsModalOpen(false)} metaData={metaData} />
    </>
  );
}
