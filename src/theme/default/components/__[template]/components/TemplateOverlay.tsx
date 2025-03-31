import React from "react"
import { cn } from "@conversiondigital/headless-basics-data/src";

export type TemplateOverlayProps = React.HTMLAttributes<HTMLDivElement>

const TemplateOverlay = React.forwardRef<HTMLDivElement, TemplateOverlayProps>(
  ({ className, children, ...props }, ref): JSX.Element => {
    return (
      <div ref={ref} className={cn("template-overlay", className)} {...props}>
        {children}
      </div>
    )
  }
)

TemplateOverlay.displayName = "TemplateOverlay"

export default TemplateOverlay
