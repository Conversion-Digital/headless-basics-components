import { log, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src";

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  return `
    query GetHeaderBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        components {
          __typename
          ... on Header {
            __typename
            _key
            _type
            title
            subtitle
            className
            backgroundColor
            isSticky
          }
        }
      }
    }
  `;
}

export function getQuery() {
  return query;
}
