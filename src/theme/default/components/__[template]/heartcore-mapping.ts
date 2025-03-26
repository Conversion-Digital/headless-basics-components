import { getLogger, getMatchingResultBySortOrder, logPrefix, PageAndSingleComponentDetails, processRawUrlsOnServer } from "@conversiondigital/headless-basics-data/src";

export const log = getLogger("default.components.heartcore.template.mapping");

export async function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  const content = pageAndComponentCombo?.component?.data?.content as any;
  const edges = content?.children?.edges;
  log.trace(`${logPrefix} variables heartcore mapHeroData > `, JSON.stringify(pageAndComponentCombo?.component?.data));
  log.trace(`${logPrefix} data.content.children.edges > `, edges);

  let matchingData:any = getMatchingResultBySortOrder(edges, "template", pageAndComponentCombo?.component?.sortOrder);

  if (!matchingData) {
    matchingData = {}
  }

  matchingData.componentDocumentation = getComponentDocumentation();
  matchingData.youtubeVideo = getYoutubeDocumentation();
  const languageSite = pageAndComponentCombo?.page?.languageSite; 
  if (!languageSite) {
    return null;
  }
  if (matchingData) {
    await processRawUrlsOnServer(matchingData, languageSite, 'url');
  }

  return matchingData;
}

function getComponentDocumentation() {
  return "/library/3-hero-component";
}

function getYoutubeDocumentation() {
  return "https://www.youtube.com/watch?v=QjRs6QA8y6Q";
}
