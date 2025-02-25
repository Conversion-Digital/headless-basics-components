import { PageAndSingleComponentDetails, getLogger, logPrefix } from "@conversiondigital/cd-headless-data/src";

const log = getLogger("headless-component-lib.theme.default.components.navigationchildren.query");

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(`[${logPrefix()}][${pageAndComponentCombo?.component.identifier}] page nagiagtion children query`);
  return `
  query GetNavigationChildrenById($id: ID!) {
    content(id: $id) {
      name
      id
      updateDate
      children {
        items {
          name
          id
          level
          url
          sortOrder
          updateDate
          ... on Homepage {
            prefetch
            superAlias
            showInNavigation
            updateDate
          }
          ... on SubComponentsPage {
            prefetch
            superAlias
            showInNavigation
            updateDate
            externalLink {
              target
              url
            }
          }
          ... on ProductPage {
            prefetch
            superAlias
            showInNavigation
            updateDate
            externalLink {
              target
              url
            }
            productPhoto {
              url
              media {
                name
                updateDate
                mediaTypeAlias
                ... on Image { altText }
              }
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
