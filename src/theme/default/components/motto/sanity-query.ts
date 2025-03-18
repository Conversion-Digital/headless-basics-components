import { getLogger, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src"

export const log = getLogger("default.components.sanity.motto.query")

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(`${logPrefix()}[motto][sanity-query][query] for slug: ${pageAndComponentCombo?.page?.preliminarySlug}`)
  return `
    query GetMottoBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        _id
        _type
        components {
          __typename
          ... on Motto {
            _key
            _type
            words
          }
        }
      }
      allHomepage {
        _id
        _type
        components {
          __typename
          ... on Motto {
            _key
            _type
            words
          }
        }
      }
    }
  `
}
export function getQuery() {
  return query
}