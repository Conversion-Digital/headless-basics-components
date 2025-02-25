import { PageAndSingleComponentDetails } from "@conversiondigital/cd-headless-data/src";

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  return `
  query GetKeyFeaturesComponent($slug: String!) {
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
                          node {
                              __typename
                              contentTypeAlias
                              name
                              level
                              updateDate
                              ... on KeyFeatures{
                                  heading
                                  text
                                  backgroundColour
                                  sortOrder
                                  selectableVariant
                                  align
                                  updateDate
                                  keyFeatures{
                                      content{
                                          __typename
                                          contentTypeAlias
                                          ... on HeadingImageRichTextCOMP{
                                              contentTypeAlias
                                              description
                                              heading
                                              image{
                                                  url
                                                  media{
                                                    name
                                                    mediaTypeAlias
                                                    updateDate
                                                    ... on Image{
                                                            altText
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
    }
}
  `
}

export function getQuery() {
  return query;
}
