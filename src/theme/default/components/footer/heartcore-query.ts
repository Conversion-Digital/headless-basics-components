import { PageAndSingleComponentDetails, getLogger, logPrefix } from "@conversiondigital/cd-headless-data/src";

const log = getLogger("headless-component-lib.theme.default.components.footer.query");

export function query(IndividualComponentProps: PageAndSingleComponentDetails) {
  log.trace(`[${logPrefix()}][${IndividualComponentProps?.component.identifier}] footer query`);
  return `
  query FooterBySlug($slug: String!) {
    content(url: $slug) {
      url
      contentTypeAlias
      __typename
      name
      updateDate
      ... on Footer{
          leftLogo{
              url
              media{
                name
                updateDate
                mediaTypeAlias
                ... on Image{
                    updateDate
                    altText}
                }
          }
          rightLogo
          {
              url
              media{
                name
                updateDate
                mediaTypeAlias
                ... on Image{
                    updateDate
                    altText}
                }
          }
          bDLogo {
              url
              media{
                name
                updateDate
                mediaTypeAlias
                ... on Image
                        {updateDate
                         altText}
                }
         }
          copyrightNotice
          linkSections{
              content{
                  __typename
                  contentTypeAlias
                  ... on LinkListCOMP{
                      heading
                      links{
                          name
                          target
                          type
                          udi
                          url
                      }
                  }
              }
          }
          button{
              url
              name
              target
              type
          }
          phoneNumber
      }
    }
  }
 `;
}

export function getQuery() {
  return query;
}
