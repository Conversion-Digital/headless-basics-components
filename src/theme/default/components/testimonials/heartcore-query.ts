import { PageAndSingleComponentDetails } from "@conversiondigital/cd-headless-data/src";

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  return `
  query TestimonialComponentsBySlug($slug: String!) {
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
                            updateDate
                            ... on Testimonials{
                               		url
                                  sortOrder
                                  order
                                  backgroundColour
                                  updateDate
                                 pageTestimonial{
                                   content{
                                             ... on TestimonialComponentCOMP
                                            {
                                                testimonialMessage
                                                testimonialAvatar
                                                {
                                                    url
                                                }
                                                testimonialTimestamp
                                                authorName
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
