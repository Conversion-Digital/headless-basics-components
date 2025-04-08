"use client"

import React from "react"

export type FooterProps = React.HTMLAttributes<HTMLDivElement> & {
  center?: boolean
  data?: any
  variant?: string
  isLive: boolean
}

const SiteFooter = React.forwardRef<HTMLDivElement, FooterProps>(
  ({ data, variant, isLive, center, className, ...props }, ref) => {
    return (
      <footer>
        {/* Footer content will be added later */}
      </footer>
    )
  }
)

SiteFooter.displayName = "Footer"

export default SiteFooter
