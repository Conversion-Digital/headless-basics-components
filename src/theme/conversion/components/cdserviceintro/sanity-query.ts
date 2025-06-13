import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src/interfaces"

export function query(pageAndComponentCombo: PageAndSingleComponentDetails): string {
  return `
    query GetCdserviceintroBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        components {
          __typename
          ... on Cdserviceintro {
            __typename
            _key
            _type
            selectableVariant
            title
            content
            sortOrder
            globalComponentSource {
              __typename
              _key
              _type
              title
              content
            }
          }
        }
      }
      allServicePage {
        components {
          __typename
          ... on Cdserviceintro {
            __typename
            _key
            _type
            selectableVariant
            title
            content
            sortOrder
            globalComponentSource {
              __typename
              _key
              _type
              title
              content
            }
          }
        }
      }
    }
  `
} 