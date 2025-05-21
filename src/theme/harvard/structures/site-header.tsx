import Link from "next/link"
import { getLogger, logPrefix, PageBlueprint, processURLForNavigation } from "@conversiondigital/headless-basics-data";
import { SiteHeaderProps } from "../../../interfaces/siteHeaderProps";

const log = getLogger("theme.harvard.structures.site-header");

export function SiteHeader({ blueprint, isMegamenu = false, megaMenuMenu }: SiteHeaderProps) {
  return (
    <header className="w-full bg-gray-900 flex items-center justify-between p-4 sm:p-8">
      <div className="container flex items-center justify-between mx-auto px-0">
      <Link href="/">
        <div className="text-xl font-bold text-harvard-white">
        Harvard Hindman
        </div>
      </Link>
      <div className="flex items-center space-x-2 sm:space-x-4">
        <Link
        href="https://docs.google.com/document/d/1QaydaFOx6-aDZyW25JR_4W__KEqw2bTUpwEvhKmIBs8/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-1 text-harvard-black sm:space-x-2 border-2 border-harvard-black bg-white px-3 py-2 text-xs font-medium transition-colors hover:bg-harvard-black hover:text-white sm:border-3 sm:px-6 sm:py-3 sm:text-sm"
        aria-label="Resume"
        >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 sm:h-6 sm:w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
        <span>Resume</span>
        </Link>
        <Link
        href="/"
        className="flex items-center text-harvard-black space-x-1 sm:space-x-2 border-2 border-harvard-black bg-white px-3 py-2 text-xs font-medium transition-colors hover:bg-harvard-black hover:text-white sm:border-3 sm:px-6 sm:py-3 sm:text-sm"
        aria-label="Contact"
        >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 sm:h-6 sm:w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v11.25a8.987 8.987 0 016 2.292m0-14.25A8.966 8.966 0 0118 3.75c1.052 0 2.062.18 3 .512v11.25a8.987 8.987 0 00-6 2.292m0-14.25v14.25M3.75 15.75V7.5c0-1.485 1.209-2.693 2.693-2.693h11.114c1.484 0 2.693 1.208 2.693 2.693v8.25M3.75 15.75h16.5M3.75 15.75L6 18m12-2.25L18 18" />
        </svg>
        <span>Contact</span>
        </Link>
      </div>
      </div>
    </header>
  )
}
