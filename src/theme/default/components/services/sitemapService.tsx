import { getLogger, PageBlueprint } from "@conversiondigital/headless-basics-data/src";
import dynamic from "next/dynamic";

const DynamicATAPage_Sitemap = dynamic(() => import('../../structures/pages/Sitemap').then((module) => module.SitemapPage as unknown as React.ComponentType<PageBlueprint>), { ssr: true });
const log = getLogger("headless.services.sitemapService");

  export function getDynamicSitemap(data: PageBlueprint) {
    log.trace("getDynamicSitemap siteName:", data?.siteSettings?.name)

    const DynamicSitemap = ({ data }: { data: PageBlueprint }) => {
      return <DynamicATAPage_Sitemap {...data}  />;
    };

    return DynamicSitemap;
  }
