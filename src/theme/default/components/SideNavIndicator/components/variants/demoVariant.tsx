import React from "react";
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps";
import { demoVariantData } from "./data/demoVariantData";

const DemoVariant: React.FC<StandardComponentProps> = ({ matchingData }) => {
  return (
    <section className="p-4">
      <h2 className="text-xl font-bold">{matchingData?.title || demoVariantData.title}</h2>
      <p className="mb-4">{matchingData?.subtitle || demoVariantData.subtitle}</p>
      <nav>
        <ul className="space-y-2">
          {(matchingData?.navItems || demoVariantData.navItems).map((item: any, index: number) => (
            <li key={index} className={item.active ? "font-semibold" : "text-gray-500"}>
              {item.label}
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default DemoVariant;