import React from "react";
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps";
import { getCmsImage } from "@conversiondigital/headless-basics-data/src/cms/tools/multiCmsImageTools";

export default function cdnavDefaultVariant(props: StandardComponentProps) {
  const { blueprint, componentInformation, matchingData } = props;
  const title = matchingData?.title || "CD Nav Default Title";
  const subtitle = matchingData?.subtitle || "";
  const isTransparent = matchingData?.isTransparent === true;
  const logo = matchingData?.logo?.asset?.url || null;
  const links = matchingData?.links || [];

  const { hasImage: hasMobile, imageLocation: mobileSrc } = getCmsImage({ image: matchingData?.mobileImage });
  const { hasImage: hasDesktop, imageLocation: desktopSrc } = getCmsImage({ image: matchingData?.desktopImage });

  return (
    <nav className={`${isTransparent ? "bg-transparent" : "bg-[#DDDDDD]"} text-[#000] p-4`}>
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <h2 className="font-bold text-xl">{title}</h2>
          {subtitle && <p className="text-sm">{subtitle}</p>}
        </div>
        {logo ? (
          <div>
            <img src={logo} alt="Nav Logo" className="h-8 w-auto object-contain" />
          </div>
        ) : (
          <p>No Logo</p>
        )}
        <ul className="flex flex-wrap gap-5">
          {links.map((linkItem: any, idx: number) => (
            <li key={idx}>
              <a href={linkItem.url ?? "#"} className="underline">
                {linkItem.label ?? "Nav Link"}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        {hasMobile && (
          <img src={mobileSrc} alt="Mobile Nav" className="w-auto h-16 object-cover" />
        )}
        {hasDesktop && (
          <img src={desktopSrc} alt="Desktop Nav" className="w-auto h-16 object-cover" />
        )}
      </div>
    </nav>
  );
};
