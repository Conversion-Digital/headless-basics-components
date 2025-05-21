import { log, logPrefix, PageAndSingleComponentDetails, extractComponentsFromSanityData } from "@conversiondigital/headless-basics-data/src";

export async function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(`${logPrefix()}[sitemapClient][sanity-mapping][mapIdentifierData] started for slug: ${pageAndComponentCombo?.page?.preliminarySlug}`);
  const data = pageAndComponentCombo?.component?.data;
  const thisComponentsOrder = pageAndComponentCombo?.component?.sortOrder ?? 0;
  log.trace(`${logPrefix()} thisComponentsOrder: ${thisComponentsOrder}`);
  const matchingComponent = extractComponentsFromSanityData(data, "SitemapClient", log, true, '', thisComponentsOrder);
  return {
    ...matchingComponent,
    componentDocumentation: "/library/sitemapclient",
    youtubeVideo: "https://www.youtube.com/watch?v=ZVJFeeKO3RQ"
  }
}