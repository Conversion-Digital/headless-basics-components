import { PageAndSingleComponentDetails } from "@conversiondigital/cd-headless-data/src";

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
    return `
    query ProductDownloadsByLink($slug: String!) {
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
                      children(where: { contentTypeAlias_ends_with: "ProductDownloads" }) {
                          edges
                          {
                              node{
                                  name
                                  contentTypeAlias
                                  __typename
                                  updateDate
                                  ... on ProductDownloads{
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
                                            downloads{
                                                content{
                                                    __typename
                                                    contentTypeAlias
                                                    ... on HeadingImageMediaButtonComponentCOMP{
                                                        buttonText
                                                        contentTypeAlias
                                                        heading
                                                        image{
                                                            url
                                                            media{
                                                                ... on Image{
                                                                        altText
                                                                        updateDate
                                                                      }
                                                              }
                                                        }
                                                        media{
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
               }
           }
        }
    }
  `;
}

export function getQuery() {
  return query;
}
