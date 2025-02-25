
import StickyNavigation from "./StickyNavigation"
import MobileMegaMenuLoader from "./mobileMegaMenuLoader"
import { getLogger, logPrefix } from "@conversiondigital/headless-basics-data"
import { NavMegaMenuV1 } from "./navigation/navMegaMenuV1"
import { LanguageSite } from "@conversiondigital/headless-basics-data/src/interfaces"

const log = getLogger("page.MegaMenu")

export function buildMegaMenu(navItems: any, stickyNavItems: any, languageSite?: LanguageSite) {
  log.trace(`${logPrefix()}[ATA] buildMegaMenu`)
  return (
    <header className="w-full h-18 md:h-auto">
      <StickyNavigation data={stickyNavItems} languageSite={languageSite} />
      <NavMegaMenuV1
        navItems={navItems}
        className="hidden w-full flex-col items-center pt-0 lg:flex"
        languageSite={languageSite}
      />
      <MobileMegaMenuLoader
        navItems={navItems}
        stickyNavData={stickyNavItems}
        languageSite={languageSite}
        className="flex h-[75px] w-full items-center justify-between lg:hidden"
      />
    </header>
  )
}
