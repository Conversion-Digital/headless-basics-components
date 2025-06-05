import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src/interfaces";

export function query(pageAndComponentCombo: PageAndSingleComponentDetails): string {
  return `
    query GetCdtestimonialsBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        components {
          __typename
          ... on Cdtestimonials {
            __typename
            _key
            _type
            selectableVariant
            title
            subtitle
            testimonials {
              name
              position
              testimonial
              image {
                asset {
                  url
                }
              }
            }
            videoTitle
            videoSubtitle
            videoTestimonials {
              name
              position
              testimonial
              videoUrl
              thumbnail {
                asset {
                  url
                }
              }
            }
            sortOrder
            globalComponentSource {
              __typename
              _key
              _type
              title
              subtitle
              testimonials {
                name
                position
                testimonial
                image {
                  asset {
                    url
                  }
                }
              }
              videoTestimonials {
                name
                position
                testimonial
                videoUrl
                thumbnail {
                  asset {
                    url
                  }
                }
              }
            }
          }
        }
      }
      allHomepage {
        components {
          __typename
          ... on Cdtestimonials {
            __typename
            _key
            _type
            selectableVariant
            title
            subtitle
            testimonials {
              name
              position
              testimonial
              image {
                asset {
                  url
                }
              }
            }
            videoTitle
            videoSubtitle
            videoTestimonials {
              name
              position
              testimonial
              videoUrl
              thumbnail {
                asset {
                  url
                }
              }
            }
            sortOrder
            globalComponentSource {
              __typename
              _key
              _type
              title
              subtitle
              testimonials {
                name
                position
                testimonial
                image {
                  asset {
                    url
                  }
                }
              }
              videoTestimonials {
                name
                position
                testimonial
                videoUrl
                thumbnail {
                  asset {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  `;
}