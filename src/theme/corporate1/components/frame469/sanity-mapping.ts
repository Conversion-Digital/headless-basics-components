
import { getLogger, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src";
import { extractComponentsFromSanityData } from "@conversiondigital/headless-basics-data/src/cms/sanity/sanityMappingUtils";

const log = getLogger("corporate1.components.frame469.sanity-mapping");

export async function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(
    `${logPrefix()}[frame469][${pageAndComponentCombo.page.source}][${pageAndComponentCombo.page.preliminarySlug}] mapIdentifierData started, data: ${JSON.stringify(pageAndComponentCombo?.component?.data)}`
  );

  const content = pageAndComponentCombo?.component?.data;
  const matchingData = extractComponentsFromSanityData(content, "Frame469", log);

  // If local doesn't have an image, fallback to backgroundImage from global if present
  if (matchingData?.globalComponentSource?.backgroundImage && !matchingData?.backgroundImage) {
    matchingData.backgroundImage = matchingData.globalComponentSource.backgroundImage;
  }

  return matchingData;
}
