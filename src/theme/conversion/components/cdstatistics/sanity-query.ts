import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src/interfaces"

export function query(pageAndComponentCombo: PageAndSingleComponentDetails): string {
  return `
    query GetCdStatisticsBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        components {
          __typename
          ... on Cdstatistics {
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
      allHomepage {
        components {
          __typename
          ... on Cdstatistics {
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