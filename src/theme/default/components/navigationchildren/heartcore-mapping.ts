import { PageAndSingleComponentDetails, processNavItem } from "@conversiondigital/headless-basics-data/src";
import { getLogger, logPrefix } from "@conversiondigital/headless-basics-data/src";

const log = getLogger("headless-basics-components.theme.default.components.navigationchildren.mappings");

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
