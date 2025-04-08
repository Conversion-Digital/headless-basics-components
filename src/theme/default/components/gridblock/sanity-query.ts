import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src/interfaces"
import { log, logPrefix } from "@conversiondigital/headless-basics-data/src"

export function query(pageAndComponentCombo: PageAndSingleComponentDetails){
  log.trace(`${logPrefix()} [gridblock][sanity-query][query] called for slug: ${pageAndComponentCombo?.page?.preliminarySlug}`)
  return `
      query GetPageOrHomepageBySlug($slug: String!) {
                  allPage(where: { slug: { current: { eq: $slug } } }) {
                      _id
                      __typename
                      _createdAt
                      _updatedAt
                      _rev
                      _key
                      title
                      description
                      level
                      sortOrder
                      showInNavigation
                      components {
                          __typename
                          ... on GridBlock{
                              ...GridFields
                          }
                      }
                  }
                  allHomepage {
                      _id
                      __typename
                      _createdAt
                      _updatedAt
                      _rev
                      _key
                      title
                      description
                      level
                      sortOrder
                      showInNavigation 
                      components {
                          __typename
                          ... on GridBlock{
                              ...GridFields
                          }
                      }       
                  }
              }


      fragment GridFields on GridBlock {
          __typename
          componentsGrid{
              __typename
              ... on TextBlock {
                  _key
                  _type
                  title
                  subtitle
                  text
                  sortOrder
                  selectableVariant
              }
              ... on Toggle {
                  _key
                  _type
                  aRIALabel
                  text
                  showIcon
                  variant
                  className
              }
              ... on Hero {
                  _key
                  _type
                  title
                  heading
                  subtitle
                  backgroundImage {
                    asset {
                      url
                      _id
                    }
                  }
                  button {
                    label
                  }
                  sortOrder
                  selectableVariant
              }
              ... on Motto {
                  _key
                  _type
                  words
                  align
                  selectableVariant
                  globalComponentSource {
                    _key
                  }
              }
          }
          globalComponentSource{
              __typename
              componentsGrid{
                  __typename
                  ... on TextBlock {
                      _key
                      _type
                      title
                      subtitle
                      text
                      sortOrder
                      selectableVariant
                  }
                  ... on Toggle {
                      _key
                      _type
                      aRIALabel
                      text
                      showIcon
                      variant
                      className
                  }
                  ... on Hero {
                      _key
                      _type
                      title
                      heading
                      subtitle
                      backgroundImage {
                        asset {
                          url
                          _id
                        }
                      }
                      button {
                        label
                      }
                      sortOrder
                      selectableVariant
                  }
                  ... on Motto {
                      _key
                      _type
                      words
                      align
                      selectableVariant
                      globalComponentSource {
                        _key
                      }
                  }
              }
          }
          selectableVariant
          sortOrder
          title
      }
  `
}

export function getQuery() {
  return query
}