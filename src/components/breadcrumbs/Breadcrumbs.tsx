/* eslint-disable react/prop-types */
import React, { forwardRef, ForwardedRef, Key } from "react";
import { BreadcrumbsProps } from "./BreadcrumbsProps";
import { cnm as cn } from "../../utils/cnMerge";
import { DefaultSeperatorIcon } from "../../icons/SeperatorIcon";
import BreadcrumbsItem from "./BreadcrumbsItem";

const exludedPaths = ["/", "au", "nz"];

export const Breadcrumbs = forwardRef<HTMLDivElement, BreadcrumbsProps>(
  (
    { children, data, className, innerProps, slug, itemClassName, ...props },
    ref,
  ) => {
    const classes = cn("breadcrumbs [&>ul]:flex-wrap", "text-sm", className);

    if (exludedPaths.includes(slug)) return <></>;

    // Map the breadcrumb items.
    const breadcrumbItems: React.ReactNode[] = (data?.links ?? []).map((item, idx: Key) => (
      <BreadcrumbsItem
        key={idx}
        href={item.href}
        prefetch={item.prefetch}
        useNextLink
        className={itemClassName}
        seperatorIcon = {(<DefaultSeperatorIcon></DefaultSeperatorIcon>)}
      >
        {item.icon && data?.iconObject && <>{data.iconObject[item.icon]}</>}
        {item.text || null}
      </BreadcrumbsItem>
    ));

    // Typecast the array to React.ReactNode
    const renderedBreadcrumbs: any = data?.links
      ? (React.Children.toArray(breadcrumbItems) as React.ReactNode)
      : children;

    // Change the innerRef definition to use the explicit ForwardedRef type
    const innerRef = React.useRef<HTMLUListElement>(null);

    return (
      <div role="navigation" aria-label="Breadcrumbs" className={classes} ref={ref} {...props}>
        <ul {...innerProps} ref={innerRef}>
          {renderedBreadcrumbs}
        </ul>
      </div>
    );
  },
);

Breadcrumbs.displayName = "Breadcrumbs";

export default Object.assign(Breadcrumbs, { Item: BreadcrumbsItem });
