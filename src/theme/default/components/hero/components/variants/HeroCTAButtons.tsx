import { alignmentClasses, cn, filterAndUpdateClass, formatHeading, IndividualComponentProps, PageBlueprint } from "@conversiondigital/headless-basics-data/src";
import Link from "next/link";
import React, { Suspense } from "react";
import Hero from "../Hero";
import DevButton from "../../../../../../components/developer/devButton";
import Breadcrumbs from "../../../../../../components/breadcrumbs/Breadcrumbs";
import BackToTopAndChatLoader from "../../../../structures/backToTopAndChatLoader";

interface HeroCTAButtonsProps {
  blueprint: PageBlueprint
  componentDetails: IndividualComponentProps
  matchingData: any
}

const HeroCTAButtons: React.FC<HeroCTAButtonsProps> = ({ blueprint, componentDetails, matchingData }) => {
  const { textAlignClass, justifyClass } = alignmentClasses(componentDetails.data as { align: string })

  const languageSite = componentDetails.pageDefinition?.languageSite;

  if (!languageSite) {
    return (<></>);
  }

  return (
    <div className="relative z-10 w-full">
      <Suspense>
        {componentDetails.metaData && <DevButton metaData={componentDetails.metaData} />}
      </Suspense>
      <Hero className="relative overflow-hidden bg-[#D1D3D433] font-urbanist sm:min-h-96">
        <Breadcrumbs
          className="container! row-start-1 my-8 w-full self-baseline "
          data={blueprint.breadcrumbItems}
          seperatorIcon={<span>/</span>}
          itemClassName="font-urbanist text-xs font-500 uppercase tracking-0.1em text-my-blue"
          slug={componentDetails.pageDefinition?.preliminarySlug || ''}
        />
        <Hero.Content
          className={cn("container! row-start-2 mb-12 self-start md:mb-20")}
        >
          <div
            className={cn("flex w-full flex-col", {
              // "sm:justify-center sm:items-center" : matchingData?.centerAlign
            })}
          >
            <h1
              className={`text-h3 font-800 leading-h3 text-my-blue md:text-h2 md:leading-h2 ${textAlignClass}`}
              dangerouslySetInnerHTML={{
                __html: formatHeading(matchingData.heading) || '',
              }}
            />
            <div
              className={`sm: mt-6 flex flex-col gap-4 sm:flex-row sm:items-center${justifyClass}`}
            >
              {matchingData?.buttons?.map(({ name, url }: { name: string, url: string }, index: number) => {
                if (!url) return null
                return (
                  <Link
                    key={index}
                    href={url}
                    className={cn(
                      "box-border flex w-full min-w-[235px] items-center justify-center rounded-full border border-solid px-4 py-2 text-body1 font-800 uppercase leading-body1 tracking-0.1em sm:max-w-max sm:px-6",
                      {
                        "bg-my-blue border-my-blue text-my-white hover:bg-my-yellow hover:border-my-yellow hover:text-my-blue":
                          index % 2 === 0,
                        "bg-transparent  border-my-blue text-my-blue hover:bg-my-blue hover:text-my-white":
                          index % 2 !== 0,
                      }
                    )}
                  >
                    {name}
                  </Link>
                )
              })}
            </div>
            {/* // if description / "on this page data" is rich text then render it as html  */}
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

export default HeroCTAButtons
