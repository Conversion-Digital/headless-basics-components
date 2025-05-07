import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src/interfaces"

export function query(pageAndComponentCombo: PageAndSingleComponentDetails): string {
  return `
    query GetCdfooterBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        components {
          __typename
          ... on Cdfooter {
            __typename
            _key
            _type
            selectableVariant
            title
            subtitle
            additionalInformation {
              phoneNumber
              email
              address
            }
            copyrightMessage
            logo {
              asset {
                url
              }
            }
            secondaryLogo {
              asset {
                url
              }
            }
            backgroundImage {
              asset {
                url
              }
            }
            socialLinks {
              platform
              url
              logo {
                asset {
                  url
                }
              }
            }
            linkGroups {
              groupTitle
              links {
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
              additionalInformation {
                phoneNumber
                email
                address
              }
              copyrightMessage
              logo {
                asset {
                  url
                }
              }
              secondaryLogo {
                asset {
                  url
                }
              }
              backgroundImage {
                asset {
                  url
                }
              }
              socialLinks {
                platform
                url
                logo {
                  asset {
                    url
                  }
                }
              }
              linkGroups {
                groupTitle
                links {
                  label
                  url
                }
              }
            }
          }
        }
      }
      allHomepage {
        components {
          __typename
          ... on Cdfooter {
            __typename
            _key
            _type
            selectableVariant
            title
            subtitle
            additionalInformation {
              phoneNumber
              email
              address
            }
            copyrightMessage
            logo {
              asset {
                url
              }
            }
            secondaryLogo {
              asset {
                url
              }
            }
            backgroundImage {
              asset {
                url
              }
            }
            socialLinks {
              platform
              url
              logo {
                asset {
                  url
                }
              }
            }
            linkGroups {
              groupTitle
              links {
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
              additionalInformation {
                phoneNumber
                email
                address
              }
              copyrightMessage
              logo {
                asset {
                  url
                }
              }
              secondaryLogo {
                asset {
                  url
                }
              }
              backgroundImage {
                asset {
                  url
                }
              }
              socialLinks {
                platform
                url
                logo {
                  asset {
                    url
                  }
                }
              }
              linkGroups {
                groupTitle
                links {
                  label
                  url
                }
              }
            }
          }
        }
      }
    }
  `
}