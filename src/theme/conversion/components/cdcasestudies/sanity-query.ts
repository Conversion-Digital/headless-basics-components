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
            topics
            items {
              title
              description
              link
              topics
              image {
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
              topics
              items {
                title
                description
                link
                topics
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
            topics
            items {
              title
              description
              link
              topics
              image {
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
              topics
              items {
                title
                description
                link
                topics
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
  `
}