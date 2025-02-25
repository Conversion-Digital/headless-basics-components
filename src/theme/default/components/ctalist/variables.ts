import { log, logPrefix, PageAndSingleComponentDetails, standardVariables } from "@conversiondigital/cd-headless-data/src";

export function variables(pageAndComponentCombo: PageAndSingleComponentDetails) {
  const vars = standardVariables(pageAndComponentCombo);
  log.trace(`${logPrefix()}[variables][1][${pageAndComponentCombo?.page?.pageIdentifier.backEndSlug}]${pageAndComponentCombo?.page.source} vars :::: `, vars);
  return vars;
}

