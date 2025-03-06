import { log, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src"

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(`${logPrefix()}[ctaList][sanity-query][query] called for slug: ${pageAndComponentCombo?.page?.preliminarySlug}`)
  return `
    query GetCtaListBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        _id
        _type
        components {
          __typename
          ... on CtaList {
            _key
            _type
            // Add ctaList fields here
          }
        }
      }
      allHomepage {
        _id
        _type
        components {
          __typename
          ... on CtaList {
            _key
            _type
            // Add ctaList fields here
          }
        }
      }
    }
  `
}

export function getQuery() {
  return query;
}