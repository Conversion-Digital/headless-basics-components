/* eslint-disable react/prop-types */
import React from "react"
import { cnm as cn } from "../../utils/cnMerge";

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
