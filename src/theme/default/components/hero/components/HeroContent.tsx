import { cn } from "@conversiondigital/cd-headless-data/src";
import React from "react"

export type HeroContentProps = React.HTMLAttributes<HTMLDivElement>

const HeroContent = React.forwardRef<HTMLDivElement, HeroContentProps>(
  ({ className, children, ...props }, ref): JSX.Element => {
    return (
      <div ref={ref} className={cn("hero-content", className)} {...props}>
        {children}
      </div>
    )
  }
)

HeroContent.displayName = "HeroContent"

export default HeroContent
