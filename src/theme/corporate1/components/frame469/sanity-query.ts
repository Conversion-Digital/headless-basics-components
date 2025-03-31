
import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src/interfaces";

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  return `
    query Frame469BySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        components {
          __typename
          ... on Frame469 {
            _type
            selectableVariant
            title
            heading
            subtitle
            description
            image {
              asset {
                url
                altText
              }
            }
            sortOrder
            globalComponentSource {
              __typename
              _type
              selectableVariant
              title
              heading
              subtitle
              description
              image {
                asset {
                  url
                  altText
                }
              }
              sortOrder
            }
          }
        }
      }
      allHomepage {
        components {
          __typename
          ... on Frame469 {
            _type
            selectableVariant
            title
            heading
            subtitle
            description
            image {
              asset {
                url
                altText
              }
            }
            sortOrder
            globalComponentSource {
              __typename
              _type
              selectableVariant
              title
              heading
              subtitle
              description
              image {
                asset {
                  url
                  altText
                }
              }
              sortOrder
            }
          }
        }
      }
    }
  `;
}

export function getQuery() {
  return query;
}
