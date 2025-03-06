import { log, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src"

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(`${logPrefix()}[googlemaps][sanity-query][query] called for slug: ${pageAndComponentCombo?.page?.preliminarySlug}`)
  return `
    query GetGoogleMapsBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        _id
        _type
        components {
          __typename
          ... on GoogleMaps {
            _key
            _type
            // Add googlemaps fields here
          }
        }
      }
      allHomepage {
        _id
        _type
        components {
          __typename
          ... on GoogleMaps {
            _key
            _type
            // Add googlemaps fields here
          }
        }
      }
    }
  `
}

export function getQuery() {
  return query;
}