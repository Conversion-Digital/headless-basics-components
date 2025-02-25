import React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cnm as cn } from "../../utils/cnMerge";;

interface AccordionTriggerProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
  className?: string;
  collapsedIcon?: React.ReactElement;
  expandedIcon?: React.ReactElement;
  hasChild?: boolean;
}

const AccordionTrigger = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Trigger>, AccordionTriggerProps>(
  ({ className, children, collapsedIcon, expandedIcon, hasChild, ...props }, ref) => {
    const collapsedIconWithClass = hasChild
      ? React.cloneElement(collapsedIcon ?? <ChevronDown />, {
          className: `${collapsedIcon?.props?.className} collapsedIcon`,
        })
      : null;

    const expandedIconWithClass = hasChild
      ? React.cloneElement(expandedIcon ?? <ChevronUp />, {
          className: `${expandedIcon?.props?.className} expandedIcon`,
        })
      : null;

    return (
      <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
          ref={ref}
          className={cn(
            "flex flex-1 items-center justify-between py-4 font-urbanist font-800 transition-all hover:underline [&[data-state=closed]>svg.expandedIcon]:hidden [&[data-state=open]>svg.collapsedIcon]:hidden",
            className,
          )}
          {...props}
        >
          {children}
          {collapsedIconWithClass}
          {expandedIconWithClass}
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
    );
  },
);

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

export { AccordionTrigger };
