import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src/interfaces";

export function query(pageAndComponentCombo: PageAndSingleComponentDetails): string {
  return `
    query GetCdctaBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        components {
          __typename
          ... on Cdcta {
            __typename
            _key
            _type
            selectableVariant
            sortOrder
            title
            subtitle
            buttonLabel
            buttonUrl
            image {
              asset {
                url
              }
            }
            globalComponentSource {
              __typename
              _key
              _type
              selectableVariant
              title
              subtitle
              buttonLabel
              buttonUrl
              image {
                asset {
                  url
                }
              }
            }
          }
        }
      }
      allHomepage {
        components {
          __typename
          ... on Cdcta {
            __typename
            _key
            _type
            selectableVariant
            sortOrder
            title
            subtitle
            buttonLabel
            buttonUrl
            image {
              asset {
                url
              }
            }
            globalComponentSource {
              __typename
              _key
              _type
              selectableVariant
              title
              subtitle
              buttonLabel
              buttonUrl
              image {
                asset {
                  url
                }
              }
            }
          }
        }
      }
    }
  `;
}