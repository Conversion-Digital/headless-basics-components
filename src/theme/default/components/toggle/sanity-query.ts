import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src";

export function query(pageAndComponentCombo: PageAndSingleComponentDetails) {
	return `
	query GetToggleBySlug($slug: String!) {
	allPage(where: { slug: { current: { eq: $slug } } }) {
		components{
			__typename
			... on Toggle{
				__typename
				_key
				_type            
				aRIALabel
				className
				showIcon
				text
				variant
			}
		}
	}  
	allHomepage{
		components{
			__typename       
			... on Toggle{
				__typename
				_key
				_type            
				aRIALabel
				className
				showIcon
				text
				variant
			}
		}
	}
	}

`
}

export function getQuery() {
	return query
}
