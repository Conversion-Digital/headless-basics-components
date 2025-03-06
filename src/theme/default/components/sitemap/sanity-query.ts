import { log, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src"

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(`${logPrefix()}[sitemap][sanity-query][query] called for slug: ${pageAndComponentCombo?.page?.preliminarySlug}`)
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
          components {
            __typename
            ... on Sitemap {
              _key
              _type
              title
            }
          }
      }
    }
  `
}
export function getQuery() {
  return query;
}