import { extractComponentsFromSanityData, log, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src"

const logger = log
export async function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.info(
    `${logPrefix()}[${pageAndComponentCombo.component.identifier}][${pageAndComponentCombo.page.source}][${pageAndComponentCombo.page.preliminarySlug}] mapIdentifierData started, ${JSON.stringify(pageAndComponentCombo?.component?.data)}`
  );

  const content = pageAndComponentCombo?.component?.data
  const matchingData = extractComponentsFromSanityData(content, "FooterStructure", log, false, "allFooterStructure")

  // if (!(matchingData?.image && matchingData.backgroundImage)) {
  //   matchingData.image = matchingData.backgroundImage;
  // }

  log.info(
    `${logPrefix()}[${pageAndComponentCombo.component.identifier}][${pageAndComponentCombo.page.source}][${pageAndComponentCombo.page.preliminarySlug}] mapIdentifierData completed, ${JSON.stringify(matchingData)}`
  );

  return matchingData
}