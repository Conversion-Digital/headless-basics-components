import { log, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src"

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(`${logPrefix()}[breadcrumb][sanity-query][query] called for slug: ${pageAndComponentCombo?.page?.preliminarySlug}`)
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
            title
            backgroundImage{
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
  allHomepage{
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
            subtitle
            title
            backgroundImage{
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