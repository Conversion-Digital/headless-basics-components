import { log, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src";

export async function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.info(
    `${logPrefix()}[${pageAndComponentCombo.component.identifier}][${pageAndComponentCombo.page.source}][${pageAndComponentCombo.page.preliminarySlug}] mapIdentifierData started, ${JSON.stringify(pageAndComponentCombo?.component?.data)}`
  );
  const childNodes: any[] = [];
  const content = pageAndComponentCombo?.component?.data as any;

  log.info(
    `${logPrefix()}[${pageAndComponentCombo.component.identifier}][${pageAndComponentCombo.page.source}][${pageAndComponentCombo.page.preliminarySlug}] mapSubComponentContentData > `
  );

  if (content?.allPage?.length > 0) {
    log.info(`${logPrefix()} Processing allPage items`);
    content.allPage.forEach((page: any) => {
      if (page.components?.length > 0) {
        log.info(
          `${logPrefix()} Processing page "${page.title}" with ${page.components.length} component(s)`
        );
        page.components.forEach((component: any) => {
          log.info(`${logPrefix()} Component details: `, component);
          childNodes.push(component);
        });
      }
    });
  }

  return childNodes;
}
