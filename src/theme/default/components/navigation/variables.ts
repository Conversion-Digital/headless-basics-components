import { PageAndSingleComponentDetails, getLogger, variablesNavigationBase, logPrefix} from "@conversiondigital/cd-headless-data/src";

const log = getLogger("headless-component-lib.theme.default.components.navigation.mapping");
export function variables(pageAndSingleComponentCombo: PageAndSingleComponentDetails) {
  log.trace(`[${logPrefix()}][${pageAndSingleComponentCombo?.component.identifier}] page navigation mappings variables`);
  return variablesNavigationBase(pageAndSingleComponentCombo);
}
