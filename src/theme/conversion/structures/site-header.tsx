'use client';

import { SiteHeaderProps } from "../../../interfaces/siteHeaderProps";
import Logo from "../../../components/media/logo";
import { ImageInputProps } from "../../../interfaces/Images";
import { getLogger, logPrefix, processURLForNavigation } from "@conversiondigital/headless-basics-data";
import Link from "next/link";
import { BurgerMenuIcon } from "../../../icons/BurgerMenuIcon";
import { useState } from "react";
import CdnavDefaultVariant from "../components/navigation/components/variants/cdnavDefaultVariant";

const log = getLogger("theme.conversion.structures.site-header");

export function SiteHeader({ blueprint, isMegamenu = false, megaMenuMenu }: SiteHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  let navItems: string | any[] | undefined = [];
  log.debug(`${logPrefix()} site-header.tsx blueprint received`);
  log.debug(`${logPrefix()} site-header.tsx blueprint?.navItems exists: ${!!blueprint?.navItems}`);
  log.debug(`${logPrefix()} site-header.tsx blueprint?.navItems length: ${blueprint?.navItems?.length || 0}`);
  
  if (blueprint?.navItems) {
    navItems = blueprint.navItems;
    log.debug(`${logPrefix()} site-header.tsx NavItems received: ${JSON.stringify(navItems, null, 2)}`);
  } else {
    log.debug(`${logPrefix()} site-header.tsx No navItems found in blueprint!`);
  }

  const languageSite = blueprint?.pageData?.languageSite;
  if (!languageSite) {
    log.error(`${logPrefix()}[SiteHeader] languageSite is not defined`);
    return null;
  }

  // Handle navigation data extraction - check if navItems is the navigation object itself
  let navigationData = null;
  if (navItems && Array.isArray(navItems) && navItems.length > 0) {
    navigationData = navItems[0];
    log.debug(`${logPrefix()} site-header.tsx Using first item from navItems array`);
  } else if (navItems && typeof navItems === 'object' && !Array.isArray(navItems) && navItems.__typename === 'Navigation') {
    // navItems is actually the navigation object itself, not an array
    navigationData = navItems;
    log.debug(`${logPrefix()} site-header.tsx Using navItems directly as navigation data`);
  } else if (navItems && typeof navItems === 'object' && !Array.isArray(navItems)) {
    // navItems might be the navigation object without __typename check
    navigationData = navItems;
    log.debug(`${logPrefix()} site-header.tsx Using navItems as navigation object (no __typename check)`);
  }
  log.debug(`${logPrefix()} site-header.tsx navigationData extracted: ${JSON.stringify(navigationData, null, 2)}`);

  // For now, let's render a simple navigation header while we debug
  if (!navigationData) {
    log.error(`${logPrefix()} site-header.tsx No navigation data found`);
    return (
      <div data-role="Header" className="w-full bg-white shadow-md sticky top-0 z-50">
        <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href={processURLForNavigation("/", languageSite)}>
              <Logo image={blueprint?.siteSettings?.logo as ImageInputProps} className="h-12 w-auto" />
            </Link>
            <div className="text-gray-600">Navigation Loading...</div>
          </div>
        </header>
      </div>
    );
  }

  // Try to use the conversion navigation component with proper data
  try {
    return (
      <CdnavDefaultVariant matchingData={navigationData} />
    );
  } catch (error) {
    log.error(`${logPrefix()} site-header.tsx Error rendering CdnavDefaultVariant:`, error);
    // Fallback to simple header
    return (
      <div data-role="Header" className="w-full bg-white shadow-md sticky top-0 z-50">
        <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href={processURLForNavigation("/", languageSite)}>
              <Logo image={blueprint?.siteSettings?.logo as ImageInputProps} className="h-12 w-auto" />
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <span className="text-gray-600">Navigation Error</span>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}
