import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src/interfaces";

export function query(pageAndComponentCombo: PageAndSingleComponentDetails): string {
  return `
    query GetCdpartnersBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        components {
          __typename
          ... on Cdpartners {
            __typename
            _key
            _type
            selectableVariant
            title
            subtitle
            partnerLogos {
              name
              url
              inactiveLogo {
                asset {
                  url
                }
              }
              activeLogo {
                asset {
                  url
                }
              }
            }
            sortOrder
            globalComponentSource {
              __typename
              _key
              _type
              selectableVariant
              title
              subtitle
              partnerLogos {
                name
                url
                inactiveLogo {
                  asset {
                    url
                  }
                }
                activeLogo {
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
          ... on Cdpartners {
            __typename
            _key
            _type
            selectableVariant
            title
            subtitle
            partnerLogos {
              name
              url
              inactiveLogo {
                asset {
                  url
                }
              }
              activeLogo {
                asset {
                  url
                }
              }
            }
            sortOrder
            globalComponentSource {
              __typename
              _key
              _type
              selectableVariant
              title
              subtitle
              partnerLogos {
                name
                url
                inactiveLogo {
                  asset {
                    url
                  }
                }
                activeLogo {
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