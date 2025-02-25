import { PageAndSingleComponentDetails, variablesByName } from "@conversiondigital/cd-headless-data/src";

export function variables(pageAndComponentCombo: PageAndSingleComponentDetails) {
  return variablesByName(pageAndComponentCombo?.component?.variableForQuery as string);
}
