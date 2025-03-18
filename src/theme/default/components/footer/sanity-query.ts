import { log, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src"

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(`${logPrefix()}[footer][sanity-query][query] called for slug: ${pageAndComponentCombo?.page?.preliminarySlug}`)
  return `
      query FooterStructure {
        __typename
        allFooterStructure {
          __typename
          _createdAt
          _updatedAt
          title
          leftLogo{
              ...LogoBase
          }
          rightLogo{
              ...LogoBase
          }
          logoOne{
              ...LogoBase
          }
          copyrightNotice
          linkSections {
              ...LinkSection
          }
        }
      }

      fragment LinkSection on FooterLinkSection {
        heading
        links{
          internalUrl{
              ...InternalUrlFields
          }
          externalUrl
        }
      }

      fragment InternalUrlFields on Page {
          __typename
              _key
              _type
              slug{
                  current
              }
      }

      fragment InternalUrl on FooterLogo {
        internalUrl{
              __typename
              _key
              _type
              slug{
                  current
              }
        }
      }

      fragment LogoBase on FooterLogo {
        __typename
        _key
        _type
        externalUrl
        ...InternalUrl
        media {
          __typename
          _key
          _type
          asset {
            url
          }
        }
      }
  `
}
export function getQuery() {
  return query
}