import Link from "next/link"
import { getLogger, logPrefix, PageBlueprint, processURLForNavigation } from "@conversiondigital/headless-basics-data";
import { SiteHeaderProps } from "../../../interfaces/siteHeaderProps";

const log = getLogger("theme.portfolio_b.structures.site-header");

export function SiteHeader({ blueprint, isMegamenu = false, megaMenuMenu }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 bg-white shadow-md z-50 w-full">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <p>sefsefasdfsef</p>
      </div>
    </header>
  )
}
