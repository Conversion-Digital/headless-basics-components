import { PageAndSingleComponentDetails, getLogger, logPrefix } from "@conversiondigital/cd-headless-data/src";

const log = getLogger("headless-component-lib.theme.default.components.navigation.query");

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(`[${logPrefix()}][${pageAndComponentCombo?.component.identifier}] page navigation query`);
  return `
  query NavigationByParent($slug: String!) {
    homepage(url: $slug) {
      name
      id
      updateDate
      children {
        items {
          name
          id
          level
          url
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
