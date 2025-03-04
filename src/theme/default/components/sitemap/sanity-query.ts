import { log, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src";

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(`${logPrefix()} query`);
  return `
    query Page {
      allPage {
          _id
          _type
          _createdAt
          _updatedAt
          _rev
          _key
          title
          description
          ... on Page{
              showInNavigation
              level
              slug{
                  __typename
                  _key
                  _type
                  current
                  source
              }
          }
      }
  }
  `;
}

export function getQuery() {
  return query;
}
