import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src/interfaces"

export function query(pageAndComponentCombo: PageAndSingleComponentDetails): string {
  return `
    query GetCdIntroductionBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        components {
          __typename
          ... on Cdintroduction {
            __typename
            _key
            _type
            selectableVariant
            title
            richtextRaw
            sortOrder
            globalComponentSource {
              __typename
              _key
              _type
              title
              richtextRaw
            }
          }
        }
      }
      allHomepage {
        components {
          __typename
          ... on Cdintroduction {
            __typename
            _key
            _type
            selectableVariant
            title
            richtextRaw
            sortOrder
            globalComponentSource {
              __typename
              _key
              _type
              title
              richtextRaw
            }
          }
        }
      }
    }
  `
} 