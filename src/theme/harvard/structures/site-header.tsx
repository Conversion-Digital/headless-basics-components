import Link from "next/link"
import { getLogger, logPrefix, PageBlueprint, processURLForNavigation } from "@conversiondigital/headless-basics-data";
import { SiteHeaderProps } from "../../../interfaces/siteHeaderProps";

const log = getLogger("theme.harvard.structures.site-header");

export function SiteHeader({ blueprint, isMegamenu = false, megaMenuMenu }: SiteHeaderProps) {
  return (
    <header className="container flex items-center justify-between p-4 sm:p-8">
      <Link href="/">
        <div className="text-xl font-bold text-harvard-crimson">
          Harvard
        </div>
      </Link>
      <Link
        href="/"
        className="border-2 border-harvard-crimson bg-white px-3 py-2 text-xs font-medium transition-colors hover:bg-harvard-crimson hover:text-white sm:border-3 sm:px-6 sm:py-3 sm:text-sm"
      >
        Contact Me
      </Link>
    </header>
  )
}
