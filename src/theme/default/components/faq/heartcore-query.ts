import { PageAndSingleComponentDetails } from "@conversiondigital/cd-headless-data/src";

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  return `query FaqComponentsBySlug($slug: String!) {
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
                              name
                              level
                              sortOrder
                              updateDate
                              ... on Faq{
                                  url
                                  backgroundColour
                                  updateDate
                                  datasource
                                  {
                                    id
                                    url
                                    name
                                    __typename
                                    updateDate
                                    ... on Faq
                                    {
                                        updateDate
                                        faqsList{
                                            content{
                                               ... on HeadingTextComponentCOMP
                                              {
                                                 heading
                                                 text
                                              }
                                            }
                                        }

                                    }
                                  }
                                   faqsList{
                                      content{
                                               ... on HeadingTextComponentCOMP
                                              {
                                                 heading
                                                 text
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
        ... on Faq{
            updateDate
            faqsList{
          content{
                  ... on HeadingTextComponentCOMP
                  {
                      heading
                      text
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
