import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src";

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  
  let gPageType = "homepage";
  if(pageAndComponentCombo?.page?.pageIdentifier?.cmsType === "dynamic") {
    gPageType = "subComponentsPage";
  }
  
  return `
  query PageBySlug($slug: String!) {
    ${gPageType}(url: $slug) {
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
