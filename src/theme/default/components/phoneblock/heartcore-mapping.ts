import { filterSubComponentData, getLogger, PageAndSingleComponentDetails } from "@conversiondigital/cd-headless-data/src";

const log = getLogger("theme.components.phoneblock.mapping");

export async function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  const content = pageAndComponentCombo?.component?.data?.content as any;
  const edges = content?.children?.edges;
  log.trace("variables heartcore mapIdentifierData > ", JSON.stringify(pageAndComponentCombo?.component?.data))
  log.trace("data.content.children.edges > ", content?.children?.edges);

  let matchingResult:any = null;

  // This is a special case to handle for Grid or Accordion Sub-Components
  if(content?.contentTypeAlias == 'phoneBlock'){
    matchingResult = content;
  }else {
    matchingResult = await retrievePhoneBlockData(edges, matchingResult, pageAndComponentCombo?.component?.data, pageAndComponentCombo?.component?.sortOrder);
  }

  if(matchingResult){
    matchingResult.componentDocumentation = getComponentDocumentation();
    matchingResult.youtubeVideo = getYoutubeDocumentation();
  }else {
    console.log('No matchingResult found for PhoneBlock', pageAndComponentCombo?.component?.data);
  }

  return matchingResult;
}

async function retrievePhoneBlockData(edges:any, matchingResult:any, data:any, sortOrder: number) {
  if(!edges || edges.length === 0){
    return null;
  }

  let matchingDataArray = filterSubComponentData(edges, 'PhoneBlock');

  // If this call is a recursive call, then the data is structured slightly differently.
  // A recursive call would load the global datasource. the following code handles that case.
  if ((!matchingDataArray || matchingDataArray.length === 0) && data.content.contentTypeAlias === 'phoneBlock') {
    return data.content;
  } else if (matchingDataArray.length > 0) {
    // filter by matching sortOrder, take the first result
    const filteredBySortOrder = matchingDataArray.filter((item) => item.sortOrder === sortOrder);
    if (filteredBySortOrder.length === 1) {
      matchingResult = filteredBySortOrder[0];
    }
  }

  // The datasource is a global datasource, so we need to load the datasource data.
  if (matchingResult && matchingResult?.datasource && matchingResult?.datasource) {
    matchingResult = matchingResult.datasource;
  }

  return matchingResult;
}

function getComponentDocumentation() {
  return "/library/15-phone-block";
}

function getYoutubeDocumentation() {
  return "https://youtu.be/ix7rnw75vWI";
}
