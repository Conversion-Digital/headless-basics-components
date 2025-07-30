import React from "react";
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps";
import { getCmsImage } from "@conversiondigital/headless-basics-data/src/cms/tools/multiCmsImageTools";
import MobileNavigation from "./MobileNavigation";

export default function cdnavDefaultVariant(props: StandardComponentProps) {
  const { matchingData } = props;
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
    <nav className={`${isTransparent ? "bg-transparent" : "bg-[#FFFFFF]"} text-[#000] p-4 sticky top-0 z-50 text-xl`}>
      <div className="container mx-auto">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between">
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
              {/* Render first dropdown menu with nested second dropdown */}
              {dropdownMenus.length > 0 && (
                <div className="relative group">
                  <button className="text-center tracking-wide hover:underline hover:decoration-[#800928] hover:underline-offset-8 pt-[6px] pb-[5px] flex items-center gap-1">
                    {dropdownMenus[0].label}
                    <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-gray-400 group-hover:border-t-[#0D0E47] transition-transform duration-300 group-hover:-rotate-180" />
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
                    {/* Nested second dropdown menu */}
                    {dropdownMenus.length > 1 && (
                      <li className="py-1 relative group/nested">
                        <div className="flex items-center justify-between hover:underline hover:decoration-[#800928] hover:underline-offset-8">
                          <span>{dropdownMenus[1].label}</span>
                          <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[4px] border-l-gray-400 group-hover/nested:border-l-[#0D0E47]" />
                        </div>
                        <ul className="absolute hidden group-hover/nested:block left-full top-0 bg-white shadow-md rounded-md p-2 min-w-[180px] z-20 ml-1">
                          {dropdownMenus[1].dropdownLinks?.map((link: any, linkIdx: number) => (
                            <li key={linkIdx} className="py-1">
                              <a href={link.url ?? "#"} className="hover:underline hover:decoration-[#800928] hover:underline-offset-8 block">
                                {link.label ?? "Nested Dropdown Link"}
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
                <div key={idx} className="text-center justify-start tracking-wide">
                  <a href={linkItem.url ?? "#"} className="hover:underline hover:decoration-[#800928] hover:underline-offset-8 pt-[6px] pb-[5px]">
                    {linkItem.label ?? "Nav Link"}
                  </a>
                </div>
              ))}
            </div>
            <a 
              href={buttonUrl}
              className="bg-[#800928] hover:bg-blue-950 font-semibold text-white px-10 py-4 rounded-full hover:bg-opacity-80 transition-colors inline-flex justify-center items-center gap-2.5"
            >
              {buttonText}
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <MobileNavigation 
          logo={logo}
          links={links}
          dropdownMenus={dropdownMenus}
          buttonText={buttonText}
          buttonUrl={buttonUrl}
        />
      </div>

      <div className="mt-4 flex flex-col gap-2">
        {hasMobile && (
          <img src={mobileSrc} alt="Mobile Nav" className="block lg:hidden w-auto h-16 object-cover" />
        )}
        {hasDesktop && (
          <img src={desktopSrc} alt="Desktop Nav" className="hidden lg:block w-auto h-16 object-cover" />
        )}
      </div>
    </nav>
  );
};