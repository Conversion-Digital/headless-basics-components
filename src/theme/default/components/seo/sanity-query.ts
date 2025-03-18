import { log, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src"

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(`${logPrefix()}[seo][sanity-query][query] called for slug: ${pageAndComponentCombo?.page?.preliminarySlug}`)
  return `
    query GetPageBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        _id
        title
        description
        seo {
          metaTitle
          metaDescription
          metaImage {
            asset {
              url
            }
          }
        }
        meta {
          keywords
        }
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