import * as React from "react";
import { forwardRef } from "react";
import * as TogglePrimative from "@radix-ui/react-toggle";
import { cnm as cn } from "../utils/cnMerge";
import { CheckIcon } from "@radix-ui/react-icons";

export interface ToggleProps {
  className?: string;
  showIcon?: boolean;
  children?: React.ReactNode;
  ariaLabel?: string;
  variant?: "default" | "primary" | "secondary";
  text?: string;
}

const Toggle = forwardRef<
  React.ElementRef<typeof TogglePrimative.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimative.Root> & ToggleProps
    
  >(
  ({ className, showIcon = false, text = "Toggle", children, ariaLabel = 'Toggle Button', variant = "default", ...props }, ref) => {
    const variantClasses = {
      default: "bg-white text-mauve11 hover:bg-violet3 data-[state=on]:bg-slate-500 data-[state=on]:text-white",
      primary: "bg-white text-mauve11 hover:bg-violet3 data-[state=on]:bg-blue-500 data-[state=on]:text-white",
      secondary: "bg-white text-mauve11 hover:bg-violet3 data-[state=on]:bg-green-500 data-[state=on]:text-white",
    };

    return (
      <div className="flex flex-col items-center gap-4">
        {text}
        <TogglePrimative.Root
          className={cn(
            "flex w-[35px] h-[35px] items-center justify-center rounded leading-4 border-2 border-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
            variantClasses[variant],
            className
          )}
          aria-label={ariaLabel}
          {...props}
          ref={ref}
        >
          {showIcon && <CheckIcon className="w-4 h-4 text-black data-[state=on]:text-white" />}
        </TogglePrimative.Root>
        <div className="mt-2">{children}</div>
      </div>
    );
  }
);

Toggle.displayName = TogglePrimative.Root.displayName;

export { Toggle };