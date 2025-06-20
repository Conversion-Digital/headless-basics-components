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
        <DevButton metaData={componentInformation?.metaData as ComponentMetaData} />
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
          data={blueprint?.breadcrumbItems}
          seperatorIcon={<span>/</span>}
          itemClassName="font-urbanist text-xs font-500 uppercase tracking-0.1em text-my-white"
          slug={componentInformation?.pageDefinition?.preliminarySlug || ''}
        />
        <Hero.Content className={`container! row-start-2 self-start`}>
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
