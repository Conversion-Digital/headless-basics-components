import { PageAndSingleComponentDetails, getLogger, variablesNavigationBase, logPrefix} from "@conversiondigital/headless-basics-data/src";

const log = getLogger("headless-basics-components.theme.default.components.navigation.mapping");
export function variables(pageAndSingleComponentCombo: PageAndSingleComponentDetails) {
  log.trace(`[${logPrefix()}][${pageAndSingleComponentCombo?.component.identifier}] page navigation mappings variables`);
  return variablesNavigationBase(pageAndSingleComponentCombo);
}
