
import {
  IndividualComponentProps,
  PageBlueprint,
  alignmentClasses,
  cn,
  filterAndUpdateClass,
  formatHeading,
} from "@conversiondigital/cd-headless-data/src"
import React, { Suspense } from "react";
import Hero from "../Hero";
import DevButton from "../../../../../../components/developer/devButton";
import Breadcrumbs from "../../../../../../components/breadcrumbs/Breadcrumbs";
import BackToTopAndChatLoader from "../../../../structures/backToTopAndChatLoader";

interface FadedInformationHeroProps {
  blueprint: PageBlueprint
  componentDetails: IndividualComponentProps
  matchingData: any
}

const FadedInformationHero: React.FC<FadedInformationHeroProps> = ({ blueprint, componentDetails, matchingData }) => {
  const { textAlignClass, justifyClass } = alignmentClasses(matchingData)

  return (
    <div className="relative z-10 w-full">
      <Suspense>
        {componentDetails.metaData && <DevButton metaData={componentDetails.metaData} />}
      </Suspense>
      <Hero
        className="relative overflow-hidden bg-blend-multiply"
        style={{
          backgroundImage: `url('${matchingData?.image?.url}')`,
        }}
      >
        <Hero.Content
          className={`min-h-81 w-full max-w-full bg-linear-to-b from-gray-100 from-60% via-gray-100 via-30% px-0 pb-56 md:bg-linear-to-r md:pb-0`}
        >
          <div className="container my-4 w-full text-left">
            <div
              className="absolute inset-y-[-3vh] left-0 -translate-x-1/2 opacity-80 mix-blend-normal md:inset-y-[-5vh] md:translate-x-[-8vw]"
              style={{ zIndex: 1 }}
            ></div>
            <Breadcrumbs
              className="w-full text-left"
              data={blueprint.breadcrumbItems}
              seperatorIcon={<span>/</span>}
              innerProps={{
                className: "float-left mb-8 sm:mb-12 w-full text-xs",
              }}
              itemClassName="font-urbanist text-xs font-500 uppercase tracking-0.1em text-my-blue"
              slug={componentDetails?.pageDefinition?.preliminarySlug || ''}
            />
            <div className={cn("relative flex h-full w-full", justifyClass)}>
              <div className="w-full md:w-3/4">
                <h1
                  className={`mb-12 font-urbanist text-h3 font-800 leading-h3 text-my-brown-grey md:text-h2 md:leading-h2 ${textAlignClass}`}
                  dangerouslySetInnerHTML={{
                    __html: formatHeading(matchingData.heading) || '',
                  }}
                />
                <div
                  className={`font-urbanist text-base font-400 leading-6 text-my-brown-grey ${textAlignClass}`}
                  dangerouslySetInnerHTML={{
                    __html: filterAndUpdateClass(
                      matchingData?.description,
                      matchingData.languageSite
                    ),
                  }}
                />
              </div>
            </div>
          </div>
          <Suspense>
            <BackToTopAndChatLoader />
          </Suspense>
        </Hero.Content>
      </Hero>
    </div>
  )
}

export default FadedInformationHero
