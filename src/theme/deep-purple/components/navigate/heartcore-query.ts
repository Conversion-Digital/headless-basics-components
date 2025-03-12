import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src";

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
  return `
  query GetData($slug: String!) {
    content(url: $slug) {
				id
				contentTypeAlias
				name
				__typename
				level
				url
				sortOrder
				updateDate
				children{
						edges{
								node{
										name
										__typename
										level
										url
										sortOrder
										updateDate
										children{
												edges{
														node {
																name
																__typename
																level
																url
																sortOrder
																updateDate
                                ... on Navigate{
                                      cTA
                                      cTAText
                                      }
                                                            
                            }
												}
										}
								}
						}
				}
    }
}

  `
}


export function getQuery() {
  return query
}
