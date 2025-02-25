import { isGuid, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src";

export function query(individualComponentProps: PageAndSingleComponentDetails) {
  if (typeof individualComponentProps?.component?.variableForQuery === 'undefined') {
    throw new Error(`${logPrefix()}[model][query][${individualComponentProps?.page?.source}] IndividualComponentProps?.variableForQuery is undefined`);
  }

  if (individualComponentProps?.component?.udi && isGuid(individualComponentProps?.component?.udi)) {
    return `
    query PageTypeById($id: ID!) {
      content(id: $id) {
         url
         contentTypeAlias
         name
         __typename
         updateDate
      }
    }`
  }

  return `
  query PageTypeBySlug($slug: String!) {
    content(url: $slug) {
       url
       contentTypeAlias
       name
       __typename
       updateDate
    }
  }`
}

export function getQuery() {
  return query;
}
