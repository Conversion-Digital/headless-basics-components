import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src";

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  return `
  query GetHeroComponent($slug: String!) {
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
                              ... on Hero{
                                  image{
                                    url
                                    media{
                                      updateDate
                                      name
                                      mediaTypeAlias
                                      ... on Image
                                          {
                                            altText
                                          }
                                      }
                                  }
                                  pageSectionListing{
                                    content
                                    {
                                        ...on PageSectionTextComponentCOMP
                                        {
                                              pageSectionTitle,
                                              pageSectionURL
                                        }
                                    }
                                }
                                  sortOrder
                                  heading
                                  description
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
