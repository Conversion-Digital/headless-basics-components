
import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src/interfaces"

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  return `
    query GetFrame469BySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        components {
          __typename
          ... on Frame469 {
            __typename
            title
            subtitle
            phone
            fax
            email
            officeLocation
            bookButtonLabel
            bookButtonLink
            sortOrder
            selectableVariant
            globalComponentSource {
              __typename
              title
              subtitle
              phone
              fax
              email
              officeLocation
              bookButtonLabel
              bookButtonLink
              sortOrder
              selectableVariant
            }
          }
        }
      }
      allHomepage {
        components {
          __typename
          ... on Frame469 {
            __typename
            title
            subtitle
            phone
            fax
            email
            officeLocation
            bookButtonLabel
            bookButtonLink
            sortOrder
            selectableVariant
            globalComponentSource {
              __typename
              title
              subtitle
              phone
              fax
              email
              officeLocation
              bookButtonLabel
              bookButtonLink
              sortOrder
              selectableVariant
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
