import { getLogger } from "@conversiondigital/headless-basics-data/src";
import type { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src/interfaces";

export const log = getLogger("default.components.sanity.calltoactiontwoimagebtn.query");

export function getQuery() {
  return query;
}

export function query(pageAndComponentCombo: PageAndSingleComponentDetails): string {
  return `
    query {
      allHomepage {
        title
        components {
          ... on CallToActionTwoImageBtn {
            __typename
            selectableVariant
            title
            description
            sortOrder
            imageLeft {
              asset {
                url
                title
              }
            }
            imageRight {
              asset {
                url
                title
              }
            }
            ctaLabelLeft
            ctaLabelRight
            globalComponentSource {
              selectableVariant
              title
              description
              imageLeft {
                asset {
                  url
                  title
                }
              }
              imageRight {
                asset {
                  url
                  title
                }
              }
              ctaLabelLeft
              ctaLabelRight
            }
          }
        }
      }
    }
  `;
}