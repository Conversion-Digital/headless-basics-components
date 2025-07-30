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
    <footer className="relative min-h-fit bg-[#0D0E47] text-white overflow-hidden">
      {backgroundImage && (
        <div className="absolute inset-0 z-0 flex justify-center items-center opacity-20">
          <img src={backgroundImage} alt="Footer Background" className="w-full h-full object-cover" />
        </div>
      )}
      <div className="relative z-10 px-6 py-12 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Logo and Subtitle Section */}
            <div className="lg:col-span-1">
              <div className="flex flex-col gap-6">
                {primaryLogo && (
                  <div className="w-48">
                    <img src={primaryLogo} alt="Primary Logo" className="w-full h-auto object-contain" />
                  </div>
                )}
                {subtitle && (
                  <div className="footer-heading-wrap">
                    <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white">{subtitle}</p>
                  </div>
                )}
                {secondaryLogo && (
                  <div className="w-48">
                    <img src={secondaryLogo} alt="Secondary Logo" className="w-full h-auto object-contain" />
                  </div>
                )}
                {!primaryLogo && !secondaryLogo && !subtitle && (
                  <div>
                    <p className="text-white/60">No content available</p>
                  </div>
                )}
              </div>
            </div>

            {/* Link Groups */}
            {Array.isArray(linkGroups) && linkGroups.length > 0 && (
              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {linkGroups.map((group: any, groupIdx: number) => (
                  <div key={groupIdx} className="flex flex-col gap-4">
                    <h4 className="uppercase text-white/60 text-sm font-semibold">{group.title}</h4>
                    <ul className="flex flex-col gap-2">
                      {Array.isArray(group.links) && group.links.map((linkItem: any, idx: number) => (
                        <li key={idx}>
                          <a 
                            href={linkItem.url ?? "#"} 
                            className="text-white hover:text-white/80 transition-colors duration-200"
                          >
                            {linkItem.label ?? "Link"}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Contact Information */}
            {additionalInfo && (
              <div className="lg:col-span-1">
                <div className="flex flex-col gap-6">
                  {additionalInfo.phoneNumber && (
                    <div>
                      <h4 className="uppercase mb-2 text-white/60 text-sm font-semibold">Phone</h4>
                      <p className="text-white">{additionalInfo.phoneNumber}</p>
                    </div>
                  )}
                  {additionalInfo.email && (
                    <div>
                      <h4 className="uppercase mb-2 text-white/60 text-sm font-semibold">Email</h4>
                      <p className="text-white break-all">{additionalInfo.email}</p>
                    </div>
                  )}
                  {additionalInfo.address && (
                    <div>
                      <h4 className="uppercase mb-2 text-white/60 text-sm font-semibold">Address</h4>
                      <p className="text-white">{additionalInfo.address}</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/80 text-sm text-center md:text-left">{copyrightMessage}</p>
              {socialLinks.length > 0 && (
                <div className="flex gap-4">
                  {socialLinks.map((social: any, idx: number) => (
                    <a 
                      key={idx} 
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
                    >
                      {social.logo?.asset?.url ? (
                        <img src={social.logo.asset.url} alt={social.platform} className="w-5 h-5 filter invert" />
                      ) : (
                        <span className="text-white text-sm">{social.platform}</span>
                      )}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
