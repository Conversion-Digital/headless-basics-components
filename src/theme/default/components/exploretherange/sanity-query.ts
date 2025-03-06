import { log, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src"

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(`${logPrefix()}[exploreTheRange][sanity-query][query] called for slug: ${pageAndComponentCombo?.page?.preliminarySlug}`)
  return `
    query GetExploreTheRangeBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        _id
        _type
        components {
          __typename
          ... on ExploreTheRange {
            _key
            _type
            // Add exploreTheRange fields here
          }
        }
      }
      allHomepage {
        _id
        _type
        components {
          __typename
          ... on ExploreTheRange {
            _key
            _type
            // Add exploreTheRange fields here
          }
        }
      }
    }
  `
}

export function getQuery() {
  return query;
}