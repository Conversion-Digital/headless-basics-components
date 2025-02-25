import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src";

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  return `
  query {
    allContent(where: {
        OR: [
            { contentTypeAlias_ends_with: "Page" },
            { contentTypeAlias_ends_with: "page" }
        ]
    })
    {
      edges {
        node {
          id
          level
          name
          url
          sortOrder
          updateDate
          ... on Homepage {
            showInSitemap
            showInNavigation
            superAlias
            updateDate
          }
          ... on ProductPage {
            showInSitemap
            showInNavigation
            superAlias
            updateDate
          }
          ... on SubComponentsPage {
            showInSitemap
            showInNavigation
            superAlias
            updateDate
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
