import { getLogger, logPrefix } from "@conversiondigital/headless-basics-data/src";
import type { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src/interfaces";

export const log = getLogger("default.components.sanity.ourcompany.query");

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.info(`${logPrefix()}[ourcompany][sanity-query][query] called for slug: ${pageAndComponentCombo?.page?.preliminarySlug}`)
  // This query retrieves 'ourcompany' from page or homepage
  return `#graphql
    query allOurCompany($slug: String) {
      allPage(where: {slug: {current: {eq: $slug}}}) {
        title
        components {
          __typename
          ... on Ourcompany {
            _type
            selectableVariant
            title
            description
            buttonLabel
            sortOrder
            stats {
              label
              value
            }
            globalComponentSource {
              title
              description
              buttonLabel
              stats {
                label
                value
              }
              selectableVariant
            }
          }
        }
      }
      allHomepage {
        title
        components {
          __typename
          ... on Ourcompany {
            _type
            selectableVariant
            title
            description
            buttonLabel
            sortOrder
            stats {
              label
              value
            }
            globalComponentSource {
              title
              description
              buttonLabel
              stats {
                label
                value
              }
              selectableVariant
            }
          }
        }
      }
    }
  `;
}

export function getQuery() {
  return query
}