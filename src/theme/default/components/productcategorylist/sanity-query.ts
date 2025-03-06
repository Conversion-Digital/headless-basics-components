import { log, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src"

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(`${logPrefix()}[productCategoryList][sanity-query][query] called for slug: ${pageAndComponentCombo?.page?.preliminarySlug}`)
  return `
    query GetProductCategoryListBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        _id
        _type
        components {
          __typename
          ... on ProductCategoryList {
            _key
            _type
            // Add productCategoryList fields here
          }
        }
      }
      allHomepage {
        _id
        _type
        components {
          __typename
          ... on ProductCategoryList {
            _key
            _type
            // Add productCategoryList fields here
          }
        }
      }
    }
  `
}

export function getQuery() {
  return query;
}