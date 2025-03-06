import { log, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src"

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(`${logPrefix()}[productList][sanity-query][query] called for slug: ${pageAndComponentCombo?.page?.preliminarySlug}`)
  return `
    query GetProductListBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        _id
        _type
        components {
          __typename
          ... on ProductList {
            _key
            _type
            // Add productList fields here
          }
        }
      }
      allHomepage {
        _id
        _type
        components {
          __typename
          ... on ProductList {
            _key
            _type
            // Add productList fields here
          }
        }
      }
    }
  `
}

export function getQuery() {
  return query;
}