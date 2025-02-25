import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src";

export function query(IndividualComponentProps: PageAndSingleComponentDetails) {
  return `
  query GetGridComponent($slug: String!) {
    content(url: $slug) {
      url
      contentTypeAlias
      name
      sortOrder
      updateDate
      children(where: { contentTypeAlias_ends_with: "dataFolder" }) {
          edges{
              node{
                __typename
                contentTypeAlias
                name
                updateDate
                children(where: { contentTypeAlias_ends_with: "GridContent" }) {
                      edges{
                          node {
                              __typename
                              contentTypeAlias
                              name
                              level
                              sortOrder
                              updateDate
                              ... on GridContent{
                                  selectableVariant
                                  align
                                  order
                                  backgroundColour
                                  body
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
  `
}

export function getQuery() {
  return query;
}
