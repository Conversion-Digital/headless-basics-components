import { log, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src"

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(`${logPrefix()}[gallery][sanity-query][query] called for slug: ${pageAndComponentCombo?.page?.preliminarySlug}`)
  return `
    query GetGalleryBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        _id
        _type
        components {
          __typename
          ... on Gallery {
            _key
            _type
            // Add Gallery fields here
          }
        }
      }
      allHomepage {
        _id
        _type
        components {
          __typename
          ... on Gallery {
            _key
            _type
            // Add Gallery fields here
          }
        }
      }
    }
  `
}

export function getQuery() {
  return query;
}