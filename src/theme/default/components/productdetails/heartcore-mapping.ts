import { getLogger, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src";

const log = getLogger("theme.components.productdetails.mapping");

export function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace("variables heartcore mapIdentifierData > ", JSON.stringify(pageAndComponentCombo?.component?.data));
  return pageAndComponentCombo?.component?.data?.productPage;
}
