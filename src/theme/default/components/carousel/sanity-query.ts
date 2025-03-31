import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src/interfaces"

export function query(pageAndComponentCombo: PageAndSingleComponentDetails){
  return `
    query($slug: String){
      allPage(where: {slug: {current: {eq: $slug}}}) {
        title
        components {
        __typename
        ... on Carousel {
            _type
            selectableVariant
            images {
              asset {
                url
                altText
              }
            }
          }
        }
      }
      allHomepage {
        components {
          ... on Carousel {
            _type
            selectableVariant
            images {
              asset {
                url
                altText
              }
            }
          }
        }
      }
    }
  `
}

export function getQuery(){
  return query
}