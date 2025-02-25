import { IndividualComponentProps, LanguageSite } from "@conversiondigital/cd-headless-data/src"
import { Suspense } from "react"
import DevButton from "../../../../../../components/developer/devButton"
import { getSectionBackgroundColour } from "../../../../../utils/getSectionBackgroundColour"
import LinksList from "../../../common/links/LinksList"

interface DownloadLinksProps {
  componentDetails: IndividualComponentProps
  matchingData: any
  classWrapper: string
  languageSite: LanguageSite
}

export default function DownloadLinks({ componentDetails, matchingData, classWrapper, languageSite }: DownloadLinksProps) {
  return (
    <div className={`${classWrapper} ${getSectionBackgroundColour(matchingData?.backgroundColour, "")}`}>
      {componentDetails.metaData && (
        <Suspense><DevButton metaData={componentDetails.metaData} /></Suspense>
      )}
      {matchingData?.linksListings?.map((item: { content: { mediaLinks: any[]; icon: { url: any }; heading: any } }, index: any) => {
        const links = item?.content?.mediaLinks?.map((link) => ({
          ...link?.media,
          icon: item?.content?.icon?.url,
        }))

        return (
          <LinksList
            key={index}
            heading={item.content.heading}
            headingClassName="mb-10 text-h4 font-bold capitalize leading-h4 text-my-blue"
            className={`p-8 ${getSectionBackgroundColour(matchingData?.backgroundColour, "bg-charcoal20")} mb-24 w-full md:mb-20 md:w-72`}
          >
            <LinksList.DownloadLinks
              links={links}
              className="items-start p-0 font-urbanist"
              linkClassName="text-button leading-button flex items-start font-500 text-my-blue underline [&>img]:m-0.5"
              useNextLink={false}
              languageSite={languageSite}
            />
          </LinksList>
        )
      })}
    </div>
  )
}
