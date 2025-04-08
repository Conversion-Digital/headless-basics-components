
import React from "react";
import Image from "next/image";
import { demoVariantData } from "./data/demoVariantData";
import { StandardComponentProps } from "../../../../../../interfaces/standardComponentProps";

export default function DemoVariant(props: StandardComponentProps) {
  return (
    <section className="p-5 bg-white text-center">
      <h2 className="text-2xl font-bold mb-3">{demoVariantData.title}</h2>
      <p className="mb-5">{demoVariantData?.heading}</p>
      <div className="flex justify-center">
        <Image
          src={demoVariantData.imageUrl}
          alt={demoVariantData.altText}
          width={600}
          height={400}
        />
      </div>
    </section>
  );
}
