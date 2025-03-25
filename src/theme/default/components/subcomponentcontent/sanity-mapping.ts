import { log, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src";

export async function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(
    `${logPrefix()}[${pageAndComponentCombo.component.identifier}][${pageAndComponentCombo.page.source}][${pageAndComponentCombo.page.preliminarySlug}] mapIdentifierData started, ${JSON.stringify(pageAndComponentCombo?.component?.data)}`
  );
  
  const childNodes: any[] = [];
  const content = pageAndComponentCombo?.component?.data as any;

  log.trace(
    `${logPrefix()}[${pageAndComponentCombo.component.identifier}][${pageAndComponentCombo.page.source}][${pageAndComponentCombo.page.preliminarySlug}] mapSubComponentContentData > `
  );

  function extractComponents(pages: any[], source: string) {
    if (!pages?.length) return;
    log.trace(`${logPrefix()}[${pageAndComponentCombo.component.identifier}][${pageAndComponentCombo.page.source}][${pageAndComponentCombo.page.preliminarySlug}] Processing ${source} items`);
    pages.forEach((page: any) => {
      if (!page.components?.length) return;
      log.trace(`${logPrefix()}[${pageAndComponentCombo.component.identifier}][${pageAndComponentCombo.page.source}][${pageAndComponentCombo.page.preliminarySlug}] Processing ${source} page "${page.title}" with ${page.components.length} component(s)`);
      page.components.forEach((component: any, index: number) => {
        component.sortOrder = index;
        log.trace(`${logPrefix()}[${pageAndComponentCombo.component.identifier}][${pageAndComponentCombo.page.source}][${pageAndComponentCombo.page.preliminarySlug}] Component details (with sortOrder): `, component);
        childNodes.push(component);
      });
    });
  }

  if(pageAndComponentCombo.page.preliminarySlug === "/" || pageAndComponentCombo.page.preliminarySlug === "") {
    extractComponents(content?.allHomepage, "allHomepage");
  }else{
    extractComponents(content?.allPage, "allPage");
  }

  return childNodes;
}
