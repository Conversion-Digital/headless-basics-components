import React, { Fragment } from "react";
import Link from "next/link";
import { ISitemapItem } from "../../interfaces/sitemap";
import { LanguageSite } from "@conversiondigital/headless-basics-data/src/interfaces"
import { processURLForNavigation } from "../../utils/url";
import { levelMarginClasses } from "../../utils/constants";

export interface GenerateLinkProps {
  item: ISitemapItem;
  languageSite: LanguageSite | undefined;
  isLink: boolean;
}

const LinkGenerator = ({ item, languageSite, isLink }: GenerateLinkProps) => {
  const { id, url, name, level } = item;

  const className = `${levelMarginClasses[level] || "ml-4"} mr-2`;

  return (
    <div className={className}>
      {isLink ? (
        <Fragment key={`link-${url}-${id}`}>
          <Link href={processURLForNavigation(url, languageSite)} className="text-base font-semibold underline inline-block py-1">
            {name}
          </Link>
        </Fragment>
      ) : (
        <label>{name}</label>
      )}
    </div>
  );
};

export default LinkGenerator;
