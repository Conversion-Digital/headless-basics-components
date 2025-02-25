import { log, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src";

export async function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(`${logPrefix()}[${pageAndComponentCombo.component.identifier}][${pageAndComponentCombo.page.source}][${pageAndComponentCombo.page.preliminarySlug}] mapIdentifierData started`);
  const childNodes: ChildNode[] = [];
  const content = pageAndComponentCombo?.component?.data?.content as any;
  log.trace(`${logPrefix()}[${pageAndComponentCombo.component.identifier}][${pageAndComponentCombo.page.source}][${pageAndComponentCombo.page.preliminarySlug}] mapSubComponentContentData > `);
  if (content?.children?.edges?.length > 0) {
    content?.children?.edges?.forEach((edge: { node: any; }) => {
      const { node } = edge;

      if (node.contentTypeAlias === 'dataFolder') {
        node.children.edges.forEach((childEdge: { node: any; }) => {
          const { node: childNode } = childEdge;
          log.trace(`${logPrefix()} mapSubComponentContentData > childNode > `, childNode.name, childNode.id, childNode.url, childNode.__typename);
          childNodes.push(childNode);
        });
      }
    });
  }

  return childNodes;
}

