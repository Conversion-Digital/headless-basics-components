import { log, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src"

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(`${logPrefix()}[richText][sanity-query][query] called for slug: ${pageAndComponentCombo?.page?.preliminarySlug}`)
  return `
    query GetRichTextBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        _id
        _type
        components {
          __typename
          ... on RichText {
            _key
            _type
            // Add richText fields here
          }
        }
      }
      allHomepage {
        _id
        _type
        components {
          __typename
          ... on RichText {
            _key
            _type
            // Add richText fields here
          }
        }
      }
    }
  `
}

export function getQuery() {
  return query;
}