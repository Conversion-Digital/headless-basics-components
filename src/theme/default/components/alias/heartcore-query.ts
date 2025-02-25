import { PageAndSingleComponentDetails } from "@conversiondigital/cd-headless-data/src"

export function query(IndividualComponentProps: PageAndSingleComponentDetails) {
  return `
  query AliasBySlug($slug: String!) {
    content(url: $slug) {
       url
       ... on Homepage {
        superAlias
        updateDate
        }
        ... on SubComponentsPage {
        superAlias
        updateDate
        }
        ... on ProductPage {
          superAlias
          updateDate
          }
    }
}
 `;
}

export function getQuery() {
  return query;
}
