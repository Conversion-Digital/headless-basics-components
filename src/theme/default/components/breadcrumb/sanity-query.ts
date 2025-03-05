import { log, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src"

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(`${logPrefix()}[breadcrumb][sanity-query][query] called for slug: ${pageAndComponentCombo?.page?.preliminarySlug}`)

  return `
    query Page {
      allPage {
        _id
        _type
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