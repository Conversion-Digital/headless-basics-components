import { PageAndSingleComponentDetails } from "@conversiondigital/cd-headless-data/src";

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  return `
  query ProductBySlug($slug: String!) {
    productPage(url: $slug) {
       id
       url
       updateDate
       contentTypeAlias
       name
       __typename
       productDescription
       productFeature
       images{
           url
           media{
            name
            updateDate
            mediaTypeAlias
            ... on Image{altText}
            }
       }
       productName
       productPhoto
       {
           url
           media{
            name
            updateDate
            mediaTypeAlias
            ... on Image{altText}
            }
       }
       productVideos{
           url
       }
       showStandardProductBody
       features{
            content{
                __typename
                contentTypeAlias
                ... on HeadingImageRichTextCOMP{
                    contentTypeAlias
                    heading
                    image{
                        url
                        media{
                            name
                            updateDate
                            mediaTypeAlias
                            ... on Image{altText}
                            }
                    }
                    description
                }
            }
        }
       specifications{
           content{
               __typename
               contentTypeAlias
               ... on ProductSpecificationTableEntryCOMP{
                   category
                   title
                   value
               }
           }
       }
       turnOnAdvancedProductSpecificationTable
       rows
       {
            content{
                     __typename
                       contentTypeAlias
                      ... on ProductSpecificationTableRow{
                                                   values{
                                                       content{
                                                           ... on SpecificationTableColumn{
                                                               isHeading
                                                               columnSpan
                                                               value
                                                           }
                                                       }
                                                   }
                                               }
            }

       }
        imageSectionContent{
            content{
                __typename
                contentTypeAlias
                ... on HeadingTextComponentCOMP{
                    heading
                    text
                }
                ... on ImageAndHeadingComponentCOMP{
                    heading
                    image
                    {
                        url
                        media{
                            name
                            updateDate
                            mediaTypeAlias
                            ... on Image{altText}
                            }
                    }
                }
            }
        }
        warranty
        frequentlyAskedQuestions
        downloads{
            content{
                __typename
                contentTypeAlias
                ... on HeadingImageMediaButtonComponentCOMP{
                    buttonText
                    contentTypeAlias
                    heading
                    image{
                        url
                        media{
                            name
                            updateDate
                            mediaTypeAlias
                            ... on Image{altText}
                            }
                    }
                    media{
                        url
                    }
                }
            }
        }
    }
}
  `;
}

export function getQuery() {
  return query;
}
