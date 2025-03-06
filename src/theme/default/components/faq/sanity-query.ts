import { log, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src";

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(`${logPrefix()}[faq][sanity-query][query] called for slug: ${pageAndComponentCombo?.page?.preliminarySlug}`);
  return `
    query GetFaqBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        _id
        _type
        components {
          __typename
          ... on Faq {
            _key
            _type
            heading
            text
          }
        }
        parent{
          __typename
          ... on Homepage {
            title
          }
          ... on Page {
            title
            level
            parent{
              __typename
              ... on Page {
                title
                level
              }
            }
          }
        }
      }
    }
  `;
}

export function getQuery() {
  return query;
}