import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src/interfaces";

export function query(pageAndComponentCombo: PageAndSingleComponentDetails): string {
  return `
    query GetCdclientsBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        components {
          __typename
          ... on Cdclients {
            __typename
            _key
            _type
            selectableVariant
            sortOrder
            title
            subtitle
            clientsList {
              name
              link
              logo {
                asset {
                  url
                }
              }
            }
            buttonText
            buttonUrl
            globalComponentSource {
              __typename
              _key
              _type
              selectableVariant
              title
              subtitle
              clientsList {
                name
                link
                logo {
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
          ... on Cdclients {
            __typename
            _key
            _type
            selectableVariant
            sortOrder
            title
            subtitle
            clientsList {
              name
              link
              logo {
                asset {
                  url
                }
              }
            }
            buttonText
            buttonUrl
            globalComponentSource {
              __typename
              _key
              _type
              selectableVariant
              title
              subtitle
              clientsList {
                name
                link
                logo {
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
  `
}