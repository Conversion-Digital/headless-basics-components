/* eslint-disable react/prop-types */
import React from "react"
import { cnm as cn } from "../../utils/cnMerge";

export type HeroOverlayProps = React.HTMLAttributes<HTMLDivElement>

const HeroOverlay = React.forwardRef<HTMLDivElement, HeroOverlayProps>(
  ({ className, children, ...props }, ref): JSX.Element => {
    return (
      <div ref={ref} className={cn("hero-overlay", className)} {...props}>
        {children}
      </div>
    )
  }
)

HeroOverlay.displayName = "HeroOverlay"

export default HeroOverlay
