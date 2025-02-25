/* eslint-disable react/prop-types */
import React, { ReactElement, ReactNode } from "react";
import Link from "next/link";
import { DefaultSeperatorIcon } from "../../icons/SeperatorIcon";
import { BreadcrumbsItemProps as BaseBreadcrumbsItemProps } from "./BreadcrumbsProps";

// Extend the base props to explicitly include children.
export interface BreadcrumbsItemProps extends BaseBreadcrumbsItemProps {
  children: ReactNode;
}

const BreadcrumbsItem = React.forwardRef<HTMLLIElement, BreadcrumbsItemProps>(
  (
    {
      children,
      href,
      prefetch,
      useNextLink = false,
      className = "",
      seperatorIcon = <DefaultSeperatorIcon />,
      ...props
    },
    ref,
  ) => {
    const LinkComponent = useNextLink ? Link : "a";
    const childComponent = seperatorIcon as ReactElement;

    const prefetchVal = typeof prefetch === "undefined" || prefetch ? true : false;
    return (
      <li role="link" className={className} {...props} ref={ref}>
        {href ? (
          <LinkComponent data-attr-prefetch={prefetchVal} href={href} prefetch={prefetchVal}>
            {children}
          </LinkComponent>
        ) : (
          children
        )}

        {/* Render the separator icon. If the cloned element's type is "span", render it directly; otherwise, wrap it in a span */}
        {React.cloneElement(childComponent, {}).type === "span" ? seperatorIcon : <span>{seperatorIcon}</span>}
      </li>
    );
  },
);

BreadcrumbsItem.displayName = "BreadcrumbsItem";

export default BreadcrumbsItem;
