import { PageAndSingleComponentDetails } from "@conversiondigital/cd-headless-data/src";

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  return`
query {
  allContent(where: {
    AND: [{level_any: [1,2]}],
    OR: [
      { contentTypeAlias_ends_with: "Page" },
      { contentTypeAlias_ends_with: "page" }
    ]
  }) {
    edges {
      node {
        id
        level
        name
        url
        parent {
          id
        }
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
        children(where: {
          AND: [{level_any: [3,4,5,6,7,8,9,10]}],
          OR: [
            { contentTypeAlias_ends_with: "Page" },
            { contentTypeAlias_ends_with: "page" }
          ]
        }) {
          edges {
            node {
              id
              level
              name
              url
              parent {
                id
              }
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
              children(where: {
                AND: [{level_any: [3,4,5,6,7,8,9,10]}],
                OR: [
                  { contentTypeAlias_ends_with: "Page" },
                  { contentTypeAlias_ends_with: "page" }
                ]
              }) {
                edges {
                  node {
                    id
                    level
                    name
                    url
                    parent {
                      id
                    }
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
                    children(where: {
                      AND: [{level_any: [3,4,5,6,7,8,9,10]}],
                      OR: [
                        { contentTypeAlias_ends_with: "Page" },
                        { contentTypeAlias_ends_with: "page" }
                      ]
                    }) {
                      edges {
                        node {
                          name
                          updateDate
                        }
                      }
                    }
                  }
                }
              }
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
