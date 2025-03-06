import { log, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src";

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(`${logPrefix()}[accordion][sanity-query][query] called for slug: ${pageAndComponentCombo?.page?.preliminarySlug}`);
  return `
    query GetAccordionBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        _id
        _type
        components {
          __typename
          ... on Accordion {
            _key
            _type
            title
            items {
              heading
              content
            }
          }
        }
      }
      allHomepage {
        _id
        _type
        components {
          __typename
          ... on Accordion {
            _key
            _type
            title
            items {
              heading
              content
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