import React from "react"

import { cn } from "@conversiondigital/headless-basics-data/src";
import TemplateContent from "./TemplateContent"
import TemplateOverlay from "./TemplateOverlay"

export type HeroProps = React.HTMLAttributes<HTMLDivElement>

const Template = React.forwardRef<HTMLDivElement, HeroProps>(
  ({ className, children, ...props }, ref): JSX.Element => {
    return (
      <div ref={ref} role="banner" className={cn("template", className)} {...props}>
        {children}
      </div>
    )
  }
)

Template.displayName = "Template"

export default Object.assign(Template, {
  Content: TemplateContent,
  Overlay: TemplateOverlay,
})
