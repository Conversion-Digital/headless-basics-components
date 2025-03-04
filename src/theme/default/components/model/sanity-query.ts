import { isGuid, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src";
import { log } from "@conversiondigital/headless-basics-data";

export function query(individualComponentProps: PageAndSingleComponentDetails) {
  log.trace(`${logPrefix()}[${individualComponentProps.component.identifier}][${individualComponentProps.page.source}][${individualComponentProps.page.preliminarySlug}] query `);
  if (typeof individualComponentProps?.component?.variableForQuery === 'undefined') {
    throw new Error(`${logPrefix()}[model][query][${individualComponentProps?.page?.source}] IndividualComponentProps?.variableForQuery is undefined`);
  }

  if (individualComponentProps?.component?.udi && isGuid(individualComponentProps?.component?.udi)) {
    return `
    query GetPageType($id: ID!) {
      allPage(where: { _id: { eq: $id } }) {
        _id
        title
        __typename
      }
    }
  `
  }

  return `
    query GetPageTypeBySlug($slug: String!) {
    allPage(where: { slug: { current: { eq: $slug } } }) {
      _id
      title
      __typename
    }
  }`
}

export function getQuery() {
  return query;
}
