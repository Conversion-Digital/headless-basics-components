"use client"

import dynamic from "next/dynamic"
import { LanguageSite } from "@conversiondigital/headless-basics-data/src/interfaces"

const StickyNavigation = dynamic(() => import("./StickyNavigation"))

interface StickyNavigationLoaderProps {
  stickyNavItems: any;
  languageSite: LanguageSite;
}

export default function StickyNavigationLoader({
  stickyNavItems,
  languageSite,
}: StickyNavigationLoaderProps) {
  return (
    <>
      <StickyNavigation data={stickyNavItems} languageSite={languageSite} />
    </>
  )
}
