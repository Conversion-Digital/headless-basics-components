import { GlobalTailwindNavigationMenu } from "../../../components/global-navigation";
import Logo from "../../../components/media/logo";
import { ImageInputProps } from "../../../interfaces/Images";
import { getLogger, logPrefix, PageBlueprint, processURLForNavigation } from "@conversiondigital/headless-basics-data";
import Link from "next/link";
import { SiteHeaderProps } from "../../../interfaces/siteHeaderProps";
import { DefaultHeader } from "./navigation/default-header";

const log = getLogger("theme.default.structures.site-header");

export function SiteHeader({ blueprint, isMegamenu = false, megaMenuMenu }: SiteHeaderProps) {

  let navItems: string | any[] | undefined = [];
  if (blueprint?.navItems) {
    navItems = blueprint.navItems;
    log.trace(`${logPrefix()} NavItems: ${JSON.stringify(navItems)}`)
  }

  if (navItems?.length === 0) {
    log.warn(`${logPrefix()} No navItems provided: ${navItems}`)
    return (<DefaultHeader />);
  }

  if (isMegamenu && megaMenuMenu) {
    log.trace(`${logPrefix()}[Default] SiteHeader with MegaMenu`)
    return (<>{megaMenuMenu}</>);
  } else {

    const languageSite = blueprint?.pageData?.languageSite;
    if (!languageSite) {
      log.error(`${logPrefix()}[SiteHeader] languageSite is not defined`);
      return (<DefaultHeader />);
    }

    return (
      <>
        <div data-role="Header" className="w-full flex flex-col items-center">
          <header className="w-[100%] flex items-center justify-between py-8 px-4 z-50 max-w-(--breakpoint-lg) mx-auto">
            <Link href={processURLForNavigation("/", languageSite)} >
              <Logo image={blueprint?.siteSettings?.logo as ImageInputProps} className="w-100 object-cover" />
            </Link>
            <GlobalTailwindNavigationMenu navClasses={"flex flex-row items-start"} navItems={navItems} />
            {
              blueprint?.siteSettings?.hideStoreButtons === false &&
              <div className="home-container01">
              </div>
            }
          </header>
        </div>
      </>
    )
  }
}
