import { log, logPrefix, PageAndSingleComponentDetails, extractComponentsFromSanityData } from "@conversiondigital/headless-basics-data/src";

export async function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(`${logPrefix()}[videoSection][sanity-mapping][mapIdentifierData] started for slug: ${pageAndComponentCombo?.page?.preliminarySlug}`);
  const data = pageAndComponentCombo?.component?.data;
  const matchingComponent = extractComponentsFromSanityData(data, "VideoSection", log);
  return {
    ...matchingComponent,
    componentDocumentation: "/library/videosection",
    youtubeVideo: "https://www.youtube.com/watch?v=ZVJFeeKO3RQ"
  }
}