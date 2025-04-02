
import React from "react";
import Image from "next/image";
import { demoVariantData } from "./data/demoVariantData";
import type { ViewComponentProps } from "@conversiondigital/headless-basics-data/src/interfaces/ThemeConfig.interface";
import { StandardComponentProps } from "../../../../../../interfaces/standardComponentProps";

export default function DemoVariant(props: StandardComponentProps) {
  return (
    <section id="frame469" className="p-5 bg-white text-center">
      <h2 className="text-2xl font-bold mb-3">{demoVariantData.heading}</h2>
      <p className="mb-5">{demoVariantData.subtitle}</p>
      <div className="mb-3">
        <p className="text-sm"><strong>Phone:</strong> {demoVariantData.phone}</p>
        <p className="text-sm"><strong>Fax:</strong> {demoVariantData.fax}</p>
        <p className="text-sm"><strong>Email:</strong> {demoVariantData.email}</p>
        <p className="text-sm"><strong>Location:</strong> {demoVariantData.officeLocation}</p>
      </div>
      <p>
        <a
          href={demoVariantData.ctaLink}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          {demoVariantData.ctaLabel}
        </a>
      </p>
    </section>
  );
}
