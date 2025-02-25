import React from "react"
import Image from "next/image"
import Link from "next/link"
import { alignmentClasses, checkPrefetchAvailability, cn, LanguageSite } from '@conversiondigital/cd-headless-data/src';
import { getSectionBackgroundColour } from "../../../../../utils/getSectionBackgroundColour";
import InlineSVG from "../../../../../../components/sections/InlineSVG";

interface CtaIconLinksProps {
  data: {
    align?: string;
    backgroundColour?: string;
    callToActionItems?: {
      content: {
        id?: string;
        link?: {
          url?: string;
        };
        icon?: {
          url?: string;
          media?: {
            altText?: string;
            name?: string;
          };
        };
        heading?: string;
      };
    }[];
  };
  languageSite?: LanguageSite | undefined;
}

export const CtaIconLinks = ({ data, languageSite }: CtaIconLinksProps) => {
  const { justifyClass } = alignmentClasses({ align: data?.align || "center" })

  return (
    <div
      className={`w-full ${getSectionBackgroundColour(
        data?.backgroundColour as string,
        "bg-my-blue"
      )}  py-10`}
    >
      <div
        className={cn(
          "container flex w-full flex-col items-center gap-6 sm:flex-row",
          {
            "justify-around": justifyClass?.includes("center"),
            [justifyClass]: !justifyClass?.includes("center"),
          }
        )}
      >
        {data?.callToActionItems?.map(({ content: node }, index) => (
          <div
            key={node.id ?? index}
            className="mx-4 last:pb-0 max-[639px]:pb-8"
          >
            {node.link?.url && (
              <Link
                href={node?.link?.url}
                prefetch={checkPrefetchAvailability(node?.link?.url)}
                data-attr-prefetch={checkPrefetchAvailability(node?.link?.url)}
                className="flex flex-col items-center font-urbanist text-body1 font-800 uppercase leading-body1 tracking-0.1em text-white"
              >
                {node?.icon?.url && node?.icon?.url.endsWith(".svg") ? (
                  <div className="mb-3 h-12 w-12">
                    <InlineSVG
                      src={node?.icon?.url || ""}
                      width={48}
                      height={48}
                      className="hover:text-my-yellow"
                      alt={
                        node?.icon?.media?.altText && node?.icon?.media?.altText !== ""
                          ? node?.icon?.media?.altText
                          : node?.icon?.media?.name && node?.icon?.media?.name !== ""
                          ? node?.icon?.media?.name
                          : node?.heading || "default alt text"
                      }
                    />
                  </div>
                ) : (
                  <Image
                    src={node?.icon?.url || ""}
                    width={48}
                    height={48}
                    className="mb-3 h-12 w-12"
                    alt={
                      node?.icon?.media?.altText && node?.icon?.media?.altText !== ""
                        ? node?.icon?.media?.altText
                        : node?.icon?.media?.name && node?.icon?.media?.name !== ""
                        ? node?.icon?.media?.name
                        : node?.heading || "default alt text"
                    }
                  />
                )}
                <p className="text-center underline">{node.heading}</p>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
