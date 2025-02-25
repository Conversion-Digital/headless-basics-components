import { cn, filterAndUpdateClass, formatHeading, IndividualComponentProps, PageBlueprint } from "@conversiondigital/headless-basics-data/src"
import Image from "next/image"
import React, { Suspense } from "react"
import Hero from "../Hero"
import SimpleLinkList from "./SimpleLinkList"
import DevButton from "../../../../../../components/developer/devButton"
import Breadcrumbs from "../../../../../../components/breadcrumbs/Breadcrumbs"
import BackToTopAndChatLoader from "../../../../structures/backToTopAndChatLoader"

interface RightImageHeroProps {
  blueprint: PageBlueprint
  componentDetails: IndividualComponentProps
  matchingData: any
}

const RightImageHero: React.FC<RightImageHeroProps> = ({ blueprint, componentDetails, matchingData }) => {
  const linksListData = { links: [] }
  linksListData.links = matchingData?.pageSectionListing?.map(
    ({ content: { pageSectionTitle, pageSectionURL } }: { content: { pageSectionTitle: string, pageSectionURL: string } }) => {
      return {
        name: pageSectionTitle,
        url: pageSectionURL,
      }
    }
  )

  return (
    <div className="relative z-10 w-full">
      <Suspense>
        {componentDetails.metaData && <DevButton metaData={componentDetails.metaData} />}
      </Suspense>
      <Hero className="relative overflow-hidden bg-charcoal20 font-urbanist sm:min-h-96">
        <Breadcrumbs
          className="container! row-start-1 my-8 w-full self-baseline"
          data={blueprint.breadcrumbItems}
          seperatorIcon={<span className="mx-1.5">/</span>}
          itemClassName="font-urbanist text-xs font-500 uppercase tracking-0.1em text-my-blue before:hidden! last:invisible [&>a]:visible"
          slug={componentDetails.pageDefinition?.preliminarySlug || ""}
        />
        <Hero.Content className="container! relative row-start-2 mb-4 self-start sm:my-14 md:mb-14">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="flex flex-col">
              <h1
                className="text-h3 font-800 leading-h3 text-my-blue md:text-h2 md:leading-h2"
                dangerouslySetInnerHTML={{
                  __html: formatHeading(matchingData.heading) || "",
                }}
              />

              {/* // if description is rich text then render it as html  */}
              <div
                className={cn(
                  "mt-4 grid grid-cols-1 justify-items-start sm:mt-6 *:mt-0",
                  {
                    hidden: !matchingData?.description,
                  }
                )}
                dangerouslySetInnerHTML={{
                  __html: filterAndUpdateClass(
                    matchingData?.description,
                    matchingData.languageSite
                  ),
                }}
              />
              <div
                className={cn("mt-6 hidden sm:mt-8 sm:block", {
                  "hidden!":
                    !linksListData?.links || linksListData?.links?.length < 0,
                })}
              >
                <SimpleLinkList
                  data={linksListData}
                  variant="SimpleLinkList"
                  languageSite={matchingData.languageSite}
                />
              </div>
            </div>
            <div className="mb-6 flex items-start justify-center">
              <Image
                src={matchingData?.image?.url}
                alt={
                  matchingData?.image?.media?.altText !== ""
                  ? matchingData?.image?.media?.altText
                  : matchingData?.image?.media?.name !== ""
                  ? matchingData?.image?.media?.name
                  : matchingData?.name
                }
                width={700}
                height={500}
                className="h-96 min-h-100 object-contain"
              />
            </div>
            <div
              className={cn("block sm:hidden", {
                "hidden!":
                  !linksListData?.links || linksListData?.links?.length < 0,
              })}
            >
              <SimpleLinkList
                data={linksListData}
                variant="SimpleLinkList"
                languageSite={matchingData.languageSite}
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

export default RightImageHero
