import { getLogger, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src";

export const log = getLogger("conversion.structures.sanity.servicepage.query");

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.info(`${logPrefix()}[servicepage][sanity-query][query] called for slug: ${pageAndComponentCombo?.page?.preliminarySlug}`);
  
  return `
    query GetServicePageBySlug($slug: String!) {
      allServicePage(where: { slug: { current: { eq: $slug } } }) {
        title
        slug {
          current
        }
        components {
          __typename
          ... on Cdserviceintro {
            __typename
            _key
            _type
            selectableVariant
            title
            content
            sortOrder
            globalComponentSource {
              __typename
              _key
              _type
              title
              content
            }
          }
          ... on Cdservicestats {
            __typename
            _key
            _type
            selectableVariant
            stats {
              value
              description
            }
            sortOrder
            globalComponentSource {
              __typename
              _key
              _type
              stats {
                value
                description
              }
            }
          }
          ... on Cdserviceofferings {
            __typename
            _key
            _type
            selectableVariant
            title
            intro
            offerings {
              title
              icon
              id {
                current
              }
            }
            sortOrder
            globalComponentSource {
              __typename
              _key
              _type
              title
              intro
              offerings {
                title
                icon
                id {
                  current
                }
              }
            }
          }
          ... on Cdservicedetail {
            __typename
            _key
            _type
            selectableVariant
            services {
              title
              id {
                current
              }
              content
            }
            sortOrder
            globalComponentSource {
              __typename
              _key
              _type
              services {
                title
                id {
                  current
                }
                content
              }
            }
          }
        }
      }
    }
  `;
}

export function getQuery() {
  return query;
} 