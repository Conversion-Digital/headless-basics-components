import { log, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src"

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(`${logPrefix()}[productDetails][sanity-query][query] called for slug: ${pageAndComponentCombo?.page?.preliminarySlug}`)
  return `
    query GetProductDetailsBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        _id
        _type
        components {
          __typename
          ... on ProductDetails {
            _key
            _type
            // Add productDetails fields here
          }
        }
      }
      allHomepage {
        _id
        _type
        components {
          __typename
          ... on ProductDetails {
            _key
            _type
            // Add productDetails fields here
          }
        }
      }
    }
  `
}

export function getQuery() {
  return query;
}