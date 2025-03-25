import { alignmentClasses, ComponentMetaData, formatHeading, IndividualComponentProps, PageBlueprint, getCmsImage } from "@conversiondigital/headless-basics-data/src"
import Image from "next/image"
import React, { Suspense } from "react"
import Hero from "../Hero"
import DevButton from "../../../../../../components/developer/devButton"
import Breadcrumbs from "../../../../../../components/breadcrumbs/Breadcrumbs"
import BackToTopAndChatLoader from "../../../../structures/backToTopAndChatLoader"
import { StandardComponentProps } from "../../../../../../interfaces/standardComponentProps"

const ImageHighlightHero: React.FC<StandardComponentProps> = ({ blueprint, componentInformation, matchingData }) => {
  const { textAlignClass, justifyClass } = alignmentClasses(matchingData)

  const { hasImage, imageLocation, altText } = getCmsImage(matchingData)

  return (
    <div className="relative z-10 w-full">
      <Suspense>
        <DevButton metaData={componentInformation.metaData as ComponentMetaData} />
      </Suspense>
      <Hero className="relative z-10 h-[calc(100vh-75px)] overflow-hidden bg-charcoal bg-blend-multiply md:h-[calc(100vh-175px)]">
        {hasImage && (
          <div className="absolute h-full w-full object-scale-down">
            <Image
              src={imageLocation}
              sizes="(max-width: 600px) 90vw, (min-width: 601px) 100vw"
              loading="eager"
              alt={altText}
              fill={true}
              quality={75}
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority={true}
            />
            <div
              style={{ background: "rgba(0,0,0,0.5)" }}
              className="absolute h-full w-full"
            ></div>
          </div>
        )}
        <Breadcrumbs
          className="container! relative z-10 row-start-1 my-8 w-full self-baseline"
          data={blueprint.breadcrumbItems}
          seperatorIcon={<span>/</span>}
          itemClassName="font-urbanist text-xs font-500 uppercase tracking-0.1em text-my-white"
          slug={componentInformation.pageDefinition?.preliminarySlug || ''}
        />
        <Hero.Content className={`container! row-start-2 self-start`}>
          <div className="absolute inset-y-[-3vh] left-0 z-50 aspect-1/1 -translate-x-1/2 opacity-80 mix-blend-normal md:inset-y-[-5vh] md:translate-x-[-8vw]">
            <svg
              className="h-full w-full"
              viewBox="0 0 1010 1009"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity=".8"
                d="M0 504.5C0 782.537 226.687 1009 505 1009s505-226.463 505-504.5C1010 226.463 783.701 0 505 0S0 226.463 0 504.5Zm140.515 0c0-200.869 163.417-364.124 364.485-364.124S869.485 303.631 869.485 504.5c0 200.869-163.417 364.124-364.485 364.124S140.515 705.369 140.515 504.5Z"
                fill="#FED095"
              />
            </svg>
          </div>
          <div
            className={`relative z-100 flex h-full w-full items-center ${justifyClass}`}
          >
            <h1
              className={`font-urbanist text-h3 font-800 leading-h3 text-white md:text-h1 md:leading-h1 ${textAlignClass}`}
              dangerouslySetInnerHTML={{
                __html: formatHeading(matchingData.heading) || '',
              }}
            />
          </div>
          <Suspense>
            <BackToTopAndChatLoader />
          </Suspense>
        </Hero.Content>
      </Hero>
    </div>
  )
}

export default ImageHighlightHero
