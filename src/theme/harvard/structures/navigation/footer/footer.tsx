"use client"

import React, { Fragment, Key, Suspense } from "react"
import Image from "next/image"
import Link from "next/link"

import { checkPrefetchAvailability, LanguageSite } from "@conversiondigital/headless-basics-data/src";
import { cn } from "@conversiondigital/headless-basics-data"



export type FooterProps = React.HTMLAttributes<HTMLDivElement> & {
  center?: boolean
  data?: any
  variant?: string
  isLive: boolean
  languageSite: LanguageSite | undefined
}


export type FooterTitleProps = React.HTMLAttributes<HTMLSpanElement>

export const FooterTitle = React.forwardRef<HTMLSpanElement, FooterTitleProps>(
  ({ className, ...props }, ref) => {
    const classes = cn("footer-title", className)

    return <span {...props} className={classes} ref={ref} />
  }
)

const SiteFooter = React.forwardRef<HTMLDivElement, FooterProps>(
  (
    { data, variant, isLive, center, className, languageSite, ...props },
    ref
  ) => {
    const classes = cn("footer", className, {
      "footer-center": center,
    })
    return getStandardFooter(props, classes, ref, data)
  }
)

SiteFooter.displayName = "Footer"
FooterTitle.displayName = "FooterTitle"

export default Object.assign(SiteFooter, { Title: FooterTitle })

function getStandardFooter(
  props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>,
  classes: string | undefined,
  ref: string | ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined,
  data: any[]
): React.ReactElement<any, string | React.JSXElementConstructor<any>> {
  return (
    <footer
      style={{
        background: "linear-gradient(277deg, #171717 55.29%, #3D3D3D 98.19%)",
      }}
      className="py-16 text-black sm:py-32"
    >
      <div className="container flex flex-col items-center gap-y-6 px-4 sm:flex-row sm:gap-x-6 sm:gap-y-0 sm:px-8">
        <h2 className="mb-4 text-center text-3xl font-bold leading-tight sm:w-1/2 sm:text-left sm:text-5xl md:text-6xl">
          The future of
          <br />
          work is <span className="text-orange-500">here</span>
          <span className="text-[#FACF41]">.</span>
        </h2>
        <a
          href="https://www.linkedin.com/company/@conversiondigital/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[19px] text-black underline hover:text-orange-500"
        >
          Follow our Company on Linkedin
        </a>
      </div>
    </footer>
  )
}

