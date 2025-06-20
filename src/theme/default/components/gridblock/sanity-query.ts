import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src/interfaces"
import { log, logPrefix } from "@conversiondigital/headless-basics-data/src"

export function query(pageAndComponentCombo: PageAndSingleComponentDetails){
  const componentKey = pageAndComponentCombo?.component?.identifier || '';
  log.trace(`${logPrefix()} [gridblock][sanity-query][query] using component key: ${componentKey}`)
  
  return `
    query GetGridBlockBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        _id
        _type
        components {
          __typename
          ... on Carousel { _key }
          ... on Frame152 { _key }
          ... on GridBlock { 
            _key
            _type
            title
            selectableVariant
            sortOrder
            componentsGrid {
              __typename
              ... on TextBlock {
                _key
                _type
                title
                subtitle
                text
                sortOrder
                selectableVariant
              }
              ... on Toggle {
                _key
                _type
                aRIALabel
                text
                showIcon
                variant
                className
              }
              ... on Hero {
                _key
                _type
                title
                heading
                subtitle
                backgroundImage {
                  asset {
                    url
                    _id
                  }
                }
                button {
                  label
                }
                sortOrder
                selectableVariant
              }
              ... on Motto {
                _key
                _type
                words
                align
                selectableVariant
                globalComponentSource {
                  _key
                }
              }
            }
            globalComponentSource {
              __typename
              componentsGrid {
                __typename
                ... on TextBlock {
                  _key
                  _type
                  title
                  subtitle
                  text
                  sortOrder
                  selectableVariant
                }
                ... on Toggle {
                  _key
                  _type
                  aRIALabel
                  text
                  showIcon
                  variant
                  className
                }
                ... on Hero {
                  _key
                  _type
                  title
                  heading
                  subtitle
                  backgroundImage {
                    asset {
                      url
                      _id
                    }
                  }
                  button {
                    label
                  }
                  sortOrder
                  selectableVariant
                }
                ... on Motto {
                  _key
                  _type
                  words
                  align
                  selectableVariant
                  globalComponentSource {
                    _key
                  }
                }
              }
            }
          }
          ... on Hero { _key }
          ... on Motto { _key }
          ... on TextBlock { _key }
          ... on Toggle { _key }
        }
      }
      allHomepage {
        _id
        _type
        components {
          __typename
          ... on Carousel { _key }
          ... on Frame152 { _key }
          ... on GridBlock { 
            _key
            _type
            title
            selectableVariant
            sortOrder
            componentsGrid {
              __typename
              ... on TextBlock {
                _key
                _type
                title
                subtitle
                text
                sortOrder
                selectableVariant
              }
              ... on Toggle {
                _key
                _type
                aRIALabel
                text
                showIcon
                variant
                className
              }
              ... on Hero {
                _key
                _type
                title
                heading
                subtitle
                backgroundImage {
                  asset {
                    url
                    _id
                  }
                }
                button {
                  label
                }
                sortOrder
                selectableVariant
              }
              ... on Motto {
                _key
                _type
                words
                align
                selectableVariant
                globalComponentSource {
                  _key
                }
              }
            }
            globalComponentSource {
              __typename
              componentsGrid {
                __typename
                ... on TextBlock {
                  _key
                  _type
                  title
                  subtitle
                  text
                  sortOrder
                  selectableVariant
                }
                ... on Toggle {
                  _key
                  _type
                  aRIALabel
                  text
                  showIcon
                  variant
                  className
                }
                ... on Hero {
                  _key
                  _type
                  title
                  heading
                  subtitle
                  backgroundImage {
                    asset {
                      url
                      _id
                    }
                  }
                  button {
                    label
                  }
                  sortOrder
                  selectableVariant
                }
                ... on Motto {
                  _key
                  _type
                  words
                  align
                  selectableVariant
                  globalComponentSource {
                    _key
                  }
                }
              }
            }
          }
          ... on Hero { _key }
          ... on Motto { _key }
          ... on TextBlock { _key }
          ... on Toggle { _key }
        }
      }
    }
  `
}

export function getQuery() {
  return query
}

// This function is used to filter the component with the specific key
export function filterGridBlockByKey(data: any, key: string) {
  if (!key) {
    console.warn("Missing key for filtering GridBlock");
    return null;
  }
  
  console.log(`⭐ Filtering GridBlock with key: ${key}`);
  let gridBlock = null;
  
  // Try to find in allPage
  if (data?.allPage) {
    for (const page of data.allPage) {
      const components = page.components || [];
      console.log("Components in page:", components.length);
      
      if (components.length > 0) {
        console.log("Available components keys:", components.map((c: any) => ({ 
          type: c.__typename, 
          key: c._key 
        })));
      }
      
      const found = components.find(
        (component: any) => component._key === key && component.__typename === 'GridBlock'
      );
      
      if (found) {
        console.log(`✅ Found GridBlock in page with key ${key}:`, JSON.stringify(found, null, 2));
        gridBlock = found;
        break;
      }
    }
  }
  
  // If not found, try allHomepage
  if (!gridBlock && data?.allHomepage) {
    for (const homepage of data.allHomepage) {
      const components = homepage.components || [];
      console.log("Components in homepage:", components.length);
      
      if (components.length > 0) {
        console.log("Available homepage components keys:", components.map((c: any) => ({ 
          type: c.__typename, 
          key: c._key 
        })));
      }
      
      const found = components.find(
        (component: any) => component._key === key && component.__typename === 'GridBlock'
      );
      
      if (found) {
        console.log(`✅ Found GridBlock in homepage with key ${key}:`, JSON.stringify(found, null, 2));
        gridBlock = found;
        break;
      }
    }
  }
  
  if (!gridBlock) {
    // Looking for a similar key (partial match) - this can help with debugging
    interface SimilarKey {
      type: string;
      key: string;
      title: string;
    }
    
    let similarKeysFound: SimilarKey[] = [];
    
    const checkForSimilarKeys = (componentsArray: any[]) => {
      if (!componentsArray || !Array.isArray(componentsArray)) return;
      
      componentsArray.forEach(component => {
        if (component?._key && component?._key.includes(key.substring(0, 5)) && component.__typename === 'GridBlock') {
          similarKeysFound.push({
            type: component.__typename,
            key: component._key,
            title: component.title
          });
        }
      });
    };
    
    // Check in allPage
    if (data?.allPage) {
      for (const page of data.allPage) {
        checkForSimilarKeys(page.components);
      }
    }
    
    // Check in allHomepage
    if (data?.allHomepage) {
      for (const homepage of data.allHomepage) {
        checkForSimilarKeys(homepage.components);
      }
    }
    
    if (similarKeysFound.length > 0) {
      console.log(`⚠️ No exact match for key ${key}, but found similar keys:`, similarKeysFound);
    } else {
      console.log(`❌ No GridBlock found with key: ${key} and no similar keys found`);
    }
  }
  
  return gridBlock;
}