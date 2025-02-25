import { PageAndSingleComponentDetails } from "@conversiondigital/cd-headless-data/src"

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  return `
  query GetGalleryComponent($slug: String!) {
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
                              updateDate
                              ... on Gallery{
                                  sortOrder
                                  order
                                  heading
                                  updateDate
                                  images{
                                      url
                                      media{
                                        name
                                        updateDate
                                        mediaTypeAlias
                                        ... on Image{
                                          updateDate
                                          altText}
                                        }
                                  }
                                  selectableVariant
                                  align
                                  backgroundColour
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
