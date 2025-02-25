import { getMatchingResultBySortOrder, log, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/cd-headless-data/src";

export async function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  const content = pageAndComponentCombo?.component?.data?.content as any;
  log.trace(`${logPrefix()}[mapMottoData][1][${pageAndComponentCombo?.page?.preliminarySlug}] > `)
  log.trace("data.content.children.edges > ", content?.children?.edges);

  if(!content?.children?.edges){
    log.error(`${logPrefix()}[mapMottoData][last][${pageAndComponentCombo?.page?.preliminarySlug}] Could not find a data query location for Motto`);
    return {};
  }

  let matchingData:any = getMatchingResultBySortOrder(content?.children?.edges, "Motto", pageAndComponentCombo?.component?.sortOrder);

  if (!matchingData) {
    matchingData = {}
    log.error(`${logPrefix()}[mapMottoData][last][${pageAndComponentCombo?.page?.preliminarySlug}] Could not find a data query location for Motto`);
  }

  matchingData.componentDocumentation = getComponentDocumentation();
  matchingData.youtubeVideo = getYoutubeDocumentation();

  log.trace(`${logPrefix()}[mapMottoData][last][${pageAndComponentCombo?.page?.preliminarySlug}] found component for Motto`);
  return matchingData;
}

function getComponentDocumentation() {
  return "/library/4-highlight";
}

function getYoutubeDocumentation() {
  return "https://www.youtube.com/watch?v=ZVJFeeKO3RQ";
}

