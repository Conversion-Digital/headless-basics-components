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

  if (content?.allPage?.length > 0) {
    log.trace(`${logPrefix()} Processing allPage items`);
    content.allPage.forEach((page: any) => {
      if (page.components?.length > 0) {
        log.trace(
          `${logPrefix()} Processing page ${page.components.length} component(s)`
        );
        page.components.forEach((component: any) => {
          log.trace(`${logPrefix()} Component details: `, component);
          // Only add components with __typename equal to "Hero"
          if (component.__typename === "Hero") {
            log.info(
              `${logPrefix()} Add a hero component(s) to the page`
            );
            heroComponents.push(component);
          }
        });
      }
    });
  }

  // Filter hero components by the desired sortOrder and return the single matching object
  const desiredSortOrder = pageAndComponentCombo?.component?.sortOrder;
  log.info(`${logPrefix()} desiredSortOrder > `, desiredSortOrder);
  let matchingData: any;
  if (typeof desiredSortOrder !== "number" || desiredSortOrder < 0 || desiredSortOrder >= heroComponents.length) {
    log.warn(`${logPrefix()} desiredSortOrder (${desiredSortOrder}) is out of bounds. heroComponents length: ${heroComponents.length}`);
    matchingData = {};
  } else {
    matchingData = heroComponents[desiredSortOrder];
  }

  return matchingData;
}


function getComponentDocumentation() {
  return "/library/3-hero-component";
}

function getYoutubeDocumentation() {
  return "https://www.youtube.com/watch?v=QjRs6QA8y6Q";
}
