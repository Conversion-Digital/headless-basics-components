import React from "react";
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps";
import { getCmsImage } from "@conversiondigital/headless-basics-data/src/cms/tools/multiCmsImageTools";

export default function cdnavDefaultVariant(props: StandardComponentProps) {
  const { blueprint, componentInformation, matchingData } = props;
  const subtitle = matchingData?.subtitle || "";
  const isTransparent = matchingData?.isTransparent === true;
  const logo = matchingData?.logo?.asset?.url || null;
  const links = matchingData?.links || [];
  const dropdownMenus = matchingData?.dropdownMenus || [];
  const buttonText = matchingData?.buttonText || "Contact Us";
  const buttonUrl = matchingData?.buttonUrl || "#";

  const { hasImage: hasMobile, imageLocation: mobileSrc } = getCmsImage({ image: matchingData?.mobileImage });
  const { hasImage: hasDesktop, imageLocation: desktopSrc } = getCmsImage({ image: matchingData?.desktopImage });

  return (
    <nav className={`${isTransparent ? "bg-transparent" : "bg-[#FFFFFF]"} text-[#000] p-4 sticky top-0 z-50`}>
      <div className="container mx-auto flex items-center justify-between">
        <div>
          {logo ? (
            <div>
              <img src={logo} alt="Nav Logo" className="w-[179px] h-[71px] object-contain" />
            </div>
          ) : (
            <p>No Logo</p>
          )}
          {subtitle && <p className="text-sm">{subtitle}</p>}
        </div>
        <div className="flex items-center gap-14">
          <div className="inline-flex justify-end items-center gap-14">
            {dropdownMenus.length > 0 && (
              <div className="relative group">
                <button className="text-centertext-Color-Navy text-xltracking-wide hover:underline hover:decoration-[#800928] hover:underline-offset-8 pt-[6px] pb-[5px]">
                  {dropdownMenus[0].label}
                </button>
                <div className="w-2 bg-Color-Navy rounded-[0.40px] " />
                <ul className="absolute hidden group-hover:block top-full left-0 bg-white shadow-md rounded-md p-2 min-w-[200px] z-10">
                  {dropdownMenus[0].dropdownLinks?.map((link: any, linkIdx: number) => (
                    <li key={linkIdx} className="py-1">
                      <a href={link.url ?? "#"} className="hover:underline hover:decoration-[#800928] hover:underline-offset-8 block">
                        {link.label ?? "Dropdown Link"}
                      </a>
                    </li>
                  ))}
                  {dropdownMenus.length > 1 && (
                    <li className="relative group/nested py-1">
                      <button className="hover:underline hover:decoration-[#800928] hover:underline-offset-8 block w-full text-left">
                        {dropdownMenus[1].label}
                      </button>
                      <ul className="absolute hidden group-hover/nested:block left-full top-0 bg-white shadow-md rounded-md p-2 min-w-[200px] z-20">
                        {dropdownMenus[1].dropdownLinks?.map((link: any, linkIdx: number) => (
                          <li key={linkIdx} className="py-1">
                            <a href={link.url ?? "#"} className="hover:underline hover:decoration-[#800928] hover:underline-offset-8 block">
                              {link.label ?? "Dropdown Link"}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  )}
                </ul>
              </div>
            )}
            {links.map((linkItem: any, idx: number) => (
              <div key={idx} className="text-center justify-start text-Color-Navy tracking-wide">
                <a href={linkItem.url ?? "#"} className="hover:underline hover:decoration-[#800928] hover:underline-offset-8 pt-[6px] pb-[5px]">
                  {linkItem.label ?? "Nav Link"}
                </a>
              </div>
            ))}
          </div>
          <a 
            href={buttonUrl}
            className="bg-[#800928] hover:bg-blue-950 font-semibold text-xl text-white px-6 py-2 rounded-full hover:bg-opacity-80 transition-colors px-10 py-4 rounded-[50px] inline-flex justify-center items-center gap-2.5"
          >
            {buttonText}
          </a>
        </div>
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
