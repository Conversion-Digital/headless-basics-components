import React from "react";
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps";
import { demoVariantData } from "./demoVariantData";

export default function DemoVariant(props: StandardComponentProps) {
  const data = demoVariantData;

  return (
    <section className="py-8 px-4 bg-[#F7F7F7] text-center">
      <h2 className="text-4xl font-bold uppercase mb-4">{data.title}</h2>
      <p className="mb-6 max-w-xl mx-auto text-gray-600">{data.description}</p>

      <div className="grid grid-cols-1 gap-4 mb-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center">
        {data.stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center text-gray-700">
            <span className="text-xl font-bold">{stat.value}</span>
            <span className="uppercase text-sm">{stat.label}</span>
          </div>
        ))}
      </div>

      <button className="bg-[#E1916C] hover:bg-orange-600 text-white py-2 px-4 rounded-full uppercase tracking-wider">
        {data.buttonLabel}
      </button>
    </section>
  );
}