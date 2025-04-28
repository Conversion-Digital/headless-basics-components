import React from "react"
import { StandardComponentProps } from "@conversiondigital/headless-basics-components/src/interfaces/standardComponentProps"
import { getCmsImage } from "@conversiondigital/headless-basics-data/src/cms/tools/multiCmsImageTools"

export default function DefaultVariant(props: StandardComponentProps) {
  const { blueprint, componentInformation, matchingData } = props;
  const primaryLogo = matchingData?.logo?.asset?.url || null;
  const secondaryLogo = matchingData?.secondaryLogo?.asset?.url || null;
  const backgroundImage = matchingData?.backgroundImage?.asset?.url || null;
  const linkGroups = matchingData?.linkGroups || matchingData?.globalComponentSource?.linkGroups || [];


  return (
    <footer 
      className="site-footer position-relative pt-60px pb-34px pt-md-140px pb-md-90px bg-[#0D0E47] text-[#333333] p-8 relative h-[500px]"
      style={backgroundImage ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: '954.80px 500px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      } : {}}
    >
      <div className="container mx-auto flex justify-between">
        <div className="flex flex-col gap-[34px]">
          {primaryLogo && (
            <div>
              <img src={primaryLogo} alt="Primary Logo" className="w-[199px] h-[79px] object-contain" />
            </div>
          )}
          {matchingData?.subtitle && (
            <p className="text-[48px] font-semibold text-white">{matchingData.subtitle}</p>
          )}
          {secondaryLogo && (
            <div>
              <img src={secondaryLogo} alt="Secondary Logo" className="w-[290px] h-[171px] object-contain" />
            </div>
          )}
          {!primaryLogo && !secondaryLogo && (
            <div>
              <p className="text-white">Logos not found</p>
            </div>
          )}
        </div>

        <div className="flex gap-16">
          {Array.isArray(linkGroups) && linkGroups.map((group: any, groupIdx: number) => (
            <div key={groupIdx} className="text-white">
              <h3 className="font-bold mb-4 text-white/60 text-[16px] font-medium uppercase leading-normal tracking-wide">{group.groupTitle}</h3>
              <ul className="space-y-2 font-semibold">
                {Array.isArray(group.links) && group.links.map((linkItem: any, idx: number) => (
                  <li key={idx}>
                    <a
                      href={linkItem.url ?? "#"}
                      className="hover:underline"
                    >
                      {linkItem.label ?? "Link"}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
