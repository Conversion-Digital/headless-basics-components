'use client'
import React, { useState } from "react";

interface MobileNavigationProps {
  logo: string | null;
  links: any[];
  dropdownMenus: any[];
  buttonText: string;
  buttonUrl: string;
}

export default function MobileNavigation({ 
  logo, 
  links, 
  dropdownMenus, 
  buttonText, 
  buttonUrl 
}: MobileNavigationProps) {
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
    <>
      {/* Mobile Navigation Header */}
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
    </>
  );
};