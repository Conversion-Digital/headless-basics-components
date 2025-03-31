import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src/interfaces";

export function getQuery(pageAndComponentCombo: PageAndSingleComponentDetails): string {
  return /* GraphQL */ `
    query XComponentQuery($slug: String!) {
      allPage(where: { slug_current: { eq: $slug } }) {
        components {
          ... on xComponent {
            selectableVariant
            sortOrder
            title
            subtitle
            navItems {
              label
              active
            }
          }
        }
      }
    }
  `;
}