import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src/interfaces";

export function query(pageAndComponentCombo: PageAndSingleComponentDetails): string {
  return `
    query GetCtafooterBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        components {
          __typename
          ... on Ctafooter {
            __typename
            _key
            _type
            selectableVariant
            sortOrder
            heading
            description
            email
            phone
            address
            ctaLabel
            ctaLink
            globalComponentSource {
              __typename
              ... on Ctafooter {
                heading
                description
                email
                phone
                address
                ctaLabel
                ctaLink
                selectableVariant
                sortOrder
              }
            }
          }
        }
      }
      allHomepage {
        components {
          __typename
          ... on Ctafooter {
            __typename
            _key
            _type
            selectableVariant
            sortOrder
            heading
            description
            email
            phone
            address
            ctaLabel
            ctaLink
            globalComponentSource {
              __typename
              ... on Ctafooter {
                heading
                description
                email
                phone
                address
                ctaLabel
                ctaLink
                selectableVariant
                sortOrder
              }
            }
          }
        }
      }
    }
  `;
}