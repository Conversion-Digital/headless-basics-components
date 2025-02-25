import { Suspense } from "react"
import { IndividualComponentProps, LanguageSite } from "@conversiondigital/cd-headless-data/src"
import { getSectionBackgroundColour } from "../../../../../utils/getSectionBackgroundColour"
import LinksList from "../../../common/links/LinksList"
import DevButton from "../../../../../../components/developer/devButton"

interface SmallDownloadListsProps {
  componentDetails: IndividualComponentProps
  matchingData: any
  classWrapper: string
  languageSite: LanguageSite
}

export default function SmallDownloadLists({ componentDetails, matchingData, classWrapper, languageSite }: SmallDownloadListsProps) {
  return (
    <div className={`${classWrapper} ${getSectionBackgroundColour(matchingData?.backgroundColour, "")}`}>
      {componentDetails.metaData && (
        <Suspense><DevButton metaData={componentDetails.metaData} /></Suspense>
      )}
      {matchingData?.linksListings?.map((item: { content: { mediaLinks: { media: any }[]; icon: { url: any }; heading: any } }, index: any) => {
        const links = item.content.mediaLinks?.map((link: { media: any }) => ({
          ...link?.media,
          icon: item?.content?.icon?.url,
        }))

        return (
          <LinksList
            key={index}
            heading={item.content.heading}
            className=" -m-1 inline-block w-full px-2 py-4 pb-10 align-top capitalize text-my-blue md:w-1/4"
            headingClassName="mb-2 text-body1 font-800 capitalize leading-body1 text-my-blue"
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
