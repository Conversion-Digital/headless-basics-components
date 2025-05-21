import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src/interfaces";

export function query(pageAndComponentCombo: PageAndSingleComponentDetails): string {
  return `
    query GetCdinsightsBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        components {
          __typename
          ... on Cdinsights {
            __typename
            _key
            _type
            selectableVariant
            sortOrder
            heading
            tagline
            items {
              title
              subtitle
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
              heading
              tagline
              items {
                title
                subtitle
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
          ... on Cdinsights {
            __typename
            _key
            _type
            selectableVariant
            sortOrder
            heading
            tagline
            items {
              title
              subtitle
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
              heading
              tagline
              items {
                title
                subtitle
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