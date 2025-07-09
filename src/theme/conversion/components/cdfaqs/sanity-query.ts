import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src/interfaces"

export function query(pageAndComponentCombo: PageAndSingleComponentDetails): string {
  return `
    query GetCdFaqsBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        components {
          __typename
          ... on Cdfaqs {
            __typename
            _key
            _type
            selectableVariant
            title
            description
            items {
              title
              richtextRaw
            }
            sortOrder
            globalComponentSource {
              __typename
              _key
              _type
              title
              description
              items {
                title
                richtextRaw
              }
            }
          }
        }
      }
      allHomepage {
        components {
          __typename
          ... on Cdfaqs {
            __typename
            _key
            _type
            selectableVariant
            title
            description
            items {
              title
              richtextRaw
            }
            sortOrder
            globalComponentSource {
              __typename
              _key
              _type
              title
              description
              items {
                title
                richtextRaw
              }
            }
          }
        }
      }
    }
  `
} 