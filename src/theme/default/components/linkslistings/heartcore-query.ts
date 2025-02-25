import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src";

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  return `
  query GetLinkListSectionComponentsBySlug($slug: String!) {
      content(url: $slug) {
        url
        contentTypeAlias
        name
        __typename
        sortOrder
        updateDate
        ...on LinksListings {
            name
            level
            url
            selectableVariant
            align
            backgroundColour
            updateDate
            linksListings {
                content {
                    __typename
                    ...on LinkListCOMP1 {
                        heading
                        mediaLinks{
                            url
                            media{
                                id
                                name
                                __typename
                                url
                                mediaTypeAlias
                                updateDate
                            }
                        }
                        icon {
                            url
                        }
                    }
                    ...on LinkListCOMP {
                        heading
                        links{
                            url
                            target
                            name
                            type
                            udi
                        }
                        icon {
                            url
                        }
                    }
                }
            }
        }
        children{
            edges{
                node{
                    __typename
                    name
                    children {
                        edges {
                            node {
                                name
                                __typename
                                updateDate
                                url
                                sortOrder
                                ...on LinksListings {
                                    name
                                    level
                                    url
                                    selectableVariant
                                    align
                                    backgroundColour
                                    updateDate
                                    linksListings {
                                        content {
                                            __typename
                                            ...on LinkListCOMP1 {
                                                heading
                                                 mediaLinks{
                                                     url
                                                     media{
                                                         __typename
                                                         id
                                                         name
                                                         url
                                                         mediaTypeAlias
                                                         updateDate
                                                     }
                                                }
                                                icon {
                                                    url
                                                }
                                            }
                                            ...on LinkListCOMP {
                                                heading
                                                links{
                                                    url
                                                    target
                                                    name
                                                    type
                                                    udi
                                                }
                                                icon {
                                                    url
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
}
`}

export function getQuery () {
  return query
}
