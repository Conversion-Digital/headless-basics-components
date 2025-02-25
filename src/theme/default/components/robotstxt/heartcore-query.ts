import { PageAndSingleComponentDetails } from "@conversiondigital/cd-headless-data/src";

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  return `
    query GetRobotsTxt($name: String!) {
        allSnippet(where : { name :  $name }) {
          items{
              name
              snippetCode
              updateDate
          }
        }
    }`
}

export function getQuery() {
  return query;
}
