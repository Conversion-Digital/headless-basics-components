import React from "react"
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps"
import { getCmsImage } from "@conversiondigital/headless-basics-data/src/cms/tools/multiCmsImageTools"

export default function DefaultVariant(props: StandardComponentProps) {
  const { blueprint, componentInformation, matchingData } = props;
  const primaryLogo = matchingData?.logo?.asset?.url || null;
  const secondaryLogo = matchingData?.secondaryLogo?.asset?.url || null;
  const backgroundImage = matchingData?.backgroundImage?.asset?.url || null;
  const linkGroups = matchingData?.linkGroups || matchingData?.globalComponentSource?.linkGroups || [];
  const socialLinks = matchingData?.socialLinks || [];
  const title = matchingData?.title || matchingData?.globalComponentSource?.title;
  const subtitle = matchingData?.subtitle || matchingData?.globalComponentSource?.subtitle;
  const copyrightMessage = matchingData?.copyrightMessage || matchingData?.globalComponentSource?.copyrightMessage || "© 2024 All rights reserved";
  const additionalInfo = matchingData?.additionalInformation || matchingData?.globalComponentSource?.additionalInformation;

  return (
    <footer className="min-h-fit px-8 py-12 bg-[#0D0E47] text-white relative">
      {backgroundImage && (
        <div className="absolute inset-0 z-0 flex justify-center items-center">
          <img src={backgroundImage} alt="Footer Background" className="w-[954.80px] h-[589px] object-contain" />
        </div>
      )}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 relative z-10">
        <div className="flex flex-col gap-6 max-w-md">
          {primaryLogo && (
            <div>
              <img src={primaryLogo} alt="Primary Logo" className="object-contain" />
            </div>
          )}
          {subtitle && (
            <div className="footer-heading-wrap">
              <p className="text-[30px] md:text-[48px] font-semibold text-white hidden md:block">{subtitle}</p>
            </div>
          )}
          {secondaryLogo && (
            <div className="flex items-center gap-4">
              <img src={secondaryLogo} alt="Secondary Logo" className="w-72 h-44" />
            </div>
          )}
          {!primaryLogo && !secondaryLogo && (
            <div>
              <p>Logos not found</p>
            </div>
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {Array.isArray(linkGroups) && linkGroups.map((group: any, groupIdx: number) => (
            <div key={groupIdx} className="flex flex-col gap-4">
              <h4 className="uppercase text-white/60">{group.groupTitle}</h4>
              <ul className="flex flex-col gap-2 font-bold">
                {Array.isArray(group.links) && group.links.map((linkItem: any, idx: number) => (
                  <li key={idx}>
                    <a href={linkItem.url ?? "#"}>
                      {linkItem.label ?? "Link"}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {additionalInfo && (
          <div className="flex flex-col gap-6">
            {additionalInfo.phoneNumber && (
              <div>
                <h4 className="uppercase mb-2 text-white/60">Phone</h4>
                <p className="font-bold">{additionalInfo.phoneNumber}</p>
              </div>
            )}
            {additionalInfo.email && (
              <div>
                <h4 className="uppercase mb-2 text-white/60">Email</h4>
                <p className="font-bold">{additionalInfo.email}</p>
              </div>
            )}
            {additionalInfo.address && (
              <div>
                <h4 className="uppercase mb-2 text-white/60">Address</h4>
                <p className="font-bold">{additionalInfo.address}</p>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="mt-12 max-w-7xl mx-auto pt-6 flex flex-col md:flex-row justify-between items-center">
        <p>{copyrightMessage}</p>
        {socialLinks.length > 0 && (
          <div className="flex gap-4 mt-4 md:mt-0">
            {socialLinks.map((social: any, idx: number) => (
              <a key={idx} href={social.url} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white">
                {social.logo?.asset?.url ? (
                  <img src={social.logo.asset.url} alt={social.platform} className="w-6 h-6" />
                ) : (
                  <span className="capitalize">{social.platform}</span>
                )}
              </a>
            ))}
          </div>
        )}
      </div>
    </footer>
  )
}
