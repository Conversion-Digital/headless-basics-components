import { log, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src"

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(`${logPrefix()}[productDownloads][sanity-query][query] called for slug: ${pageAndComponentCombo?.page?.preliminarySlug}`)
  return `
    query GetProductDownloadsBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        _id
        _type
        components {
          __typename
          ... on ProductDownloads {
            _key
            _type
            // Add productDownloads fields here
          }
        }
      }
      allHomepage {
        _id
        _type
        components {
          __typename
          ... on ProductDownloads {
            _key
            _type
            // Add productDownloads fields here
          }
        }
      }
    }
  `
}

export function getQuery() {
  return query;
}