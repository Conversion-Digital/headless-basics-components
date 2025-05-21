import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src/interfaces";

export function query(pageAndComponentCombo: PageAndSingleComponentDetails): string {
  return `
    query GetCdservicesBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        components {
          __typename
          ... on Cdservices {
            __typename
            _key
            _type
            selectableVariant
            sortOrder
            title
            subtitle
            image {
              asset {
                url
              }
            }
            servicesList {
              title
              description
            }
            globalComponentSource {
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
              servicesList {
                title
                description
              }
            }
          }
        }
      }
      allHomepage {
        components {
          __typename
          ... on Cdservices {
            __typename
            _key
            _type
            selectableVariant
            sortOrder
            title
            subtitle
            image {
              asset {
                url
              }
            }
            servicesList {
              title
              description
            }
            globalComponentSource {
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
              servicesList {
                title
                description
              }
            }
          }
        }
      }
    }
  `;
}