import { PageAndSingleComponentDetails, variablesByName } from "@conversiondigital/headless-basics-data/src";

export function variables(pageAndComponentCombo: PageAndSingleComponentDetails) {
  return variablesByName(pageAndComponentCombo?.component?.variableForQuery as string);
}
