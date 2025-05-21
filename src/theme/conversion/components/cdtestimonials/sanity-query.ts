import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src/interfaces";

export function query(pageAndComponentCombo: PageAndSingleComponentDetails): string {
  return `
    query GetCdtestimonialsBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        components {
          __typename
          ... on Cdtestimonials {
            __typename
            _key
            _type
            selectableVariant
            sortOrder
            title
            subtitle
            testimonials {
              clientName
              clientCompany
              quote
              logo {
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
              testimonials {
                clientName
                clientCompany
                quote
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
          ... on Cdtestimonials {
            __typename
            _key
            _type
            selectableVariant
            sortOrder
            title
            subtitle
            testimonials {
              clientName
              clientCompany
              quote
              logo {
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
              testimonials {
                clientName
                clientCompany
                quote
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
  `;
}