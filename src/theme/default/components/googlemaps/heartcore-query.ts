import { PageAndSingleComponentDetails } from "@conversiondigital/cd-headless-data/src";

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  return `query GoogleMapsComponentsBySlug($slug: String!) {
    content(url: $slug) {
        url
        contentTypeAlias
        name
        updateDate
        ... on GoogleMaps {
            iframeCode
            sortOrder
            updateDate
            datasource {
                __typename
                updateDate
                ... on GoogleMaps {
                    sortOrder
                    iframeCode
                    updateDate
                }
            }
        }
        children{
            edges{
                node{
                    __typename
                    name
                    url
                    updateDate
                    children{
                        edges{
                            node {
                                __typename
                                sortOrder
                                updateDate
                                ... on GoogleMaps {
                                    iframeCode
                                    updateDate
                                    datasource {
                                        __typename
                                        updateDate
                                        sortOrder
                                        ... on GoogleMaps{
                                            iframeCode
                                            updateDate
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
  }`
}

export function getQuery() {
    return query;
}
