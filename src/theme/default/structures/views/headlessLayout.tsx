import React, { lazy } from "react"
import { getLogger, logPrefix } from "@conversiondigital/headless-basics-data"

import { PageBlueprint } from "@conversiondigital/headless-basics-data/src/interfaces"

import dynamic from "next/dynamic";
import { FooterProps } from "../navigation/footer/footer";
import { SiteHeaderProps } from "../../../../interfaces/siteHeaderProps";

const log = getLogger("page.renderPageContents");
interface LayoutProps {
  children: React.ReactNode
  className?: string
  bluePrint: PageBlueprint
  isMegamenu?: boolean
  megaMenuMenu?: any
}
export function HeadlessLayout({
  children,
  className,
  bluePrint,
  isMegamenu,
  megaMenuMenu,
}: LayoutProps) {
  log.trace(`${logPrefix()} HeadlessLayout`);
  var GoogleTagManagerId = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;
  const noScriptString = `
  <noscript>
    <iframe
      src="https://www.googletagmanager.com/ns.html?id=${GoogleTagManagerId}"
      height="0"
      width="0"
      style="display:none;visibility:hidden">
    </iframe>
  </noscript>
`;
  let structuredData:any = {};
  try {
    structuredData = JSON.parse(bluePrint?.seoItems?.structuredData as string);
  }catch(e) {
    log.trace(`${logPrefix()} Error parsing structured data: ${e}`);
  }

  const siteTheme = process.env.SITE_THEME || 'default';
  
  const SiteHeader = dynamic<SiteHeaderProps>(() =>
    import(`@conversiondigital/headless-basics-components/src/theme/${siteTheme}/structures/site-header`).then(
      (mod) => mod.SiteHeader || mod.default
    )
  );

  const SiteFooter = dynamic<FooterProps>(() =>
    import(`@conversiondigital/headless-basics-components/src/theme/${siteTheme}/structures/navigation/footer/footer`).then(
      (mod) => mod.SiteFooter || mod.default
    )
  );

  return (
    <>
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
      <div dangerouslySetInnerHTML={{ __html: noScriptString }} />
      <div className={className}>    
          <SiteHeader
            blueprint={bluePrint}
            isMegamenu={isMegamenu}
            megaMenuMenu={megaMenuMenu}
          />
      </div>
      <main>{children}</main>
      <div className="w-full">
      {bluePrint?.footerItems && (
         <> 
          <SiteFooter
            variant="twoLogoHorizontalLinksPlusCopyright"
            className="bg-primary p-10 text-secondary-content"
            center={false}
            data={bluePrint.footerItems}
            isLive={true}
            languageSite={bluePrint?.pageData?.languageSite}
          />
          </>
        )}
      </div>
    </>
  )
}