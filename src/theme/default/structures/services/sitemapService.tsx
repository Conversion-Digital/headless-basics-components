import dynamic from "next/dynamic";
import React from "react";
import { getLogger } from "@conversiondigital/cd-headless-data";
import { PageBlueprint } from "@conversiondigital/cd-headless-data/src/interfaces";

const log = getLogger("headless.services.sitemapService");

// Create a default layout component (for example, a fragment wrapper)
const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => <>{children}</>;

// Adjust the dynamic import type to match the actual props of SitemapPage.
const DynamicPage_Sitemap = dynamic(
  () =>
    import("../../structures/pages/Sitemap").then(
      (module) => module.SitemapPage
    ),
  { ssr: true }
) as React.ComponentType<{
  blueprint: PageBlueprint;
  LayoutComponent: React.ComponentType<any>;
  layoutProps: any;
}>;

export function getDynamicSitemap(data: PageBlueprint) {
  log.trace("getDynamicSitemap siteName:", data?.siteSettings?.name);

  // Wrap the dynamic component and supply default values for LayoutComponent and layoutProps.
  const DynamicSitemap = ({ data }: { data: PageBlueprint }) => {
    return (
      <DynamicPage_Sitemap
        blueprint={data}
        LayoutComponent={DefaultLayout}
        layoutProps={{}}
      />
    );
  };

  return DynamicSitemap;
}
