import { Suspense } from "react"
import { IndividualComponentProps, LanguageSite } from "@conversiondigital/cd-headless-data/src"
import dynamic from "next/dynamic"
import DevButton from "../../../../../../components/developer/devButton";
import LinksList from "../../../common/links/LinksList";
import { getSectionBackgroundColour } from "../../../../../utils/getSectionBackgroundColour";


const SimpleAnchorListsClientLoader = dynamic(() => import('../../../common/links/simpleAnchorListsClientLoader'));

interface SimpleAnchorListsProps {
  componentDetails: IndividualComponentProps
  matchingData: any
  classWrapper: string
  languageSite: LanguageSite
}

export default function SimpleAnchorLists({ componentDetails, matchingData, classWrapper, languageSite }: SimpleAnchorListsProps) {
  return (
    <div
      className={`${classWrapper} grid grid-cols-1 gap-8 md:grid-cols-2 ${getSectionBackgroundColour(matchingData?.backgroundColour, "")}`}>
      {componentDetails.metaData && (
        <Suspense><DevButton metaData={componentDetails.metaData} /></Suspense>
      )}
      {matchingData?.linksListings?.map((item: { content: { heading: any; links: any } }, index: any) => (
        <LinksList
          key={index}
          heading={item.content.heading}
          className=" py-4 capitalize text-my-blue"
          headingClassName="mb-2 text-body1 font-800 capitalize leading-body1 text-my-blue"
        >
          <SimpleAnchorListsClientLoader
            links={item.content.links}
            className="grid max-w-max grid-cols-1 gap-x-8 font-urbanist md:grid-cols-2"
            linkClassName=""
            useNextLink
            languageSite={languageSite}
          />
        </LinksList>
      ))}
    </div>
  )
}
