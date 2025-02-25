"use client"

import { SetStateAction, useEffect, useRef, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"

import { processURLForNavigation, cn } from "@conversiondigital/headless-basics-data"
import { SearchIcon } from "./Icon"
import { LanguageSite } from "@conversiondigital/headless-basics-data/src/interfaces"

interface SearchBoxProps extends React.HTMLAttributes<HTMLInputElement> {
  showSearch: boolean
  placeholder?: string
  variant?: "desktop" | "mobile"
  languageSite?: LanguageSite
  onClose?: () => void
}

const SearchBox = (props: SearchBoxProps) => {
  const {
    showSearch = false,
    placeholder = "",
    variant = "desktop",
    languageSite,
    onClose,
    ...rest
  } = props
  const [searchText, setSearchText] = useState("")
  const router = useRouter()
  const searchParams = useSearchParams()
  const searchTerm = searchParams.get("keyword")
  const searchBoxRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (!searchTerm) return
    setSearchText(searchTerm as string)
  }, [searchTerm])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchBoxRef.current &&
        !searchBoxRef?.current?.contains(event?.target as Node)
      ) {
        onClose?.()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [onClose])

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setSearchText(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let slug = "/search"
    if (languageSite) slug = processURLForNavigation(slug, languageSite)
    const form = e.target as HTMLFormElement
    router.push(slug + `?keyword=${(form[0] as HTMLInputElement).value}`)
  }

  if (showSearch === false) return <></>
  return (
    <form
      onSubmit={handleSubmit}
      ref={searchBoxRef}
      autoComplete="off"
      className={cn("relative flex items-center rounded-full bg-white", {
        "h-[46px] focus-within:absolute focus-within:left-0 focus-within:right-0 mr-4":
          variant !== "mobile",
        "h-[46px] w-full": variant === "mobile",
      })}
    >
      <input
        {...rest}
        type="text"
        placeholder={placeholder + ""}
        value={searchText}
        onChange={handleChange}
        className="right-0 flex-1 bg-transparent px-4 pr-12 font-urbanist font-semibold uppercase tracking-0.1em text-my-brown-grey placeholder:text-my-brown-grey focus:text-my-dark-blue focus:outline-hidden focus:placeholder:text-my-dark-blue-400 sm:text-sm"
      />
      <button
        type="submit"
        className="absolute right-4 h-8 w-8 text-center text-my-blue [&>svg:hover>path]:fill-my-yellow [&>svg>path]:transition"
      >
        <SearchIcon />
      </button>
    </form>
  )
}

export default SearchBox
