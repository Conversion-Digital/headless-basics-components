import type { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src/interfaces/PageDefinition";

export function getQuery(_pageAndComponentCombo: PageAndSingleComponentDetails) {
  return query;
}

export function query(pageAndComponentCombo: PageAndSingleComponentDetails): string {
  // We can customize fields for the ourcompany schema
  // Using typical textBlock / hero pattern as reference
  return `
    query OurCompanyComponent($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        title
        components {
          ... on Ourcompany {
            _type
            title
            subTitle
            description
            facts
            learnMoreUrl
            learnMoreLabel
            sortOrder
            selectableVariant
            media {
              asset {
                url
                altText
                name
              }
            }
            globalComponentSource {
              title
              subTitle
              description
              facts
              learnMoreUrl
              learnMoreLabel
              sortOrder
              selectableVariant
              media {
                asset {
                  url
                  altText
                  name
                }
              }
            }
          }
        }
      }
      allHomepage(where: { slug: { current: { eq: $slug } } }) {
        title
        components {
          ... on Ourcompany {
            _type
            title
            subTitle
            description
            facts
            learnMoreUrl
            learnMoreLabel
            sortOrder
            selectableVariant
            media {
              asset {
                url
                altText
                name
              }
            }
            globalComponentSource {
              title
              subTitle
              description
              facts
              learnMoreUrl
              learnMoreLabel
              sortOrder
              selectableVariant
              media {
                asset {
                  url
                  altText
                  name
                }
              }
            }
          }
        }
      }
    }
  `;
}