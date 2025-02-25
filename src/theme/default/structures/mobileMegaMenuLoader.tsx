"use client"

import dynamic from "next/dynamic"

const MobileMegaMenu = dynamic(() => import("./MobileMegaMenu"))

interface MobileMegaMenuLoaderProps {
  navItems: any; // Replace 'any' with the appropriate type
  stickyNavData: any; // Replace 'any' with the appropriate type
  languageSite: any; // Replace 'any' with the appropriate type
  className?: string;
}

export default function MobileMegaMenuLoader({
  navItems,
  stickyNavData,
  languageSite,
  className = "",
}: MobileMegaMenuLoaderProps) {
  return (
    <>
      <MobileMegaMenu
        navItems={navItems}
        stickyNavData={stickyNavData}
        languageSite={languageSite}
        className={className}
      />
    </>
  )
}
