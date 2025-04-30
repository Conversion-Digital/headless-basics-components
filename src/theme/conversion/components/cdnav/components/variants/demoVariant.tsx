import React from "react";
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps";
import { demoVariantData } from "./data/demoVariantData";

export default function DemoVariant(props: StandardComponentProps) {
  const { matchingData } = props;
  const fallbackTitle = matchingData?.title || demoVariantData.title;
  const fallbackSubtitle = matchingData?.subtitle || demoVariantData.subtitle;
  const isTransparent = matchingData?.isTransparent ?? demoVariantData.isTransparent;
  const fallbackMobile = matchingData?.mobileImage?.asset?.url || demoVariantData.mobileImage;
  const fallbackDesktop = matchingData?.desktopImage?.asset?.url || demoVariantData.desktopImage;
  const fallbackLinks = matchingData?.links?.length ? matchingData.links : demoVariantData.links;

  return (
    <nav className={`${isTransparent ? "bg-transparent" : "bg-[#F6F6F6]"} p-4 text-black`}>
      <h2 className="text-xl font-bold">{fallbackTitle}</h2>
      <p className="text-sm mb-4">{fallbackSubtitle}</p>
      <ul className="flex gap-3">
        {fallbackLinks.map((linkItem: any, idx: number) => (
          <li key={idx}>
            <a href={linkItem.url ?? "#"} className="underline text-blue-800">
              {linkItem.label ?? "Demo Link"}
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-4 space-y-2">
        <img src={fallbackMobile} alt="Mobile Demo Nav" className="w-auto h-10 object-contain" />
        <img src={fallbackDesktop} alt="Desktop Demo Nav" className="w-auto h-10 object-contain" />
      </div>
      <p className="italic text-sm mt-2">This is the xDemo variant for cdNav - demonstration only.</p>
    </nav>
  );
};
