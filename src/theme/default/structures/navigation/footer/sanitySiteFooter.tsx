"use client";

import React, { Key } from "react";
import Image from "next/image";
import Link from "next/link";
import { LanguageSite } from "@conversiondigital/headless-basics-data/src/interfaces";

/**
 * Sanity Site Footer
 */
export function GetSanitySiteFooter({
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
  if (!data) {
    return (
      <footer className="bg-gray-800 p-6" role="contentinfo" {...props} ref={ref}>
        <div className="container mx-auto">
          <p className="text-center text-white">Default Sanity Footer</p>
          <div className="mt-4 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Norg AI. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }
  
  let footerData = data;
  
  if (Array.isArray(data) && data.length > 0) {
    footerData = data[0];
  }
  
  const { title, leftLogo, rightLogo, logoOne, copyrightNotice, linkSections } = footerData;
  
  return (
    <>
      <footer className="bg-gray-100 p-6" role="contentinfo" {...props} ref={ref}>
        <div className="container mx-auto">
          {/* Title */}
          {title && (
            <h2 className="mb-6 text-center text-2xl font-bold">{title}</h2>
          )}
          
          {/* Logos section */}
          <div className="footer-logos mb-8 flex flex-col items-center justify-between gap-8 py-6 md:flex-row">
            {leftLogo?.media?.asset?.url && (
              <Image
                className="h-auto w-32 object-contain md:w-40"
                src={leftLogo.media.asset.url}
                alt="Left Logo"
                width={160}
                height={80}
                loading="lazy"
              />
            )}
            {rightLogo?.media?.asset?.url && (
              <Image
                className="h-auto w-32 object-contain md:ml-auto md:w-40"
                src={rightLogo.media.asset.url}
                alt="Right Logo"
                width={160}
                height={80}
                loading="lazy"
              />
            )}
            {logoOne?.media?.asset?.url && (
              <Image
                className="h-auto w-32 object-contain md:w-40"
                src={logoOne.media.asset.url}
                alt="Logo One"
                width={160}
                height={80}
                loading="lazy"
              />
            )}
          </div>

          {/* Link sections */}
          {linkSections && linkSections.length > 0 && (
            <div className="footer-links-container mb-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {linkSections.map((section: any, sectionIndex: Key) => (
                <div key={sectionIndex} className="footer-links-section">
                  <h3 className="mb-4 text-lg font-bold text-gray-800">{section.heading}</h3>
                  <ul className="space-y-2">
                    {section.links?.map((link: any, linkIndex: Key) => {
                      const url = link.externalUrl || '#';
                      return (
                        <li key={linkIndex}>
                          {
                            link.internalUrl?.slug?.current ? (
                              <Link 
                                href={`/${link.internalUrl.slug.current}`}
                                className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                              >
                                {link.name || link.internalUrl.slug.current}
                              </Link>
                            ) : (
                              <a 
                                href={url} 
                                target={url.startsWith('http') ? '_blank' : undefined} 
                                rel={url.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                              >
                                {link.name || url}
                              </a>
                            )
                          }
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </footer>

      {/* Copyright section */}
      {copyrightNotice && (
        <div className="bg-gray-800 py-4 text-center text-sm text-white">
          <div className="container mx-auto">{copyrightNotice}</div>
        </div>
      )}
    </>
  );
} 