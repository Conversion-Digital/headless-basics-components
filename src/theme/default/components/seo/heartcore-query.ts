import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src";

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  return `
  query PageBySlug($slug: String!) {
    ${pageAndComponentCombo?.page?.pageIdentifier?.cmsType}(url: $slug) {
      name
      id
      slug: url
      contentTypeAlias
      sEOTitle
      sEODescription
      ogDescription
      updateDate
      ogImage {
          url
      }
      canonicalURLAbsolute
      canonicalURLContentItem {
          url
      }
      structuredData
      noIndexPage
      alternateMultiURLs {
        url
        name
        target
        type
        udi
      }
    }
  }`;
}

export function getQuery() {
  return query;
}
