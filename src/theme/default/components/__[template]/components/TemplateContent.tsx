import { cn } from "@conversiondigital/headless-basics-data/src";
import React from "react"

export type HeroContentProps = React.HTMLAttributes<HTMLDivElement>

const TemplateContent = React.forwardRef<HTMLDivElement, HeroContentProps>(
  ({ className, children, ...props }, ref): JSX.Element => {
    return (
      <div ref={ref} className={cn("template-content", className)} {...props}>
        {children}
      </div>
    )
  }
)

TemplateContent.displayName = "TemplateContent"

export default TemplateContent
