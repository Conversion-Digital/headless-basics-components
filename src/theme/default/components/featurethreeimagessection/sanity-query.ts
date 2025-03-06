import { log, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src"

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(`${logPrefix()}[featureThreeImagesSection][sanity-query][query] called for slug: ${pageAndComponentCombo?.page?.preliminarySlug}`)
  return `
    query GetFeatureThreeImagesSectionBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        _id
        _type
        components {
          __typename
          ... on FeatureThreeImagesSection {
            _key
            _type
            title
          }
        }
      }
      allHomepage {
        _id
        _type
        components {
          __typename
          ... on FeatureThreeImagesSection {
            _key
            _type
            title
          }
        }
      }
    }
  `
}
export function getQuery() {
  return query;
}