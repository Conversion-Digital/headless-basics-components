import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src";

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  return `
  query GetMottoComponent($slug: String!) {
    content(url: $slug) {
      url
      contentTypeAlias
      name
      sortOrder
      updateDate
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
                              sortOrder
                              updateDate
                              ... on Motto{
                                  words
                                  selectableVariant
                                  align
                                  updateDate
                              }
                          }
                      }
                  }
                  ... on ProductPage{
                      id
                      productDescription
                      updateDate
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
