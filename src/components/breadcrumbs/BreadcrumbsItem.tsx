/* eslint-disable react/prop-types */
import React, { LiHTMLAttributes, ReactElement, JSXElementConstructor } from "react";
// Import LinkComponent's type to check what it expects
import Link from "next/link";
// Use explicit types from a single source
import type { ReactNode } from "react";
import { DefaultSeperatorIcon } from "../../icons/SeperatorIcon";

// Define a more specific base interface to avoid type conflicts
interface BaseBreadcrumbsItemProps {
  href?: string;
  prefetch?: boolean;
  useNextLink?: boolean;
  seperatorIcon?: ReactElement;
  itemClassName?: string;
}

// Extend both interfaces separately to avoid conflicts
export interface BreadcrumbsItemProps extends LiHTMLAttributes<HTMLLIElement>, BaseBreadcrumbsItemProps {
  children: ReactNode;
}

export const BreadcrumbsItem = React.forwardRef<HTMLLIElement, BreadcrumbsItemProps>(
  (
    {
      children,
      href,
      prefetch,
      useNextLink = true,
      className = "",
      seperatorIcon = <DefaultSeperatorIcon />,
      itemClassName,
      ...props
    },
    ref,
  ) => {
    const LinkComponent = useNextLink ? Link : "a";
    const childComponent = seperatorIcon as ReactElement;

    const prefetchVal = typeof prefetch === "undefined" || prefetch ? true : false;

    const itemClasses = `${className} ${itemClassName ? itemClassName : ""}`.trim();

    // Create a typed version of children
    // This addresses the React version conflict by explicitly defining the type
    const typedChildren: JSX.Element = <>{children}</>;

    return (
      <li role="link" className={itemClasses} {...props} ref={ref}>
        {seperatorIcon && <div className="breadcrumbs__seperator">{seperatorIcon}</div>}
        <div className="breadcrumbs__label">
          {href ? (
            <LinkComponent data-attr-prefetch={prefetchVal} href={href} prefetch={prefetchVal}>
              {typedChildren}
            </LinkComponent>
          ) : (
            typedChildren
          )}
        </div>
      </li>
    );
  },
);

BreadcrumbsItem.displayName = "BreadcrumbsItem";

export default BreadcrumbsItem;
