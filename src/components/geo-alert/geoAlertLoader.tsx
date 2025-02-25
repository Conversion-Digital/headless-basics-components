"use client"
import React from 'react';
import dynamic from "next/dynamic";

const GeoAlert = dynamic(() => import('./geoAlert'));

export default function GeoAlertLoader() {
  return (
    <>
      {<GeoAlert/>}
    </>
  );
}
