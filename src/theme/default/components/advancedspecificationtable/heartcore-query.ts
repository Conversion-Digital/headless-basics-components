import { PageAndSingleComponentDetails } from "@conversiondigital/cd-headless-data/src";
export function query(pageAndComponentDetails: PageAndSingleComponentDetails) {
  return `
  query GetAdvSpecTableComponent($slug: String!) {
      content(url: $slug) {
        url
        contentTypeAlias
        name
        updateDate
        children{
            edges{
                node{
                    __typename
                    name
                    updateDate
                    children{
                        edges{
                            node{
                               __typename
                              contentTypeAlias
                              name
                              level
                              sortOrder
                              updateDate
                              ... on AdvancedSpecificationTable{
                                  rows{
                                      content{
                                          ... on ProductSpecificationTableRow{
                                              values{
                                                  content{
                                                      ... on SpecificationTableColumn{
                                                          isHeading
                                                          columnSpan
                                                          value
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
      }
  }
`
}

export function getQuery() {
    return query;
}
