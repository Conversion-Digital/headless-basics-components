import { log, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src";

export async function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.info(`${logPrefix()}[${pageAndComponentCombo.component.identifier}][${pageAndComponentCombo.page.source}][${pageAndComponentCombo.page.preliminarySlug}] mapIdentifierData started, ${JSON.stringify(pageAndComponentCombo?.component)}`);
  const childNodes: ChildNode[] = [];
  const content = pageAndComponentCombo?.component?.data?.content as any;
  log.info(`${logPrefix()}[${pageAndComponentCombo.component.identifier}][${pageAndComponentCombo.page.source}][${pageAndComponentCombo.page.preliminarySlug}] mapSubComponentContentData > `);
  if (content?.children?.edges?.length > 0) {
    content?.children?.edges?.forEach((edge: { node: any; }) => {
      const { node } = edge;

      console.log(`${logPrefix()} mapSubComponentContentData > node > `, node);

      if (node?.contentTypeAlias === 'dataFolder') {
        node.children.edges.forEach((childEdge: { node: any; }) => {
          const { node: childNode } = childEdge;
          log.info(`${logPrefix()} mapSubComponentContentData > childNode > `, childNode.name, childNode.id, childNode.url, childNode.__typename);
          childNodes.push(childNode);
        });
      }
    });
  }

  return childNodes;
}

