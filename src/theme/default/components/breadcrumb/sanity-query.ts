import { log, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src"

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(`${logPrefix()}[breadcrumb][sanity-query][query] called for slug: ${pageAndComponentCombo?.page?.preliminarySlug}`)
  return `
    query GetPageBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
            _id
            _type
            _createdAt
            _updatedAt
            _rev
            _key
            title
            description
            components {
                __typename
                ... on Breadcrumb {
                  _key
                  _type
                  heading
                }
            }
            parent{
                __typename
                ... on Homepage {
                    title
                }
                ... on Page {
                    title
                    level
                    parent{
                        __typename
                        ... on Page {
                            title
                            level
                        }
                    }
                }
            }
        }
    }
  `
}
export function getQuery() {
  return query
}