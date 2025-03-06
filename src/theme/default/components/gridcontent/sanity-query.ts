import { log, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src"

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(`${logPrefix()}[gridContent][sanity-query][query] called for slug: ${pageAndComponentCombo?.page?.preliminarySlug}`)
  return `
    query GetGridContentBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        _id
        _type
        components {
          __typename
          ... on GridContent {
            _key
            _type
            // Add gridContent fields here
          }
        }
      }
      allHomepage {
        _id
        _type
        components {
          __typename
          ... on GridContent {
            _key
            _type
            // Add gridContent fields here
          }
        }
      }
    }
  `
}

export function getQuery() {
  return query;
}