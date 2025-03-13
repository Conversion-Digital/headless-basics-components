import { getLogger, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src"

export const log = getLogger("default.components.sanity.hero.query");

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace("variables query > ", JSON.stringify(pageAndComponentCombo?.component?.data));
  return `
        query GetHeroBySlug($slug: String!) {
          allPage(where: { slug: { current: { eq: $slug } } }) {
            components {
              __typename
              ... on Hero {
                ...HeroBase
              }
            }
          }
          allHomepage {
            components {
              __typename
              ... on Hero {
                ...HeroBase
                subtitle
                globalComponentSource {
                  __typename
                  _key
                  _type
                  ...HeroBase
                }
              }
            }
          }
        }

        fragment HeroBase on Hero {
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