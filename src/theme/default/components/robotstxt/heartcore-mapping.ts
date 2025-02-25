import { PageAndSingleComponentDetails } from "@conversiondigital/cd-headless-data/src";

export async function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  const allSnippet = pageAndComponentCombo?.component?.data?.allSnippet as any;
  return allSnippet?.items[0]?.snippetCode;
}
