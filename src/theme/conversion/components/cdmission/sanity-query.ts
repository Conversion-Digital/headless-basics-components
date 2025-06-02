import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src/interfaces";

export function query(pageAndComponentCombo: PageAndSingleComponentDetails): string {
  return `
    query GetCdmissionBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        components {
          __typename
          ... on Cdmission {
            __typename
            _key
            _type
            selectableVariant
            title
            subtitle
            description
            sortOrder
            globalComponentSource {
              __typename
              _key
              _type
              title
              subtitle
              description
            }
            keyPoints {
              description
            }
            promiseTitle
            promiseSubtitle
            promises {
              title
              description
              icon {
                asset {
                  url
                }
              }
            }
            image {
              asset {
                url
              }
            }
          }
        }
      }
      allHomepage {
        components {
          __typename
          ... on Cdmission {
            __typename
            _key
            _type
            selectableVariant
            title
            subtitle
            description
            sortOrder
            globalComponentSource {
              __typename
              _key
              _type
              title
              subtitle
              description
            }
            keyPoints {
              description
            }
            promiseTitle
            promiseSubtitle
            promises {
              title
              description
              icon {
                asset {
                  url
                }
              }
            }
            image {
              asset {
                url
              }
            }
          }
        }
      }
    }
  `
}