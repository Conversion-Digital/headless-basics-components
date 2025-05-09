import { log, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src";

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(`${logPrefix()}[postNote][sanity-query][query] called for slug: ${pageAndComponentCombo?.page?.preliminarySlug}`);
  return `
    query GetPostNoteBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        components {
          __typename
          ... on PostNote {
            __typename
            _key
            _type
            title
            date
            description
            drawOutlineTime
            fadeInTime
            animationDelay
            width
            height
          }
        }
      }
    }
  `;
}

export function getQuery() {
  return query;
}
