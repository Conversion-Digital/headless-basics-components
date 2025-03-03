import { log, logPrefix, PageAndSingleComponentDetails, processRawUrlsOnServer } from "@conversiondigital/headless-basics-data/src";

export async function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.info(
    `${logPrefix()}[${pageAndComponentCombo.component.identifier}][${pageAndComponentCombo.page.source}][${pageAndComponentCombo.page.preliminarySlug}] mapIdentifierData started, ${JSON.stringify(pageAndComponentCombo?.component?.data)}`
  );
  
  const heroComponents: any[] = [];
  const content = pageAndComponentCombo?.component?.data as any;

  log.info(
    `${logPrefix()}[${pageAndComponentCombo.component.identifier}][${pageAndComponentCombo.page.source}][${pageAndComponentCombo.page.preliminarySlug}] mapSubComponentContentData > `
  );

  if (content?.allPage?.length > 0) {
    log.info(`${logPrefix()} Processing allPage items`);
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

  return heroComponents;
}

// export async function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
//   const content = pageAndComponentCombo?.component?.data as any;
//   const edges = content?.allPage?.components;
//   log.info("variables sanity mapHeroData > ", JSON.stringify(content));
//   log.info("data.content.children.edges > ", edges);

//   let matchingData:any = getMatchingResultBySortOrder(edges, "Hero", pageAndComponentCombo?.component?.sortOrder);

//   if (!matchingData) {
//     matchingData = {}
//   }

//   matchingData.componentDocumentation = getComponentDocumentation();
//   matchingData.youtubeVideo = getYoutubeDocumentation();
//   const languageSite = pageAndComponentCombo?.page?.languageSite; 
//   if (!languageSite) {
//     return null;
//   }
//   if (matchingData) {
//     await processRawUrlsOnServer(matchingData, languageSite, 'url');
//   }

//   return matchingData;
// }

function getComponentDocumentation() {
  return "/library/3-hero-component";
}

function getYoutubeDocumentation() {
  return "https://www.youtube.com/watch?v=QjRs6QA8y6Q";
}
