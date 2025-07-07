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
              image {
                asset {
                  url
                }
              }
              serviceLinks {
                name
              }
              category
              imageTitle
              buttonText
              buttonUrl
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
              image {
                asset {
                  url
                }
              }
              serviceLinks {
                name
              }
              category
              imageTitle
              buttonText
              buttonUrl
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