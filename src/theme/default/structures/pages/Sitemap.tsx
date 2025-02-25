import { ISitemapItem } from '../../../../interfaces/sitemap';
import Breadcrumbs from '../../../../components/breadcrumbs/Breadcrumbs';
import Sitemap from '../../../../components/sitemap/Sitemap';

import { PageBlueprint, IndividualComponentProps } from "@conversiondigital/cd-headless-data/src/interfaces"

interface SitemapPageProps<T> {
  blueprint: PageBlueprint;
  LayoutComponent: React.ComponentType<T>;
  layoutProps: T;
}

export function SitemapPage<T>({ blueprint, LayoutComponent, layoutProps }: SitemapPageProps<T>) {
  let breadcrumbCustom = blueprint?.breadcrumbItems;
  const href = blueprint?.pageData?.languageSite?.countryCode !== "us"
    ? `/${blueprint?.pageData?.languageSite?.countryCode}/sitemap`
    : "/sitemap";

  breadcrumbCustom?.links?.push({ href, text: "Sitemap" });

  return (
    <LayoutComponent
      {...layoutProps}
      className={"flex w-full flex-col items-center"}
      blueprint={blueprint}
    >
      <div className="mx-auto py-12">
        <div className="w-full container">
          <Breadcrumbs
            data={blueprint?.breadcrumbItems}
            seperatorIcon={<span>/</span>}
            itemClassName="uppercase font-urbanist text-my-blue font-500 text-xs tracking-0.1em no-underline mb-2.5"
            slug={'/sitemap'}
          />
        </div>
        <div className="sitemap-link-sections w-full container flex flex-wrap">
          <h2 className="text-5xl mt-11 font-bold uppercase text-my-black ml-4">Sitemap</h2>
          <Sitemap sitemapList={blueprint?.sitemapData as ISitemapItem[]} languageSite={blueprint?.pageData?.languageSite} />
        </div>
      </div>
    </LayoutComponent>
  );
}
