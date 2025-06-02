import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src/interfaces"

export function query(pageAndComponentCombo: PageAndSingleComponentDetails): string {
  return `
    query GetCdnavBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        components {
          __typename
          ... on Cdnav {
            __typename
            _key
            _type
            selectableVariant
            title
            subtitle
            logo {
              asset {
                url
              }
            }
            isTransparent
            links {
              label
              url
            }
            dropdownMenus {
              label
              dropdownLinks {
                label
                url
              }
            }
            sortOrder
            globalComponentSource {
              __typename
              _key
              _type
              title
              subtitle
              isTransparent
              logo {
                asset {
                  url
                }
              }
              links {
                label
                url
              }
              dropdownMenus {
                label
                dropdownLinks {
                  label
                  url
                }
              }
            }
            buttonText
            buttonUrl
          }
        }
      }
      allHomepage {
        components {
          __typename
          ... on Cdnav {
            __typename
            _key
            _type
            selectableVariant
            title
            subtitle
            logo {
              asset {
                url
              }
            }
            isTransparent
            links {
              label
              url
            }
            dropdownMenus {
              label
              dropdownLinks {
                label
                url
              }
            }
            sortOrder
            globalComponentSource {
              __typename
              _key
              _type
              title
              subtitle
              isTransparent
              logo {
                asset {
                  url
                }
              }
              links {
                label
                url
              }
              dropdownMenus {
                label
                dropdownLinks {
                  label
                  url
                }
              }
            }
            buttonText
            buttonUrl
          }
        }
      }
    }
  `
}