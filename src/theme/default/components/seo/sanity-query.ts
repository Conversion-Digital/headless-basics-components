import { log, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src"

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(`${logPrefix()}[seo][sanity-query][query] called for slug: ${pageAndComponentCombo?.page?.preliminarySlug}`)

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
        // minimal placeholder
      }
    }
  `
}

export function getQuery() {
  return query
}