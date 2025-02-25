import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src"

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  return `
  query GetAccordionComponent($slug: String!) {
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
                              ... on Accordion{
                                  name
                                  backgroundColour
                                  updateDate
                                  children{
                                      edges{
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
          }
      }
    }
}
  `
}


export function getQuery() {
  return query;
}
