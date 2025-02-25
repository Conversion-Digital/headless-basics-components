"use client"

import { Suspense, useEffect, useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react"
import { LanguageSite } from "@conversiondigital/headless-basics-data/src/interfaces"

import { CloseIcon, HamburgerIcon, SearchIcon } from "./Icon"
import SearchBox from "./SearchBox"
import { StickyNavDataI } from "./StickyNavigation"
import { processURLForNavigation, cn } from "@conversiondigital/headless-basics-data"
import { NavItemInterface } from "./navigation/NavItem"
import { filterNavItem } from "./navigation/navMegaMenuV1"
interface MobileMegaMenuProps {
  navItems: NavItemInterface[]
  stickyNavData?: StickyNavDataI
  className?: string
  languageSite?: LanguageSite
}

export default function MobileMegaMenu({
  navItems,
  stickyNavData,
  languageSite,
  className = "",
}: MobileMegaMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <>
      <div
        className={cn(
          "flex h-full w-full items-center justify-between px-4",
          {
            "bg-my-yellow relative": isSearchOpen,
          },
          className
        )}
      >
        {isSearchOpen ? (
          <Suspense fallback={<></>}>
            <SearchBox
              variant="mobile"
              languageSite={languageSite}
              placeholder={stickyNavData?.searchText ?? ""}
              showSearch
              autoFocus
              onClose={() => setIsSearchOpen(false)}
              // onBlur={() => setIsSearchOpen(false)}
            />
          </Suspense>
        ) : (
          <>
            <span
              onClick={(e) => {
                e.preventDefault()
                setIsOpen(!isOpen)
              }}
            >
              {!isOpen ? (
                <HamburgerIcon width={22} />
              ) : (
                <CloseIcon width={22} />
              )}
            </span>
            <Link href={languageSite ? processURLForNavigation("/", languageSite) : "/"}>
              <Image
                src="/showcase/logo.png"
                alt={"Logo"}
                width={165}
                height={44}
              />
            </Link>
            <SearchIcon onClick={() => setIsSearchOpen((prev) => !prev)} />
          </>
        )}
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute inset-0 top-[75px] z-20  flex flex-col bg-white  `}
      >
        <div className="flex flex-1 flex-col overflow-y-auto py-4">
          <NestedList data={navItems} />
        </div>
        <div className="mt-auto flex flex-wrap justify-between bg-my-yellow p-4">
          {["warranty", "contact", "call us"].map((item, index) => (
            <div
              className={`flex w-1/2 items-center font-urbanist font-semibold uppercase ${
                index % 2 !== 0 ? "justify-end" : ""
              }`}
              key={item}
            >
              <Link
                href={languageSite ? processURLForNavigation("/", languageSite) : "/"}
                className="py-2  text-nav  leading-nav tracking-0.1em text-my-blue"
              >
                {item}
              </Link>
            </div>
          ))}
          <div className="relative flex w-1/2 items-center justify-end font-urbanist font-semibold uppercase">
            <select
              style={{ backgroundImage: "none" }}
              className="select select-xs max-w-max bg-transparent text-nav leading-nav tracking-0.1em text-my-blue focus:outline-hidden"
            >
              <option>AUS</option>
              <option>US</option>
            </select>
            <ChevronDownIcon className="absolute right-0 h-4 w-4 text-my-blue" />
          </div>
        </div>
      </div>
    </>
  )
}

function NestedList({ data }: { data: NavItemInterface[] }) {
  const [activeIndex, setActiveIndex] = useState<number[]>([])

  const currentData = useMemo(
    () =>
      activeIndex.reduce((acc: any, index) => {
        if (acc?.children) {
          return acc?.children?.[index]
        }
        return acc?.[index]
      }, data),
    [activeIndex, data]
  )

  function handleItemClick(index: number) {
    setActiveIndex((prev) => [...prev, index])
  }

  function handleBackClick() {
    setActiveIndex((prev) => prev.slice(0, -1))
  }

  function renderList(currentData: any) {
    let _currentData = currentData?.children || currentData
    return (
      <ul className="w-full">
        {activeIndex.length > 0 && (
          <p
            aria-label="button"
            onClick={handleBackClick}
            className="flex items-center space-x-2 px-4 py-3 font-urbanist text-nav font-medium uppercase leading-nav tracking-0.1em text-my-blue"
          >
            <ChevronLeftIcon className="h-4 w-4" /> <span>Back</span>
          </p>
        )}

        {currentData?.name ? (
          <li className="flex w-full items-center justify-between whitespace-nowrap bg-gray-300 px-4 py-3 font-urbanist text-nav font-800 uppercase leading-nav tracking-0.1em text-black">
            <Link
              className="flex-1"
              href={currentData?.url}
              target={currentData?.target}
              prefetch={currentData?.prefetch}
              data-attr-prefetch={currentData?.prefetch}
            >
              {currentData?.name}
            </Link>
          </li>
        ) : null}

        {_currentData?.map((item: any | undefined, index: number) => {
          const { visible, children: childItems } = filterNavItem(item)
          const hasChildren = childItems?.length > 0
          const target = item?.target ? item.target : "_self"
          const prefetch =
            item?.prefetch || typeof item.prefetch === "undefined"
              ? true
              : false

          return visible ? (
            <li
              onClick={() => hasChildren && handleItemClick(index)}
              key={`${item?.name}-${index}`}
              className="flex w-full cursor-pointer items-center justify-between whitespace-nowrap px-4 py-3 font-urbanist text-nav font-medium uppercase leading-nav tracking-0.1em text-my-blue"
            >
              <Link
                onClick={(e) => hasChildren && e.preventDefault()}
                href={item?.url}
                target={target}
                prefetch={prefetch}
                data-attr-prefetch={prefetch}
              >
                {item?.name}
              </Link>
              {hasChildren ? (
                <ChevronRightIcon className="h-5 w-5 text-my-blue" />
              ) : null}
            </li>
          ) : null
        })}
      </ul>
    )
  }

  if (activeIndex.length > 0) {
    return <>{renderList(currentData)}</>
  } else {
    return renderList(data)
  }
}
