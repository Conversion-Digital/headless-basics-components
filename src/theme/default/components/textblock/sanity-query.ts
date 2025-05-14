import { log, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src"

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(`${logPrefix()}[textblock][sanity-query][query] called for slug: ${pageAndComponentCombo?.page?.preliminarySlug}`)
  return `
    query GetTextBlockBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        _id
        _type
        components {
          __typename
          ... on TextBlock {
            _key
            _type
            body
          }
        }
      }
      allHomepage {
        _id
        _type
        components {
          __typename
          ... on TextBlock {
            _key
            _type
            body
          }
        }
      }
    }
  `
}

export function getQuery() {
  return query;
}