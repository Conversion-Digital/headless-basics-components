/* eslint-disable react/prop-types */
import React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cnm as cn } from "../../utils/cnMerge";;

const AccordionItem = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b border-b-slate-200 font-urbanist text-my-blue dark:border-b-slate-700", className)}
    {...props}
  />
));

AccordionItem.displayName = "AccordionItem"

export { AccordionItem };
