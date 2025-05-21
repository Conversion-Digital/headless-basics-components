import { extractComponentsFromSanityData, log, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src"

const logger = log
export async function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(
    `${logPrefix()}[${pageAndComponentCombo.component.identifier}][${pageAndComponentCombo.page.source}][${pageAndComponentCombo.page.preliminarySlug}] mapIdentifierData started, ${JSON.stringify(pageAndComponentCombo?.component?.data)}`
  );

  const content = pageAndComponentCombo?.component?.data;
  const thisComponentsOrder = pageAndComponentCombo?.component?.sortOrder ?? 0;
  log.trace(`${logPrefix()} thisComponentsOrder: ${thisComponentsOrder}`);
  const matchingData = extractComponentsFromSanityData(content, "FooterStructure", log, false, "allFooterStructure", thisComponentsOrder);

  // if (!(matchingData?.image && matchingData.backgroundImage)) {
  //   matchingData.image = matchingData.backgroundImage;
  // }

  log.trace(
    `${logPrefix()}[${pageAndComponentCombo.component.identifier}][${pageAndComponentCombo.page.source}][${pageAndComponentCombo.page.preliminarySlug}] mapIdentifierData completed, ${JSON.stringify(matchingData)}`
  );

  return matchingData
}