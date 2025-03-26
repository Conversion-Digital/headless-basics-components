import { getLogger, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src"
import { extractComponentsFromSanityData } from "@conversiondigital/headless-basics-data/src/cms/sanity/sanityMappingUtils"

export const log = getLogger("default.components.sanity.template.mapping")

export async function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(
    `${logPrefix()}[${pageAndComponentCombo.component.identifier}][${pageAndComponentCombo.page.source}][${pageAndComponentCombo.page.preliminarySlug}] mapIdentifierData started, ${JSON.stringify(pageAndComponentCombo?.component?.data)}`
  );

  const content = pageAndComponentCombo?.component?.data
  const matchingData = extractComponentsFromSanityData(content, "Hero", log)

  if (!(matchingData?.image && matchingData.backgroundImage)) {
    matchingData.image = matchingData.backgroundImage;
  }

  return matchingData
}

function getComponentDocumentation() {
  return "/library/3-hero-component";
}

function getYoutubeDocumentation() {
  return "https://www.youtube.com/watch?v=QjRs6QA8y6Q";
}