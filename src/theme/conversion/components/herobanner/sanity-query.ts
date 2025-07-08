import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src/interfaces"


export function query(pageAndComponentCombo: PageAndSingleComponentDetails): string {
  return `
    query GetHerobannerBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        components {
          __typename
          ... on Herobanner {
            __typename
            _key
            _type
            selectableVariant
            title
            subtitle
            category
            image {
              asset {
                url
              }
            }
            altText
            button {
              label
              link
            }
            sortOrder
            globalComponentSource {
              __typename
              _key
              _type
              title
              subtitle
              category
              image {
                asset {
                  url
                }
              }
              altText
              button {
                label
                link
              }
            }
          }
        }
      }
      allHomepage {
        components {
          __typename
          ... on Herobanner {
            __typename
            _key
            _type
            selectableVariant
            title
            subtitle
            category
            image {
              asset {
                url
              }
            }
            altText
            button {
              label
              link
            }
            sortOrder
            globalComponentSource {
              __typename
              _key
              _type
              title
              subtitle
              category
              image {
                asset {
                  url
                }
              }
              altText
              button {
                label
                link
              }
            }
          }
        }
      }
    }
  `
}