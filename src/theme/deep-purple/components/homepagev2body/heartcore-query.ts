import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src"

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  return `
   query HomepageV2BySlug($slug: String!) {
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
           id   
           updateDate           
           children{
                edges{
                    node{
                             __typename
                             name
                             level
                             sortOrder
                             updateDate   
                                                                  
                             ... on HomepageV2Body{   
                              headingOne
                              headingTwo
                              logoImage{
                                  url
                                }
                                rightHandButton
                                {
                                    __typename
                                    name
                                    target
                                    type
                                    udi
                                    url
                                }
                                blockThreeParagraph
                                blockThreeP2
                                blockThreeImage{
                                  url
                                }
                                blockThreeBullets
                                blockFourParagraph
                                blockFourImage{
                                  url
                                }
                                blockFourBullets
                                block5Paragraph
                                block5SubHeading
                                block5Image{
                                  url
                                }
                                block5Bullets
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
