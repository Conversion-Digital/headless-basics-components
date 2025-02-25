import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src";

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  return `
  query VideoSectionComponentsBySlug($slug: String!) {
    content(url: $slug) {
      url
      id
      contentTypeAlias
      name
      updateDate
      children{
          edges{
              node{
                  __typename
                  name
                  updateDate
                  children(where: { contentTypeAlias_ends_with: "VideoSection" }) {
                      edges{
                          node {
                              __typename
                              contentTypeAlias
                              name
                              level
                              updateDate
                              ... on VideoSection{
                                  title
                                  id
                                  description
                                  backgroundColour
                                  sortOrder
                                  selectableVariant
                                  align
                                  updateDate
                                  videoLink {
                                      url
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
