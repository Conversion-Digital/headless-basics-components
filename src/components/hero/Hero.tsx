/* eslint-disable react/prop-types */
import React from "react"

import HeroContent from "./HeroContent"
import HeroOverlay from "./HeroOverlay"
import { cnm as cn } from "../../utils/cnMerge";

export type HeroProps = React.HTMLAttributes<HTMLDivElement>

const Hero = React.forwardRef<HTMLDivElement, HeroProps>(
  ({ className, children, ...props }, ref): JSX.Element => {
    return (
      <div ref={ref} role="banner" className={cn("hero", className)} {...props}>
        {children}
      </div>
    )
  }
)

Hero.displayName = "Hero"

export default Object.assign(Hero, {
  Content: HeroContent,
  Overlay: HeroOverlay,
})
