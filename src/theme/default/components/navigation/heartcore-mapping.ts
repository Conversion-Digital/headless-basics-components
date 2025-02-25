import { PageAndSingleComponentDetails, getLogger, logPrefix, processNavItem} from "@conversiondigital/cd-headless-data/src";

const log = getLogger("headless-component-lib.theme.default.components.navigation.mapping");
export function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {

  log.trace(`[${logPrefix()}][${pageAndComponentCombo?.component.identifier}] page navigation mappings`);
  
  const homepage = pageAndComponentCombo?.component?.data?.homepage as any;
  const languageSite = pageAndComponentCombo?.page?.languageSite;
  let mappedNav = [];
  let filteredChildren = homepage?.children?.items?.filter((x: { name: string | string[]; }) => !(x.name.indexOf('_') > -1));

  if(filteredChildren?.length > 0){
    mappedNav = filteredChildren?.map((x:any) => {
      if (languageSite)
        return processNavItem(x, languageSite);
    });
  }

  mappedNav = mappedNav.filter((x: { name: string | string[]; }) => !(x.name.indexOf('_') > -1));

  return mappedNav;
}
