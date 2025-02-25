import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src";

export function query(pageAndSingleComponentDetails: PageAndSingleComponentDetails) {
  return `query FeatureThreeImagesComponentsBySlug($slug: String!) {
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
                node{
                         __typename
                         name
                         level
                         sortOrder
                         updateDate
                         ... on FeatureThreeImagesSection{
                          __typename
                             url
                             align
                             sortOrder
                             backgroundColour
                             contentTypeAlias
                             updateDate
                            featureThreeImagesSectionListing{
                               content
                               {
                                ... on FeaturethreeimagessectioncomponentCOMP{
                                       featureImage
                                       {
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
                     featureDescription
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
