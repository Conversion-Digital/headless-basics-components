import { log, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src"

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(`${logPrefix()}[alias][sanity-query][query] called for slug: ${pageAndComponentCombo?.page?.preliminarySlug}`)
  return `
    query GetAliasBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        _id
        _type
        components {
          __typename
          ... on Alias {
            _key
            _type
            // Add Alias fields here
          }
        }
      }
      allHomepage {
        _id
        _type
        components {
          __typename
          ... on Alias {
            _key
            _type
            // Add Alias fields here
          }
        }
      }
    }
  `
}

export function getQuery() {
  return query;
}