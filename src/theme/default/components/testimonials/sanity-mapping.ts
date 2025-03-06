import { log, logPrefix, PageAndSingleComponentDetails, extractComponentsFromSanityData } from "@conversiondigital/headless-basics-data/src";

export async function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(`${logPrefix()}[testimonials][sanity-mapping][mapIdentifierData] started for slug: ${pageAndComponentCombo?.page?.preliminarySlug}`);
  const data = pageAndComponentCombo?.component?.data;
  const matchingComponent = extractComponentsFromSanityData(data, "Testimonials", log);
  return {
    ...matchingComponent,
    componentDocumentation: "/library/testimonials",
    youtubeVideo: "https://www.youtube.com/watch?v=ZVJFeeKO3RQ"
  }
}