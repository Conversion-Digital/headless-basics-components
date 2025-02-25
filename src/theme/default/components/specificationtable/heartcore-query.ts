import { PageAndSingleComponentDetails } from "@conversiondigital/cd-headless-data/src";

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  return `
  query GetSpecificationsTableComponent($slug: String!) {
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
                            node {
                                __typename
                                contentTypeAlias
                                name
                                level
                                sortOrder
                                updateDate
                                ... on SpecificationTable{
                                    selectableVariant
                                    align
                                    sortOrder
                                    updateDate
                                    specifications{
                                        content{
                                            contentTypeAlias
                                            __typename
                                            ... on ProductSpecificationTableEntryCOMP{
                                                category
                                                title
                                                value
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
