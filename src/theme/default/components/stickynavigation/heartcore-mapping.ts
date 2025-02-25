import { PageAndSingleComponentDetails, processRawUrlsOnServer } from "@conversiondigital/headless-basics-data/src";

export async function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  const content = pageAndComponentCombo?.component?.data?.content;

  if (content) {
    if (pageAndComponentCombo?.page?.languageSite) {
      await processRawUrlsOnServer(content, pageAndComponentCombo.page.languageSite);
    }
  }

  return content;
}
