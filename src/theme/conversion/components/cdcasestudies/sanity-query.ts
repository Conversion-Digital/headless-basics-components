import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src/interfaces";

export function query(pageAndComponentCombo: PageAndSingleComponentDetails): string {
  return `
    query GetCdcasestudiesBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        components {
          __typename
          ... on Cdcasestudies {
            __typename
            _key
            _type
            selectableVariant
            sortOrder
            title
            subtitle
            items {
              title
              description
              link
              image {
                asset {
                  url
                }
              }
            }
            globalComponentSource {
              __typename
              _key
              _type
              selectableVariant
              title
              subtitle
              items {
                title
                description
                link
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
      allHomepage {
        components {
          __typename
          ... on Cdcasestudies {
            __typename
            _key
            _type
            selectableVariant
            sortOrder
            title
            subtitle
            items {
              title
              description
              link
              image {
                asset {
                  url
                }
              }
            }
            globalComponentSource {
              __typename
              _key
              _type
              selectableVariant
              title
              subtitle
              items {
                title
                description
                link
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
    }
  `;
}