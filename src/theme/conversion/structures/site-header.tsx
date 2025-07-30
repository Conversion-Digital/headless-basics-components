'use client';

import { SiteHeaderProps } from "../../../interfaces/siteHeaderProps";
import { GlobalTailwindNavigationMenu } from "../../../components/global-navigation";
import Logo from "../../../components/media/logo";
import { ImageInputProps } from "../../../interfaces/Images";
import { getLogger, logPrefix, processURLForNavigation } from "@conversiondigital/headless-basics-data";
import Link from "next/link";
import { BurgerMenuIcon } from "../../../icons/BurgerMenuIcon";
import { useState } from "react";

const log = getLogger("theme.conversion.structures.site-header");

export function SiteHeader({ blueprint, isMegamenu = false, megaMenuMenu }: SiteHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  let navItems: string | any[] | undefined = [];
  if (blueprint?.navItems) {
    navItems = blueprint.navItems;
    log.trace(`${logPrefix()} NavItems: ${JSON.stringify(navItems)}`)
  }

  const languageSite = blueprint?.pageData?.languageSite;
  if (!languageSite) {
    log.error(`${logPrefix()}[SiteHeader] languageSite is not defined`);
    return null;
  }

  return (
    <div data-role="Header" className="w-full bg-white shadow-md sticky top-0 z-50">
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href={processURLForNavigation("/", languageSite)}>
            <Logo image={blueprint?.siteSettings?.logo as ImageInputProps} className="h-12 w-auto" />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <GlobalTailwindNavigationMenu 
              navClasses="flex flex-row items-center space-x-6" 
              navItems={navItems} 
            />
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <BurgerMenuIcon className="h-6 w-6" />
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <GlobalTailwindNavigationMenu 
              navClasses="flex flex-col space-y-4" 
              navItems={navItems} 
            />
          </nav>
        )}
      </header>
    </div>
  )
}
