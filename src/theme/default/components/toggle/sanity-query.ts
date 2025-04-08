import { log, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src"

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(`${logPrefix()}[toggle][sanity-query][query] called for slug: ${pageAndComponentCombo?.page?.preliminarySlug}`)
  return `
    query GetToggleBySlug($slug: String!) {
  allPage(where: { slug: { current: { eq: $slug } } }) {
    components{
        __typename
        ... on Toggle{
            __typename
            _key
            _type            
            aRIALabel
            className
            showIcon
            text
            variant
        }
    }
  }  
  allHomepage{
    components{
        __typename       
        ... on Toggle{
            __typename
            _key
            _type            
            aRIALabel
            className
            showIcon
            text
            variant
        }
    }
  }
}
  `
}
export function getQuery() {
  return query;
}
