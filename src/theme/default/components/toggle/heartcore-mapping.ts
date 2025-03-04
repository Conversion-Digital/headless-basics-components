import { getMatchingResultBySortOrder, log, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src";

export async function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  const content = pageAndComponentCombo?.component?.data?.content as any;
  log.trace(`${logPrefix()}[mapIdentifierData][1][${pageAndComponentCombo?.page?.preliminarySlug}] > `)
  log.trace("data.content.children.edges > ", JSON.stringify(content?.children?.edges));

  if(!content?.children?.edges){
    log.error(`${logPrefix()}[mapIdentifierData][last][${pageAndComponentCombo?.page?.preliminarySlug}] Could not find a data query location for Toggle`);
    return {};
  }

  let matchingData:any = getMatchingResultBySortOrder(content?.children?.edges, "Toggle", pageAndComponentCombo?.component?.sortOrder);

  if (!matchingData) {
    matchingData = {}
    log.error(`${logPrefix()}[mapIdentifierData][last][${pageAndComponentCombo?.page?.preliminarySlug}] Could not find a data query location for Toggle`);
  }

  matchingData.componentDocumentation = getComponentDocumentation();
  matchingData.youtubeVideo = getYoutubeDocumentation();

  log.trace(`${logPrefix()}[mapIdentifierData][last][${pageAndComponentCombo?.page?.preliminarySlug}] found component for Toggle`);
  return matchingData;
}

function getComponentDocumentation() {
  return "/library/4-highlight";
}

function getYoutubeDocumentation() {
  return "https://www.youtube.com/watch?v=ZVJFeeKO3RQ";
}

