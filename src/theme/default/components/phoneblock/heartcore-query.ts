import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src";

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  return `query PhoneblockComponentsBySlug($slug: String!) {
    content(url: $slug) {
      url
      contentTypeAlias
      name
      sortOrder
      updateDate
      ... on PhoneBlock
      {
      name
      contactTitle
      contactDetails
      contactNumber
      updateDate
      id
      }
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
                              url
                              contentTypeAlias
                              updateDate
                              ... on PhoneBlock
                              {
                                  __typename
                                  contentTypeAlias
                                  url
                                  name
                                  sortOrder
                                  contactTitle
                                  contactDetails
                                  contactNumber
                                  updateDate
                                  datasource
                                  {
                                   contentTypeAlias
                                   updateDate
                                   ... on PhoneBlock
                                   {
                                    name
                                    contactTitle
                                    contactDetails
                                    contactNumber
                                    updateDate
                                    id
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
