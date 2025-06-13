import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src/interfaces"

export function query(pageAndComponentCombo: PageAndSingleComponentDetails): string {
  return `
    query GetCdservicedetailBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        components {
          __typename
          ... on Cdservicedetail {
            __typename
            _key
            _type
            selectableVariant
            services {
              title
              id {
                current
              }
              content
            }
            sortOrder
            globalComponentSource {
              __typename
              _key
              _type
              services {
                title
                id {
                  current
                }
                content
              }
            }
          }
        }
      }
      allServicePage {
        components {
          __typename
          ... on Cdservicedetail {
            __typename
            _key
            _type
            selectableVariant
            services {
              title
              id {
                current
              }
              content
            }
            sortOrder
            globalComponentSource {
              __typename
              _key
              _type
              services {
                title
                id {
                  current
                }
                content
              }
            }
          }
        }
      }
    }
  `
} 