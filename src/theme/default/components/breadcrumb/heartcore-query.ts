import { PageAndSingleComponentDetails } from "@conversiondigital/cd-headless-data/src";

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  return `
  query ParentPageTypeBySlug($slug: String!) {
    content(url: $slug) {
      url
      contentTypeAlias
      name
      updateDate
      ... on SubComponentsPage {
        prefetch
        updateDate
      }
      parent {
        url
        contentTypeAlias
        name
        updateDate
        ... on SubComponentsPage {
          prefetch
          updateDate
        }
        parent {
          url
          contentTypeAlias
          name
          updateDate
          ... on SubComponentsPage {
            prefetch
            updateDate
          }
          parent {
            url
            contentTypeAlias
            name
            updateDate
            ... on SubComponentsPage {
              prefetch
              updateDate
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
