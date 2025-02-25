import { PageAndSingleComponentDetails } from "@conversiondigital/cd-headless-data/src";

export function query(individualComponentProps: PageAndSingleComponentDetails) {
  return `
  query GetRichTextComponent($slug: String!) {
      content(url: $slug) {
        url
        contentTypeAlias
        name
        sortOrder
        updateDate
        ... on Richtext{
            body
            order
            sortOrder
            align
            backgroundColour
            updateDate
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
                                url
                                sortOrder
                                updateDate
                                ... on Richtext{
                                    body
                                    order
                                    sortOrder
                                    align
                                    backgroundColour
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
  `
}

export function getQuery() {
  return query;
}
