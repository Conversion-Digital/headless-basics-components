import { getLogger, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src";
export const log = getLogger("default.components.sanity.hero.query");

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace("variables query > ", JSON.stringify(pageAndComponentCombo?.component?.data));
  return `
    query GetHeroBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        components{
            __typename
            ... on Hero{
                __typename
                _key
                _type            
                selectableVariant
                button{
                    __typename
                    _key
                    _type
                    label
                    link
                }
                heading
                title
                image{
                    __typename
                    _key
                    _type
                    asset
                    {
                        url
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
