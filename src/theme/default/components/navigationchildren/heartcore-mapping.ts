import { PageAndSingleComponentDetails, processNavItem } from "@conversiondigital/cd-headless-data/src";
import { getLogger, logPrefix } from "@conversiondigital/cd-headless-data/src";

const log = getLogger("headless-component-lib.theme.default.components.navigationchildren.mappings");

export function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {

  log.trace(`[${logPrefix()}][${pageAndComponentCombo?.component.identifier}] page navigation mappings`);
  
  const content = pageAndComponentCombo?.component?.data?.content as any;
  const languageSite = pageAndComponentCombo?.page?.languageSite;
  let mappedNav = [];

  if (content?.children?.items?.length > 0) {
    mappedNav = content?.children?.items?.map((item: any) => {
      if (languageSite)
        return processNavItem(item, languageSite);
    });
  }

  mappedNav = mappedNav.filter((item: any) => !(item.name.indexOf('_') > -1));

  return mappedNav;
}
