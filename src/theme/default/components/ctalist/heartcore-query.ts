import { PageAndSingleComponentDetails } from "@conversiondigital/cd-headless-data/src"

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  return `
  query GetCtaList($slug: String!) {
    content(url: $slug) {
      url
      contentTypeAlias
      name
      id
      updateDate
      ... on CTAList{
          selectableVariant
          heading
          text
          sortOrder
          order
          align
          backgroundColour
          updateDate
          callToActionItems{
            content{
                __typename
                contentTypeAlias
                ... on CtaComponentCOMP{
                    backgroundColour
                    contentTypeAlias
                    heading
                    icon{
                        url
                        media{
                          name
                          mediaTypeAlias
                          updateDate
                          ... on Image{
                                    altText
                                    name
                                    updateDate
                           }
                           ... on UmbracoMediaVectorGraphics{
                            altText
                            name
                            updateDate
                          }
                        }
                    }
                    link{
                        target
                        name
                        url
                        type
                        udi
                    }
                    text
                }
            }
        }
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
                              ... on CTAList{
                                updateDate
                                  text
                                  heading
                                  selectableVariant
                                  align
                                  sortOrder
                                  order
                                  backgroundColour
                                  updateDate
                                  datasource{
                                      id
                                      url
                                      name
                                      __typename
                                      updateDate
                                  }
                                  callToActionItems{
                                      content{
                                          __typename
                                          contentTypeAlias
                                          ... on CtaComponentCOMP{
                                              backgroundColour
                                              contentTypeAlias
                                              heading
                                              icon{
                                                  url
                                                  media{
                                                    name
                                                    updateDate
                                                    mediaTypeAlias
                                                    ... on Image{
                                                              altText
                                                              name
                                                              updateDate
                                                     }
                                                  }
                                              }
                                              link{
                                                  target
                                                  name
                                                  url
                                                  type
                                                  udi
                                              }
                                              text
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
  return query
}
