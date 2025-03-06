import { log, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src";

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(`${logPrefix()}[videoSection][sanity-query][query] called for slug: ${pageAndComponentCombo?.page?.preliminarySlug}`);
  return `
    query GetVideoSectionBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        _id
        _type
        components {
          __typename
          ... on VideoSection {
            _key
            _type
            // Add videoSection fields here
          }
        }
      }
      allHomepage {
        _id
        _type
        components {
          __typename
          ... on VideoSection {
            _key
            _type
            // Add videoSection fields here
          }
        }
      }
    }
  `
}

export function getQuery() {
  return query;
}