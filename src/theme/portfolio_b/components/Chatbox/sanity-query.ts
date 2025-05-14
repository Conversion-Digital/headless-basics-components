import { log, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src";

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  return `
    query GetChatBoxBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        components {
          __typename
          ... on ChatBox {
            __typename
            _key
            _type
            message
            width
            height
            animationDuration
            variant
            contentAlignment
          }
        }
      }
    }
  `;
}

export function getQuery() {
  return query;
}
