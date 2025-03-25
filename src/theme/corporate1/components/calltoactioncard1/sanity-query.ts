import { getLogger } from "@conversiondigital/headless-basics-data/src";
import type { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src/interfaces"

export const log = getLogger("default.components.sanity.calltoactioncard1.query");

export function getQuery() {
  return query;
}

export function query(pageAndComponentCombo: PageAndSingleComponentDetails): string {
  // No slug needed for allHomepage in sanity
  return `
    query {
      allHomepage {
        title
        components {
          ... on CallToActionCard1 {
            __typename
            selectableVariant
            title
            description
            sortOrder
            image {
              asset {
                url
                title
              }
            }
            globalComponentSource {
              selectableVariant
              title
              description
              image {
                asset {
                  url
                  title
                }
              }
            }
          }
        }
      }
    }
  `
}