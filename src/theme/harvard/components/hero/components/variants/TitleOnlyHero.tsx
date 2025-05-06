import { alignmentClasses, cn, filterAndUpdateClass, formatHeading, IndividualComponentProps, PageBlueprint } from "@conversiondigital/headless-basics-data/src"
import React, { Suspense } from "react"
import Hero from "../Hero"
import DevButton from "../../../../../../components/developer/devButton"
import Breadcrumbs from "../../../../../../components/breadcrumbs/Breadcrumbs"
import BackToTopAndChatLoader from "../../../../structures/backToTopAndChatLoader"
import { StandardComponentProps } from "../../../../../../interfaces/standardComponentProps"

const TitleOnlyHero: React.FC<StandardComponentProps> = ({ blueprint, componentInformation, matchingData }) => {
  const { textAlignClass, justifyClass, alignItemsClass } = alignmentClasses(matchingData)

  const languageSite = componentInformation.pageDefinition?.languageSite;

  if (!languageSite) {
    return (<></>);
  }

  return (
    <div className="relative z-10 w-full">
      <Suspense>
        {componentInformation.metaData && <DevButton metaData={componentInformation.metaData} />}
      </Suspense>
      <Hero className="relative overflow-hidden bg-[#D1D3D433] font-urbanist sm:min-h-81">
        {componentInformation.pageDefinition && (
          <Breadcrumbs
            className="container! row-start-1 my-8 w-full self-baseline"
            data={blueprint.breadcrumbItems}
            seperatorIcon={<span>/</span>}
            itemClassName="font-urbanist text-xs font-500 uppercase tracking-0.1em text-my-blue"
            slug={componentInformation.pageDefinition.preliminarySlug || ''}
          />
        )}
        <Hero.Content className="container! row-start-2 self-start">
          <div className={`flex w-full flex-col ${alignItemsClass}`}>
            <h1
              className={`text-h3 font-800 leading-h3 text-my-blue md:text-h2 md:leading-h2 ${textAlignClass}`}
              dangerouslySetInnerHTML={{
                __html: formatHeading(matchingData.heading) || '',
              }}
            />

            {/* // if description is rich text then render it as html  */}
            <div className={`flex w-full ${justifyClass}`}>
              <div
                className={cn(
                  "mt-6 grid w-full grid-cols-1 gap-y-1 sm:mt-8 sm:w-1/2 md:w-4/6 *:my-0",
                  {
                    hidden: !matchingData?.description,
                    [textAlignClass as string]: textAlignClass,
                  }
                )}
                dangerouslySetInnerHTML={{
                  __html: filterAndUpdateClass(
                    matchingData?.description,
                    languageSite
                  ),
                }}
              />
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

export default TitleOnlyHero
