"use client"

import { LanguageSite } from "@conversiondigital/cd-headless-data/src";
import dynamic from "next/dynamic"

const SimpleAnchorLists = dynamic(() => import("./SimpleAnchorLists"))

interface SimpleAnchorListsClientLoaderProps {
  links: any[];
  className?: string;
  useNextLink?: boolean;
  linkClassName?: string;
  languageSite?: LanguageSite;
}

export default function SimpleAnchorListsClientLoader({
  links,
  className,
  useNextLink,
  linkClassName = "",
  languageSite, // replace "defaultLanguageSite" with an appropriate default value of type LanguageSite
}: SimpleAnchorListsClientLoaderProps) {

  if(!languageSite) {
    return (<></>)
  }

  return (
    <>
      <SimpleAnchorLists
        links={links ?? []}
        className={className ?? ""}
        useNextLink={useNextLink}
        linkClassName={linkClassName ?? ""}
        languageSite={languageSite}
      />
    </>
  )
}
