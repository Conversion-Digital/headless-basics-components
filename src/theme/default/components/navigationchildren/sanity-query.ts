import { log, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src"

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(`${logPrefix()}[navigationChildren][sanity-query][query] called for slug: ${pageAndComponentCombo?.page?.preliminarySlug}`)
  return `
    query GetNavigationChildrenBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        _id
        _type
        components {
          __typename
          ... on NavigationChildren {
            _key
            _type
            // Add navigationChildren fields here
          }
        }
      }
      allHomepage {
        _id
        _type
        components {
          __typename
          ... on NavigationChildren {
            _key
            _type
            // Add navigationChildren fields here
          }
        }
      }
    }
  `
}

export function getQuery() {
  return query;
}