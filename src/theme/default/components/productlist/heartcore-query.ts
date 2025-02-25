import { PageAndSingleComponentDetails } from "@conversiondigital/cd-headless-data/src";

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  return `
  query ProductListingBySlug($slug: String!) {
    subComponentsPage(url: $slug) {
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
                              name
                              level
                              updateDate
                              ... on ProductList{
                                  useChildren
                              }
                              ... on ProductPage{
                                  id
                                  url
                                  productDescription
                                  updateDate
                                  productFeature
                                  productPhoto {
                                      url
                                      media{
                                        name
                                        updateDate
                                        mediaTypeAlias
                                        ... on Image{altText}
                                        }
                                  }
                                  features{
                                      content{
                                          __typename
                                          contentTypeAlias
                                          ... on HeadingImageRichTextCOMP{
                                              contentTypeAlias
                                              heading
                                              image{
                                                  url
                                                  media{
                                                    name
                                                    mediaTypeAlias
                                                    updateDate
                                                    ... on Image{altText}
                                                    }
                                              }
                                              description
                                          }
                                      }
                                  }



                              }
                          }
                      }
                  }
                  ... on ProductPage{
                      id
                      url
                      productDescription
                      productFeature
                      updateDate
                      productPhoto {
                          url
                          media{
                            name
                            updateDate
                            mediaTypeAlias
                            ... on Image{altText}
                            }
                      }
                          features{
                              content{
                                  __typename
                                  contentTypeAlias
                                  ... on HeadingImageRichTextCOMP{
                                      contentTypeAlias
                                      heading
                                      image{
                                          url
                                          media{
                                            name
                                            updateDate
                                            mediaTypeAlias
                                            ... on Image{altText}
                                            }
                                      }
                                      description
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
