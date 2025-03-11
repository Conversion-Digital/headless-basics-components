import { log, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src"

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(`${logPrefix()}[footer][sanity-query][query] called for slug: ${pageAndComponentCombo?.page?.preliminarySlug}`)
  return `
    query Page {
      allPage {
        _id
        _type
        title
        description
        components {
          __typename
        }
      }
    }
  `
}
export function getQuery() {
  return query
}