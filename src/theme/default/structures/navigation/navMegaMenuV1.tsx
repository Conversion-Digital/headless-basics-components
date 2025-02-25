import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { PageBlueprint, IndividualComponentProps, LanguageSite } from "@conversiondigital/headless-basics-data/src/interfaces"

import { getLogger, logPrefix, processURLForNavigation } from "@conversiondigital/headless-basics-data";
import NavItem, { NavItemInterface } from "./NavItem";

const log = getLogger("page.navMegaMenuV1");

interface NavigationProps {
  navItems: NavItemInterface[]
  className?: string
  languageSite?: LanguageSite
}

export const filterNavItem = (
  navItem: NavItemInterface | undefined
): {
  visible: boolean
  children: any
} => {
  const shouldShow = (): boolean => {
    if (
      typeof navItem?.url !== "undefined" &&
      typeof navItem?.showInNavigation !== "undefined" &&
      navItem.showInNavigation === true
    ) {
      return true
    }
    return false
  }

  return {
    visible: shouldShow(),
    children: navItem?.children?.filter((item) => filterNavItem(item).visible),
  }
}

// render a tailwind navigation menu
const NavMegaMenuV1 = ({
  navItems,
  className,
  languageSite,
}: NavigationProps) => {

  if(typeof languageSite === "undefined") {
    log.error(`${logPrefix()} No languageSite provided: ${languageSite}`)
    return <></>
  }

  log.trace(`${logPrefix()}[ATA] NavMegaMenuV1`)

  if (typeof navItems === "undefined") {
    log.error(`${logPrefix()} No navItems provided: ${navItems}`)
    return <></>
  }

  log.trace(`${logPrefix()} NavItems: ${JSON.stringify(navItems)}`)

  return (
    <nav
      className={`flex w-full items-center justify-center bg-white py-4! shadow-sm lg:h-[100px] lg:py-0! ${className}`}
    >
      <div className="container relative h-full w-full px-4 lg:mx-24">
        <ul className="h-full w-full items-center justify-between overflow-hidden lg:flex">
          <li className="mr-4 flex min-w-max items-center md:pb-4 lg:pb-0 xl:mr-[5%]">
            <Link href={processURLForNavigation("/", languageSite)}>
            <Image
                src="/showcase/logo.png"
                alt={"Logo Small"}
                width={29}
                height={43}
                sizes="100vw"
              />
            </Link>
          </li>
          <li className="h-full flex-1 lg:pl-4">
            <ul className="flex h-full w-full items-center justify-end [&>li]:ml-6 whitespace-nowrap font-urbanist text-nav font-medium uppercase leading-nav tracking-0.1em text-my-blue">
              {navItems.map((item, index) => (
                <Suspense
                  key={`${item.id}-${index}`}
                  fallback={<div>Loading...</div>}
                >
                  <NavItem {...item} />
                </Suspense>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export { NavMegaMenuV1 };

