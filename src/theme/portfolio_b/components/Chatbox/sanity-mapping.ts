import { log, logPrefix, PageAndSingleComponentDetails, extractComponentsFromSanityData } from "@conversiondigital/headless-basics-data/src";

export async function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(`${logPrefix()}[chatbox][sanity-mapping][mapIdentifierData] started for slug: ${pageAndComponentCombo?.page?.preliminarySlug}`);
  const data = pageAndComponentCombo?.component?.data;
  const matchingComponent = extractComponentsFromSanityData(data, "ChatBox", log);
  return {
    ...matchingComponent,
    componentDocumentation: "/library/chatbox",
    youtubeVideo: "https://www.youtube.com/watch?v=example", 
  };
}
