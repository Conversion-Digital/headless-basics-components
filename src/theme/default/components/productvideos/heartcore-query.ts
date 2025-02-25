import { PageAndSingleComponentDetails } from "@conversiondigital/cd-headless-data/src";

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  return `query ProductVideosByLink($slug: String!) {
    productPage(url: $slug) {
       id
       url
       contentTypeAlias
       name
       __typename
       updateDate
       children(where: { contentTypeAlias_ends_with: "dataFolder" }) {
        edges {
          node {
            __typename
            contentTypeAlias
            name
            updateDate
                  children(where: { contentTypeAlias_ends_with: "ProductVideos" }) {
                      edges
                      {
                          node{
                              name
                              contentTypeAlias
                              __typename
                              updateDate
                              ... on ProductVideos{
                                  order
                                  sortOrder
                                  align
                                  backgroundColour
                                  updateDate
                                  productPicker{
                                      name
                                      updateDate
                                      ... on ProductPage
                                      {
                                        productVideos{
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
    }
  }`
}

export function getQuery() {
    return query;
}
