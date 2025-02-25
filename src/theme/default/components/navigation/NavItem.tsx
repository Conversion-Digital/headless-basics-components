"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@conversiondigital/headless-basics-data/src"
import { ChevronDownIcon } from "@radix-ui/react-icons"

import { filterNavItem } from "./navMegaMenuV1"

export interface NavItemInterface {
  id?: string
  url?: string
  name: string
  _level?: number
  superAlias?: string
  target?: string
  prefetch?: boolean
  children?: NavItemInterface[]
  showInNavigation?: boolean
  className: string
  productPhoto?: any
}

interface NavItemProps extends NavItemInterface {
  _level?: number
}

const NavItem = (navItem: NavItemProps) => {
  const { url = "", name, productPhoto, className, _level = 1 } = navItem
  const { visible, children } = filterNavItem(navItem)

  const hasChildren = children && children.length > 0
  const [isHovered, setIsHovered] = useState(false)

  const childrenClass = cn(className, _level > 1 && "hover:bg-gray-200")

  const childrenspanClass = cn(_level > 2 && "lg:nth-2:text-base")

  const target = navItem.target ? navItem.target : "_self"
  const prefetch =
    navItem?.prefetch || typeof navItem.prefetch === "undefined" ? true : false

  if (!visible) return null

  return (
    <li
      className={cn(
        "flex items-center justify-center text-sm transition duration-100 ease-in-out md:text-xxs lg:text-xs xl:text-sm",
        childrenClass,
        { "font-extrabold": isHovered }
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={url}
        target={target}
        prefetch={prefetch}
        data-attr-prefetch={prefetch}
        className="z-10 flex w-full cursor-pointer space-x-2 [&:hover>span]:stroke-black"
      >
        {productPhoto && (
          // <Image
          //   alt={"Nav Item Product Photo"}
          //   src={productPhoto?.url}
          //   width={245}
          //   height={245}
          //   className="object-cover lg:h-61 lg:w-61 w-full h-32 mb-4"
          // />
          <Image
            src={productPhoto?.url}
            // sizes="(max-width: 600px) 90vw, (min-width: 601px) 100vw,(max-height: 325px) 90vw, (min-height: 325px) 100vw"
            width={245}
            height={245}
            className="mb-4 h-32 w-full object-cover lg:h-61 lg:w-61"
            alt={
              productPhoto?.media?.altText != ""
                ? productPhoto?.media?.altText
                : productPhoto?.media?.name != ""
                ? productPhoto?.media?.name
                : name
            }
            quality={75}
            loading="lazy"
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority={false}
          />
        )}
        <span className={cn("flex items-center lg:gap-x-2", childrenspanClass)}>
          {name}
          {hasChildren && <ChevronDownIcon fontSize={18} />}
        </span>
      </Link>
      {hasChildren && renderChildOf(_level, isHovered, children, navItem)}
    </li>
  )
}

export default NavItem

const renderChildOf = (
  _level: number,
  isHovering: boolean,
  navItemChilds: NavItemInterface[],
  self: any
) => {
  if (_level === 1 && isHovering) {
    return (
      <div className="absolute inset-x-4 top-1/2 pt-[50px]">
        <div className="absolute z-50 w-full pt-0.5">
          <ul
            tabIndex={0}
            style={{ minHeight: navItemChilds.length ? "398px" : "0px" }}
            className="relative flex flex-1 flex-col bg-white p-2 shadow-md"
          >
            {navItemChilds.map((item, idx) => (
              <NavItem
                {...item}
                key={`${item.id}-${idx}`}
                _level={_level + 1}
                className={cn("justify-start font-normal [&>a]:p-4", {
                  "[&>a]:flex [&>a]:flex-col [&>a]:items-center [&>a:hover>img]:scale-105":
                    item?.productPhoto,
                })}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  if (_level === 2 && isHovering) {
    return (
      <div
        className={
          "absolute left-[29%] top-0 z-20 h-full w-[71%] border-l border-gray-400 bg-gray-200"
        }
      >
        <ul tabIndex={0} className="h-full w-full overflow-hidden">
          <NavItem
            name={`View all ${self.name}`}
            url={self.url}
            showInNavigation
            className={`${self?.className} font-extrabold hover:bg-gray-300!`}
            key={`self-${self.id}`}
            _level={_level + 1}
          />
          {navItemChilds.slice(0, 3).map((item, idx) => (
            <NavItem
              {...item}
              key={`${item.id}-${idx}`}
              _level={_level + 1}
              className={cn("inline-block w-[33%] justify-start! p-4", {
                "[&>a]:flex [&>a]:flex-col [&>a]:items-center [&>a:hover>img]:scale-105":
                  item?.productPhoto,
              })}
            />
          ))}
        </ul>
      </div>
    )
  }

  return <></>
}
