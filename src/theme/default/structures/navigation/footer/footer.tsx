"use client";

import React, { Fragment, Key, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { checkPrefetchAvailability } from "@conversiondigital/headless-basics-data";
import { PageBlueprint, LanguageSite } from "@conversiondigital/headless-basics-data/src/interfaces";
import { cn } from "@conversiondigital/headless-basics-data";
import MobileCTA from "./mobileCta";
import SitePickerLoader from "./sitePickerLoader";
import DevButton from "../../../../../components/developer/devButton";

interface LinkItem {
  url?: string;
  child?: JSX.Element;
  text?: string;
}

export type FooterProps = React.HTMLAttributes<HTMLDivElement> & {
  center?: boolean;
  data?: any;
  variant?: string;
  isLive: boolean;
  languageSite: LanguageSite | undefined;
};

function renderLink(link: LinkItem, index: number) {
  return link.child ? (
    <Fragment key={index}>{link.child}</Fragment>
  ) : (
    <a key={index} className={cn({ ["link-hover link"]: link.url })}>
      {link.text}
    </a>
  );
}

export type FooterTitleProps = React.HTMLAttributes<HTMLSpanElement>;

export const FooterTitle = React.forwardRef<HTMLSpanElement, FooterTitleProps>(
  ({ className, ...props }, ref) => {
    const classes = cn("footer-title", className);
    return <span {...props} className={classes} ref={ref} />;
  }
);
FooterTitle.displayName = "FooterTitle";

const SiteFooter = React.forwardRef<HTMLDivElement, FooterProps>(
  ({ data, variant, isLive, center, className, languageSite, ...props }, ref) => {
    const classes = cn("footer", className, {
      "footer-center": center,
    });

    if (data && variant === "twoLogoHorizontalLinksPlusCopyright") {
      return (
        <GetTwoLogoFooter
          {...props}
          ref={ref}
          data={data}
          isLive={isLive}
          languageSite={languageSite}
        />
      );
    } else if (data?.length) {
      return getStandardFooter(props, classes, ref, data);
    }

    return <div role="contentinfo" {...props} className={classes} ref={ref} />;
  }
);
SiteFooter.displayName = "Footer";

export default Object.assign(SiteFooter, { Title: FooterTitle });

/**
 * Standard Footer
 */
function getStandardFooter(
  props: React.HTMLAttributes<HTMLDivElement>,
  classes: string | undefined,
  ref: React.Ref<HTMLDivElement>,
  data: any[]
) {
  return (
    <div role="contentinfo" {...props} className={classes} ref={ref}>
      {data.map((item, index: Key) => (
        <div key={index}>
          <FooterTitle>{item.title}</FooterTitle>
          {item?.links.map(renderLink)}
        </div>
      ))}
    </div>
  );
}

/**
 * Two Logo Footer
 */
function GetTwoLogoFooter({
  ref,
  data,
  isLive,
  languageSite,
  ...props
}: {
  ref: React.Ref<HTMLDivElement>;
  data: any;
  isLive: boolean;
  languageSite: LanguageSite | undefined;
  [key: string]: any;
}): JSX.Element | null {
  if (!data) return null;

  const { leftLogo, rightLogo, bDLogo, copyrightNotice, linkSections } = data;

  let metaData = {
    name: "Footer",
    variant: "Two Logo - Horizontal Links - Plus Copyright",
    queryFileLocation: "@/theme/components/footer/query.ts",
    rendering: "@/sites/default/components/navigation/footer/footer.tsx",
    dataProvided: data,
  };

  return (
    <>
      <div role="contentinfo" {...props} className="grid-cols-1 bg-gray-100 p-6" ref={ref}>
        <div className="footer-logos container mb-6 flex w-full flex-col items-center justify-between gap-8 py-8 md:flex-row">
          {leftLogo?.url && (
            <Image
              className="object-contain"
              src={leftLogo.url}
              alt={leftLogo?.media?.altText || leftLogo?.media?.name || "Left Logo"}
              width={318}
              height={318}
              loading="lazy"
            />
          )}
          {rightLogo?.url && (
            <Image
              className="object-contain md:ml-auto"
              src={rightLogo.url}
              alt={rightLogo?.media?.altText || rightLogo?.media?.name || "Right Logo"}
              width={202}
              height={33}
            />
          )}
          {bDLogo?.url && (
            <Image
              className="object-contain"
              src={bDLogo.url}
              alt={bDLogo?.media?.altText || bDLogo?.media?.name || "BND Logo"}
              width={202}
              height={33}
            />
          )}
        </div>

        <div className="footer-link-sections container mb-10 w-full font-urbanist text-my-black">
          {linkSections?.map((section: { content: { heading: string; links: any[] } }, sectionIndex: Key) => (
            <div
              key={sectionIndex}
              className="flex w-full flex-col justify-between border-b border-white py-4 first:border-t md:flex-row md:items-center md:py-1"
            >
              <FooterTitle className="my-3 whitespace-nowrap text-nav font-800 leading-nav md:m-0">
                {section.content.heading}
              </FooterTitle>
              <div className="flex flex-col text-nav font-500 uppercase leading-nav md:ml-auto md:flex-row">
                {section.content.links?.map((link, linkIndex) => {
                  const prefetch = checkPrefetchAvailability(link?.url);
                  return (
                    <div className="flex flex-col gap-x-4 md:flex-row md:items-center" key={linkIndex}>
                      <Link
                        href={link.url}
                        target={link.target}
                        data-attr-prefetch={prefetch}
                        prefetch={prefetch}
                        className="mr-6 py-2 tracking-0.1em text-my-blue"
                      >
                        {link.name}
                      </Link>
                      {sectionIndex === 1 && <SitePickerLoader />}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-copyright w-full bg-my-brown-grey py-4 text-sm text-white">
        <div className="container">{copyrightNotice}</div>
      </div>

      <MobileCTA button={data.button} phoneNumber={data.phoneNumber} languageSite={languageSite} />
    </>
  );
}
