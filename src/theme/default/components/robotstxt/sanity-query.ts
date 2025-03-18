import { log, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src"

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(`${logPrefix()}[robotstxt][sanity-query][query] called for slug: ${pageAndComponentCombo?.page?.preliminarySlug}`)
  return `
    query GetRobotstxtBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        _id
        _type
        components {
          __typename
          ... on Robotstxt {
            _key
            _type
            snippetCode
          }
        }
      }
      allHomepage {
        _id
        _type
        components {
          __typename
          ... on Robotstxt {
            _key
            _type
            snippetCode
          }
        }
      }
    }
  `
}
export function getQuery() {
  return query;
}