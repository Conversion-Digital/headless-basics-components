import { log, logPrefix, PageAndSingleComponentDetails, extractComponentsFromSanityData } from "@conversiondigital/headless-basics-data/src";

export async function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(`${logPrefix()}[postnote][sanity-mapping][mapIdentifierData] started for slug: ${pageAndComponentCombo?.page?.preliminarySlug}`);
  const data = pageAndComponentCombo?.component?.data;
  const matchingComponent = extractComponentsFromSanityData(data, "postnote", log);
  return {
    ...matchingComponent,
    componentDocumentation: "/library/postnote",
    youtubeVideo: "https://www.youtube.com/watch?v=example", // Replace with actual YouTube link
  };
}
