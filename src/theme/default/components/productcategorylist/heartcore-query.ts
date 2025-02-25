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
                               updateDate
                               ... on ProductCategoryList{
                                   contentTypeAlias
                                   variant
                                   productCategories{
                                       id
                                       level
                                       url
                                       name
                                       updateDate
                                       children{
                                           edges{
                                               node
                                               {
                                                   __typename
                                                   updateDate
                                                   ... on ProductPage{
                                                       name
                                                       url
                                                       updateDate
                                                       productPhoto
                                                       {
                                                           url
                                                           media{
                                                            name
                                                            updateDate
                                                            mediaTypeAlias
                                                            ... on Image{altText}
                                                            }
                                                       }
                                                       productName
                                                       productDescription
                                                       productFeature
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
