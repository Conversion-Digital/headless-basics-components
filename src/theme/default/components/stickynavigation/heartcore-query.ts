import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src";

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  return `
  query StickyNavBySlug($slug: String!) {
    content(url: $slug) {
      url
      id
      contentTypeAlias
      __typename
      name
      updateDate
      ... on StickyNavigation{
          updateDate
          phoneNumber
          buttons{
              name
              target
              type
              url
          }
          showSearch
          showCountrySelector
          searchText
      }
    }
  }
 `;
}

export function getQuery() {
  return query;
}
