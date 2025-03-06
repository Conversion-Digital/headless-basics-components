import { log, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src"

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(`${logPrefix()}[productVideos][sanity-query][query] called for slug: ${pageAndComponentCombo?.page?.preliminarySlug}`)
  return `
    query GetProductVideosBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        _id
        _type
        components {
          __typename
          ... on ProductVideos {
            _key
            _type
            // Add productVideos fields here
          }
        }
      }
      allHomepage {
        _id
        _type
        components {
          __typename
          ... on ProductVideos {
            _key
            _type
            // Add productVideos fields here
          }
        }
      }
    }
  `
}

export function getQuery() {
  return query;
}