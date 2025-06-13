import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src/interfaces"

export function query(pageAndComponentCombo: PageAndSingleComponentDetails): string {
  return `
    query GetCdservicestatsBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        components {
          __typename
          ... on Cdservicestats {
            __typename
            _key
            _type
            selectableVariant
            stats {
              value
              description
            }
            sortOrder
            globalComponentSource {
              __typename
              _key
              _type
              stats {
                value
                description
              }
            }
          }
        }
      }
      allServicePage {
        components {
          __typename
          ... on Cdservicestats {
            __typename
            _key
            _type
            selectableVariant
            stats {
              value
              description
            }
            sortOrder
            globalComponentSource {
              __typename
              _key
              _type
              stats {
                value
                description
              }
            }
          }
        }
      }
    }
  `
} 