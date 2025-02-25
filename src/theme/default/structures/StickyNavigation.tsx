"use client"

import { Suspense, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { ChevronDownIcon } from "@radix-ui/react-icons"

import DevButton from "../../../components/developer/devButton"
import { LanguageSite } from "@conversiondigital/headless-basics-data/src/interfaces"
import { processURLForNavigation, cn, checkPrefetchAvailability } from "@conversiondigital/headless-basics-data"
import SearchBox from "./SearchBox"
import Dropdown from "../components/common/dropdown/DropDown"



interface Button {
  name: string
  target: string | null
  type: string
  url: string
}

export interface StickyNavDataI {
  url: string
  id: string
  contentTypeAlias: string
  __typename: string
  name: string
  phoneNumber: string
  buttons: Button[]
  showSearch: boolean
  showCountrySelector: boolean
  searchText: string
}
interface StickyNavProps {
  data: StickyNavDataI
  languageSite?: LanguageSite
}

const menuItems = [
  {
    label: "AUS",
    value: "AUS",
    imageSrc: "/showcase/images/global/australia-28586_960_720.png",
  },
  {
    label: "NZ",
    value: "NZ",
    imageSrc: "/showcase/images/global/newzealand-27119.png",
  },
  {
    label: "US",
    value: "US",
    imageSrc: "/showcase/images/global/usa-1960922_960_720.jpg",
  },
  // Add more items as needed
]

const StickyNavigation = (data: StickyNavProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const router = useRouter()
  const pathname = usePathname()
  useEffect(() => {
    if (pathname && pathname.startsWith("/au")) {
      setSelectedIndex(0) // index of Australia in menuItems array
		} else if (pathname && pathname.startsWith("/nz")) {
      setSelectedIndex(1) // index of New Zealand in menuItems array
    } else {
      setSelectedIndex(2) // index of US in menuItems array
    }
  }) // Dependency updated to router.asPath

  const handleMenuItemClick = (item: { value: string }) => {
    const index = menuItems.findIndex(
      (menuItem) => menuItem.value === item.value
    )
    setSelectedIndex(index)

    if (menuItems[index].value === "AUS") {
      router.push("/au")
    } else if (menuItems[index].value === "NZ") {
      router.push("/nz")
    } else if (menuItems[index].value === "US") {
      router.push("/")
    }
  }

  let metaData
  if (data) {
    metaData = {
      name: "Stick Navigation",
      variant: "Top Stick Nav",
      query:
        "Look in >> @/theme/components/navigation/stickynavigation/query.ts",
      queryFileLocation: "@/theme/components/navigation/stickynavigation/query.ts",
      id: data?.data?.id,
      url: data?.data?.url,
      typeName: data?.data?.__typename,
      rendering: "default",
      liveDocumentation: "https://example.com",
      youtubeVideo: "https://youtube.com",
      renderingExportFunction: "defaultExportFunction",
      isInsideGrid: false,
      isClientSide: true
    }
  }

  if(!data?.languageSite) {
    return null
  }

      /* <SubScriptionPopup/> */
  return (
    <>

      <nav className="fixed top-0 z-50 hidden h-[75px] w-full items-center justify-center bg-my-yellow text-sm lg:flex">
        {metaData && (
          <Suspense>
            <DevButton metaData={metaData} />
          </Suspense>
        )}
        <div className="container flex h-full w-full items-center justify-between px-4">
          <div className="mr-[5%] min-w-max">
            <Link href={processURLForNavigation("/", data?.languageSite)}>
            <Image
                src="/showcase/logo.png"
                alt={"Logo"}
                width={227}
                height={60}
                sizes="100vw"
                className="md:max-w-[150px] lg:max-w-170 xl:max-w-full"
              />
            </Link>
          </div>
          <ul className="relative flex h-full w-full flex-1 items-center justify-end gap-x-6 whitespace-nowrap lg:gap-x-8">
            <li
              className={
                "pointer mr-4  inline-block font-urbanist text-nav font-semibold uppercase leading-nav tracking-0.1em text-my-blue hover:font-bold"
              }
            >
              <a href={`tel:${data?.data?.phoneNumber}`}>
                {data?.data?.phoneNumber}
              </a>
            </li>

            {data?.data?.buttons?.map(({ url, name }) => (
              <li
                key={name}
                className={
                  "mr-4 inline-block rounded-full bg-my-blue px-4 py-2 font-urbanist text-nav font-semibold uppercase leading-nav tracking-0.1em text-my-white transition hover:bg-my-white hover:text-my-black"
                }
              >
                <Link
                  prefetch={checkPrefetchAvailability(url)}
                  data-attr-prefetch={checkPrefetchAvailability(url)}
                  href={url}
                  className="p-2"
                >
                  {name}
                </Link>
              </li>
            ))}
            <Suspense fallback={<></>}>
              <SearchBox
                showSearch={data?.data?.showSearch}
                placeholder={data?.data?.searchText}
                languageSite={data?.languageSite}
              />
            </Suspense>
          </ul>
          <div className="min-[1380px]:w-18 w-24 min-[1450px]:w-10 2xl:w-0" />
        </div>
        {data?.data?.showCountrySelector && (
          <div className="absolute right-4 flex w-20 items-center ">
            <Dropdown
              align="center"
              options={menuItems}
              closeOnOptionClick={true}
              closeOnClickOutside={true}
              onClick={handleMenuItemClick}
              triggerRenderer={() => (
                <div className="flex items-center justify-between gap-x-2">
                  <div className="flex cursor-pointer items-center font-urbanist text-nav font-semibold">
                    <Image
                      className="object-contain"
                      alt={menuItems[selectedIndex].label}
                      src={menuItems[selectedIndex].imageSrc}
                      width={22}
                      height={22}
                    />
                    <span className="mx-2">
                      {menuItems[selectedIndex].label}
                    </span>
                    <ChevronDownIcon width={22} height={16} />
                  </div>
                </div>
              )}
              optionRenderer={(props) => (
                <div
                  className={cn(
                    "flex items-center gap-2",
                    props?.styles?.option,
                    props?.focused && props?.styles?.focused,
                    props?.disabled && props?.styles?.disabled
                  )}
                >
                  <Image
                    src={props.imageSrc}
                    width={20}
                    height={20}
                    alt={props.label as string}
                  />
                  <span className="mx-1 font-urbanist text-nav">
                    {props.label}
                  </span>
                </div>
              )}
            />
          </div>
        )}
      </nav>
      <div className="hidden h-[75px] bg-transparent lg:block" />
    </>
  )
}

export default StickyNavigation
