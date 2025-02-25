import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src";
import { log, logPrefix } from "@conversiondigital/headless-basics-data";

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(`${logPrefix()}[${pageAndComponentCombo.component.identifier}][${pageAndComponentCombo.page.source}][${pageAndComponentCombo.page.preliminarySlug}] query `);
  return `query SubComponentsBySlug($slug: String!) {
    content(url: $slug) {
      slug:url
      name
      id
      updateDate
      children {
        edges {
          node {
            __typename
            contentTypeAlias
            updateDate
            # Add other fields to retrieve here
            children {
                edges {
                    node{
                        name
                        id
                        url
                        __typename
                        sortOrder
                        updateDate
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

export function getQuery() {
  return query
}
