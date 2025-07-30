import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src/interfaces"

export function query(pageAndComponentCombo: PageAndSingleComponentDetails): string {
  return `
    query GetNavigationBySlug {
      allNavigation(limit: 1) {
        __typename
        _id
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
        buttonText
        buttonUrl
      }
    }
  `
}