import React from "react";
import { Accordion } from "../accordion";
import { ISitemapItem } from "../../interfaces/sitemap";
import SitemapItem from "./SitemapItem";
import { LanguageSite } from "@conversiondigital/headless-basics-data/src/interfaces"

export interface SitemapProps {
  sitemapList: ISitemapItem[];
  languageSite: LanguageSite | undefined;
}

const Sitemap = ({ sitemapList, languageSite }: SitemapProps) => {
  return (
    <Accordion
      className="AccordionRoot border-my-blue w-full mt-6 [&>*:first-child>h3>button>div>a]:text-2xl [&>*:first-child>h3]:pb-5 [&>*:first-child>h3>button>div>a]:underline [&>*:first-child>h3>button>div>a]:text-my-yellow"
      type="single"
      defaultValue="item-1"
      collapsible
    >
      {sitemapList && sitemapList?.map((item) => (
        <SitemapItem key={item.id} item={item} languageSite={languageSite} />
      ))}
    </Accordion>
  );
};

export default Sitemap;
