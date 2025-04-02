
import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src/interfaces"

export function query(pageAndComponentCombo: PageAndSingleComponentDetails){
  return `
    query getFrame469BySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        components {
          __typename
          ... on Frame469 {
            heading
            subtitle
            ctaLabel
            ctaLink
            phone
            fax
            email
            officeLocation
            sortOrder
            selectableVariant
            globalComponentSource {
              __typename
              ... on Frame469 {
                heading
                subtitle
                ctaLabel
                ctaLink
                phone
                fax
                email
                officeLocation
                sortOrder
                selectableVariant
              }
            }
          }
        }
      }
      allHomepage {
        components {
          __typename
          ... on Frame469 {
            heading
            subtitle
            ctaLabel
            ctaLink
            phone
            fax
            email
            officeLocation
            sortOrder
            selectableVariant
            globalComponentSource {
              __typename
              ... on Frame469 {
                heading
                subtitle
                ctaLabel
                ctaLink
                phone
                fax
                email
                officeLocation
                sortOrder
                selectableVariant
              }
            }
          }
        }
      }
    }
  `
}

export function getQuery() {
  return query
}
