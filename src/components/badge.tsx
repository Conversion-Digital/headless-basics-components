/* eslint-disable react/prop-types */
import React, { forwardRef } from "react";
import { cnm as cn } from "../utils/cnMerge";

const BadgeColor = {
  primary: "bg-blue-500 text-white",
  secondary: "bg-gray-500 text-white",
  accent: "bg-purple-500 text-white",
  ghost: "bg-transparent border border-gray-500 text-gray-500",
  info: "bg-blue-100 text-blue-800",
  success: "bg-green-100 text-green-800",
  warning: "bg-yellow-100 text-yellow-800",
  error: "bg-red-100 text-red-800",
};

const BadgeVariant = {
  outline: "border border-current",
};

const BadgeSizes = {
  lg: "px-4 py-1.5 text-lg",
  md: "px-3 py-1 text-md",
  sm: "px-2 py-0.5 text-sm",
  xs: "px-1.5 py-0.5 text-xs",
};

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> & {
  color?: keyof typeof BadgeColor;
  size?: keyof typeof BadgeSizes;
  variant?: keyof typeof BadgeVariant;
};

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ children, className, variant, size, color, ...props }, ref): JSX.Element => {
    const classes = cn(
      "inline-flex items-center rounded-full font-medium",
      BadgeColor[color || "primary"],
      BadgeSizes[size || "md"],
      variant && BadgeVariant[variant],
      className
    );

    return (
      <div aria-label="Badge" className={classes} ref={ref} {...props}>
        {children}
      </div>
    );
  }
);

Badge.displayName = "Badge";

export default Badge;
