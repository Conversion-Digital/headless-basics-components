import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src/interfaces"
import { getLogger } from "@conversiondigital/headless-basics-data/src/services/logging/LogConfig"

const log = getLogger("conversion.components.herobanner.sanity-query");

export function query(pageAndComponentCombo: PageAndSingleComponentDetails){
  log.trace(`[herobanner][sanity-query][query] called for slug: ${pageAndComponentCombo?.page?.preliminarySlug}`)
  return `
    query GetHerobannerBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        components {
          __typename
          ... on Herobanner {
            __typename
            _key
            _type
            selectableVariant
            title
            subtitle
            image {
              asset {
                url
              }
            }
            altText
            button {
              label
              link
            }
            sortOrder
            globalComponentSource {
              __typename
              _key
              _type
              title
              subtitle
              image {
                asset {
                  url
                }
              }
              altText
              button {
                label
                link
              }
            }
          }
        }
      }
      allHomepage {
        components {
          __typename
          ... on Herobanner {
            __typename
            _key
            _type
            selectableVariant
            title
            subtitle
            image {
              asset {
                url
              }
            }
            altText
            button {
              label
              link
            }
            sortOrder
            globalComponentSource {
              __typename
              _key
              _type
              title
              subtitle
              image {
                asset {
                  url
                }
              }
              altText
              button {
                label
                link
              }
            }
          }
        }
      }
    }
  `
}

export function getQuery(){
  return query
}