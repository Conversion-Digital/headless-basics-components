import { alignmentClasses, formatHeading, IndividualComponentProps, PageBlueprint } from "@conversiondigital/headless-basics-data/src"
import Image from "next/image"
import React, { Suspense } from "react"
import Hero from "../Hero"
import DevButton from "../../../../../../components/developer/devButton"
import Breadcrumbs from "../../../../../../components/breadcrumbs/Breadcrumbs"
import BackToTopAndChatLoader from "../../../../structures/backToTopAndChatLoader"
import { StandardComponentProps } from "../../../../../../interfaces/standardComponentProps"


const SlimBackgroundHero: React.FC<StandardComponentProps> = ({ blueprint, componentDetails, matchingData }) => {
  const { textAlignClass, justifyClass } = alignmentClasses(matchingData)

  return (
    <div className="relative w-full">
      <Suspense>
        {componentDetails.metaData && <DevButton metaData={componentDetails.metaData} />}
      </Suspense>
      <Hero className="relative z-10 min-h-81 overflow-hidden bg-charcoal bg-blend-multiply">
        {matchingData?.image?.url && (
          <div className="absolute h-full w-full object-scale-down">
            <Image
              src={matchingData?.image?.url}
              sizes="(max-width: 600px) 90vw, (min-width: 601px) 100vw,(max-height: 325px) 90vw, (min-height: 325px) 100vw"
              loading="eager"
              alt={
                matchingData?.image?.media?.altText != ""
                  ? matchingData?.image?.media?.altText
                  : matchingData?.image?.media?.name != ""
                  ? matchingData?.image?.media?.name
                  : matchingData?.name
              }
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
          className="container! relative z-10 row-start-1 my-8 mb-0 w-full self-baseline"
          data={blueprint.breadcrumbItems}
          seperatorIcon={<span>/</span>}
          itemClassName="font-urbanist text-xs font-500 uppercase tracking-0.1em text-my-white"
          slug={componentDetails?.data?.slug as string}
        />
        <Hero.Content className="container! row-start-2 self-start">
          <div
            className={`relative flex h-full w-full items-center ${justifyClass}`}
          >
            <h1
              className={`font-urbanist text-h3 font-800 leading-h3 text-white md:text-h2 md:leading-h1 ${textAlignClass}`}
              dangerouslySetInnerHTML={{
                __html: formatHeading(matchingData.heading) || "",
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

export default SlimBackgroundHero
