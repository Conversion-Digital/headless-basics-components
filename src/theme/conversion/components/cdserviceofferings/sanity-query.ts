import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src/interfaces"

export function query(pageAndComponentCombo: PageAndSingleComponentDetails): string {
  return `
    query GetCdserviceofferingsBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        components {
          __typename
          ... on Cdserviceofferings {
            __typename
            _key
            _type
            selectableVariant
            title
            intro
            offerings {
              title
              icon
              id {
                current
              }
            }
            sortOrder
            globalComponentSource {
              __typename
              _key
              _type
              title
              intro
              offerings {
                title
                icon
                id {
                  current
                }
              }
            }
          }
        }
      }
      allServicePage {
        components {
          __typename
          ... on Cdserviceofferings {
            __typename
            _key
            _type
            selectableVariant
            title
            intro
            offerings {
              title
              icon
              id {
                current
              }
            }
            sortOrder
            globalComponentSource {
              __typename
              _key
              _type
              title
              intro
              offerings {
                title
                icon
                id {
                  current
                }
              }
            }
          }
        }
      }
    }
  `
} 