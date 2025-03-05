import { log, logPrefix, PageAndSingleComponentDetails, processRawUrlsOnServer } from "@conversiondigital/headless-basics-data/src";

export async function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(
    `${logPrefix()}[${pageAndComponentCombo.component.identifier}][${pageAndComponentCombo.page.source}][${pageAndComponentCombo.page.preliminarySlug}] mapIdentifierData started, ${JSON.stringify(pageAndComponentCombo?.component?.data)}`
  );
  
  const heroComponents: any[] = [];
  const content = pageAndComponentCombo?.component?.data as any;

  log.trace(
    `${logPrefix()}[${pageAndComponentCombo.component.identifier}][${pageAndComponentCombo.page.source}][${pageAndComponentCombo.page.preliminarySlug}] mapSubComponentContentData > `
  );

  function extractHeroComponents(pages: any[], source: string) {
    if (!pages?.length) return;
    log.trace(`${logPrefix()} Processing ${source} items`);
    pages.forEach((page: any) => {
      if (!page.components?.length) return;
      log.trace(`${logPrefix()} Processing ${source} ${page.components.length} component(s)`);
      page.components.forEach((component: any) => {
        log.trace(`${logPrefix()} Component details: `, component);
        if (component.__typename === "Hero") {
          log.trace(`${logPrefix()} Add a hero component(s) to ${source}`);
          heroComponents.push(component);
        }
      });
    });
  }

  extractHeroComponents(content?.allPage, "allPage");
  extractHeroComponents(content?.allHomepage, "allHomepage");

  const desiredSortOrder = pageAndComponentCombo?.component?.sortOrder;
  log.trace(`${logPrefix()} desiredSortOrder > `, desiredSortOrder);
  
  const matchingData = (typeof desiredSortOrder !== "number" || desiredSortOrder < 0 || desiredSortOrder >= heroComponents.length)
    ? (log.warn(`${logPrefix()} desiredSortOrder (${desiredSortOrder}) is out of bounds. heroComponents length: ${heroComponents.length}`), {})
    : heroComponents[desiredSortOrder];

  return matchingData;
}


function getComponentDocumentation() {
  return "/library/3-hero-component";
}

function getYoutubeDocumentation() {
  return "https://www.youtube.com/watch?v=QjRs6QA8y6Q";
}
