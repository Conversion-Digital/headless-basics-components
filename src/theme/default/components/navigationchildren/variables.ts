import { getLogger, LanguageSite, logPrefix, variablesById, PageAndSingleComponentDetails } from "@conversiondigital/cd-headless-data/src"

const log = getLogger("headless-component-lib.theme.default.components.navigationchildren.variables");

export function variables(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(`${logPrefix()}[${pageAndComponentCombo.component.identifier}] variables > variablesById abpit tp be called with ${pageAndComponentCombo?.component.variableForQuery}`);
  return variablesById(pageAndComponentCombo?.component.variableForQuery as string);
}
