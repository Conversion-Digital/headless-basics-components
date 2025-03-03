import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src";
import { log, logPrefix } from "@conversiondigital/headless-basics-data";

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(`${logPrefix()}[${pageAndComponentCombo.component.identifier}][${pageAndComponentCombo.page.source}][${pageAndComponentCombo.page.preliminarySlug}] query `);
  return `query GetPageBySlug($slug: String!) {
  allPage(where: { slug: { current: { eq: $slug } } }) {
    _id
    title
    description
    seo {
      metaTitle
      metaDescription
      metaImage {
        asset {
          url
        }
      }
    }
    meta {
      keywords
    }
    components{
        __typename
    }
  }
}

  `
}

export function getQuery() {
  return query
}
