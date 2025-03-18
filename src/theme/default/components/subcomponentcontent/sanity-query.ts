import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src"
import { log, logPrefix } from "@conversiondigital/headless-basics-data"

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(`${logPrefix()}[${pageAndComponentCombo.component.identifier}][${pageAndComponentCombo.page.source}][${pageAndComponentCombo.page.preliminarySlug}] SANITY SUB COMPONENT QUERY `)
  const commonFields = `
    _id
    _type
    _createdAt
    _updatedAt
    _rev
    _key
    title
    description
    level
    sortOrder
    showInNavigation
    components {
        __typename
    }
  `
  return `query GetPageOrHomepageBySlug($slug: String!) {
    allPage(where: { slug: { current: { eq: $slug } } }) {
        ${commonFields}
        components {
          __typename

        }
    }
    allHomepage {
        ${commonFields}
        components {
          __typename

        }
    }
  }`
}
export function getQuery() {
  return query
}