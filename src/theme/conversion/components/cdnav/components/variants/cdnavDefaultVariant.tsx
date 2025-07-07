'use client'
import React, { useState } from "react";
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

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<number[]>([]);

  const toggleDropdown = (index: number) => {
    setOpenDropdowns(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <nav className={`${isTransparent ? "bg-transparent" : "bg-[#FFFFFF]"} text-[#000] p-4 sticky top-0 z-50`}>
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
                  <button className="text-center text-Color-Navy text-xl tracking-wide hover:underline hover:decoration-[#800928] hover:underline-offset-8 pt-[6px] pb-[5px] flex items-center gap-1">
                    {dropdownMenus[0].label}
                    <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-gray-400 group-hover:border-t-[#0D0E47] transition-transform duration-300 group-hover:rotate-180" />
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
                          <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-gray-400 group-hover/nested:border-t-[#0D0E47] transition-transform duration-300 group-hover/nested:rotate-90" />
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
                <div key={idx} className="text-center justify-start text-Color-Navy tracking-wide">
                  <a href={linkItem.url ?? "#"} className="hover:underline hover:decoration-[#800928] hover:underline-offset-8 pt-[6px] pb-[5px]">
                    {linkItem.label ?? "Nav Link"}
                  </a>
                </div>
              ))}
            </div>
            <a 
              href={buttonUrl}
              className="bg-[#800928] hover:bg-blue-950 font-semibold text-xl text-white px-10 py-4 rounded-full hover:bg-opacity-80 transition-colors inline-flex justify-center items-center gap-2.5"
            >
              {buttonText}
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex justify-between items-center">
          <div>
            {logo ? (
              <div>
                <img src={logo} alt="Nav Logo" className="w-[120px] h-[48px] object-contain" />
              </div>
            ) : (
              <p>No Logo</p>
            )}
          </div>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative w-8 h-8 flex flex-col justify-center items-center focus:outline-none group"
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
          >
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 mt-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-white shadow-lg rounded-lg mt-4 border border-gray-200">
            {links.map((linkItem: any, idx: number) => (
              <a 
                key={idx}
                href={linkItem.url ?? "#"} 
                className="block py-3 px-4 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {linkItem.label ?? "Nav Link"}
              </a>
            ))}
            {dropdownMenus.map((menu: any, idx: number) => (
              <div key={idx} className="border-b border-gray-100 last:border-b-0">
                <button 
                  onClick={() => toggleDropdown(idx)}
                  className="w-full text-left py-3 px-4 font-semibold hover:bg-gray-50 transition-colors flex justify-between items-center"
                  aria-expanded={openDropdowns.includes(idx)}
                >
                  {menu.label}
                  <span className={`transition-transform duration-200 ${openDropdowns.includes(idx) ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openDropdowns.includes(idx) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  {menu.dropdownLinks?.map((link: any, linkIdx: number) => (
                    <a 
                      key={linkIdx}
                      href={link.url ?? "#"} 
                      className="block py-2 pl-8 pr-4 hover:bg-gray-50 transition-colors text-gray-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label ?? "Dropdown Link"}
                    </a>
                  ))}
                </div>
              </div>
            ))}
            <div className="p-4">
              <a 
                href={buttonUrl}
                className="block w-full text-center bg-[#800928] hover:bg-blue-950 font-semibold text-white px-6 py-3 rounded-full hover:bg-opacity-80 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {buttonText}
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu Backdrop */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-25 z-[-1] lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
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