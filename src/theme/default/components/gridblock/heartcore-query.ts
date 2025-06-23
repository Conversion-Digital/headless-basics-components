import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src"

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  return `
  query GetGridBlock($slug: String!) {
    content(url: $slug) {
      url
      contentTypeAlias
      name
      id
      updateDate
      ... on GridBlock{
          selectableVariant
          sortOrder
          title
          componentsGrid{
              __typename
          }
          updateDate
      }
      children{
          edges{
              node{
                  __typename
                  name
                  updateDate
                  children{
                      edges{
                          node {
                              __typename
                              name
                              level
                              updateDate
                              ... on GridBlock{
                                  updateDate
                                  title
                                  selectableVariant
                                  sortOrder
                                  componentsGrid{
                                      __typename
                                  }
                                  datasource{
                                      id
                                      url
                                      name
                                      __typename
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
  `
}

export function getQuery() {
  return query
} 