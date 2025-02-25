import { PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src";

export async function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  const allSnippet = pageAndComponentCombo?.component?.data?.allSnippet as any;
  return allSnippet?.items[0]?.snippetCode;
}
