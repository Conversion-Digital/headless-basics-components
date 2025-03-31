import { getLogger, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src"

export const log = getLogger("default.components.sanity.Template.query");

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(`${logPrefix} variables query > `, JSON.stringify(pageAndComponentCombo?.component?.data));
  return `
        query GetTemplateBySlug($slug: String!) {
          allPage(where: { slug: { current: { eq: $slug } } }) {
            components {
              __typename
              ... on Template {
                ...TemplateBase

              }
            }
          }
          allHomepage {
            components {
              __typename
              ... on Template {
                ...TemplateBase
                subtitle
                globalComponentSource {
                  __typename
                  _key
                  _type

                  ...TemplateBase
                }
              }
            }
          }
        }

        fragment TemplateBase on Template {
          __typename
          _key
          _type
          selectableVariant
          button {
            __typename
            _key
            _type
            label
            link
          }
          title
          heading
          backgroundImage {
            __typename
            _key
            _type
            asset {
              url
            }
          }
        }
  `;
}

export function getQuery() {
  return query;
}