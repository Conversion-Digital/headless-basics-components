import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src";

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  return `
  query ProductCategoryListingBySlug($slug: String!) {
    subComponentsPage(url: $slug) {
       url
       contentTypeAlias
       name
       ogDescription
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
                               ... on Exploretherange{
                                  align
                                   __typename
                                   contentTypeAlias
                                   updateDate
                                   explore{
                                       content
                                       {
                                           __typename
                                           contentTypeAlias
                                           ... on ProductListCategoryCOMP{
                                               backgroundColour
                                               fullSectionBackgroundColour
                                               button{
                                                   name
                                                   target
                                                   type
                                                   url
                                                   udi
                                               }
                                               contentTypeAlias
                                               heading
                                               introductionText
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
