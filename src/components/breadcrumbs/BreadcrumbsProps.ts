import { ReactElement } from 'react';

export interface BreadcrumbLink {
  href: string;
  text: string;
  prefetch?: boolean;
  icon?: string;
}

export interface BreadcrumbIconObject {
  [key: string]: ReactElement;
}

export type BreadcrumbsItemProps = React.LiHTMLAttributes<HTMLLIElement> & {
  href?: string;
  prefetch?: boolean;
  useNextLink?: boolean;
  seperatorIcon?: React.ReactElement;
  itemClassName?: string;
};

export interface BreadcrumbsData {
    links?: BreadcrumbLink[];
    iconObject?: BreadcrumbIconObject;
}

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLDivElement> {
    data?: BreadcrumbsData;
    children?: React.ReactNode;
    innerRef?: React.Ref<HTMLUListElement>;
    innerProps?: React.HTMLAttributes<HTMLUListElement>;
    useNextLink?: boolean;
    itemClassName?: string;
    seperatorIcon?: ReactElement;
    slug: string;
  }