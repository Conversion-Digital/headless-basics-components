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
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className="bg-gray-900 py-12 text-white sm:py-16" // Use Tailwind class for background, ensure default text is light
    >
      <div className="container mx-auto px-4 sm:px-8">
        <div className="flex flex-col items-center text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="mb-6 sm:mb-0">
            <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl text-white"> {/* Ensure heading is white */}
              Let's Connect
            </h2>
            <p className="mt-2 text-gray-400">
              Feel free to reach out for collaborations or just a chat.
            </p>
          </div>
          <div className="flex space-x-4">
            {/* Placeholder Social Links - Replace with actual icons and links */}
            <a
              href="mailto:your.email@example.com" // Replace with your email
              className="text-gray-400 hover:text-white"
              aria-label="Email"
            >
              {/* Placeholder for Email Icon SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/yourprofile" // Replace with your LinkedIn profile
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
              aria-label="LinkedIn"
            >
              {/* Placeholder for LinkedIn Icon SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="https://github.com/yourusername" // Replace with your GitHub profile
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
              aria-label="GitHub"
            >
              {/* Placeholder for GitHub Icon SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Harvard Hindman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

