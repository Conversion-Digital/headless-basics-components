import { getLogger, PageAndSingleComponentDetails } from "@conversiondigital/cd-headless-data/src";

const log = getLogger("theme.components.seo.mapping");

export function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace("theme mapIdentifierData", JSON.stringify(pageAndComponentCombo?.component?.data));
  const cmsType = pageAndComponentCombo?.page?.pageIdentifier.cmsType;
  interface ResultType {
    name?: string;
    sEOTitle?: string;
    sEODescription?: string;
    ogDescription?: string;
    ogImage?: string;
    canonicalURLAbsolute?: string;
    canonicalURLContentItem?: string;
    structuredData?: string;
    noIndexPage?: boolean;
    alternateMultiURLs?: string[];
  }

  const result: ResultType = cmsType ? (pageAndComponentCombo?.component?.data?.[cmsType] as ResultType) : {};
  const seoResult = {
    name: result?.name,
    seoTitle: result?.sEOTitle,
    seoDescription: result?.sEODescription,
    ogDescription: result?.ogDescription,
    ogImage: result?.ogImage,
    canonicalURLAbsolute: result?.canonicalURLAbsolute,
    canonicalURLContentItem: result?.canonicalURLContentItem,
    structuredData: result?.structuredData,
    noIndexPage: result?.noIndexPage,
    alternateMultiURLs: result?.alternateMultiURLs
  };
  return seoResult;
}
