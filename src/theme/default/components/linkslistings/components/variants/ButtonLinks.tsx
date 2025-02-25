import { IndividualComponentProps, LanguageSite } from "@conversiondigital/cd-headless-data/src"
import { Suspense } from "react"
import { getSectionBackgroundColour } from "../../../../../utils/getSectionBackgroundColour"
import DevButton from "../../../../../../components/developer/devButton"
import LinksList from "../../../common/links/LinksList"

interface ButtonLinksProps {
  componentDetails: IndividualComponentProps
  matchingData: any
  classWrapper: string
  languageSite: LanguageSite
}

export default function ButtonLinks({ componentDetails, matchingData, classWrapper, languageSite }: ButtonLinksProps) {
  return (
    <div className={`${classWrapper} ${getSectionBackgroundColour(matchingData?.backgroundColour, "")}`}>
      {componentDetails.metaData && (
        <Suspense><DevButton metaData={componentDetails.metaData} /></Suspense>
      )}
      <LinksList
        className=""
        innerClassName="grid grid-cols-1 gap-4 sm:grid-cols-2"
        headingClassName="font-urbanist text-h4 font-800 leading-h4 text-black"
      >
        {matchingData?.linksListings?.map((column: { content: { links: any } }, index: any) => (
          <LinksList.ButtonLinksList
            key={index}
            links={column.content.links}
            className="p-0 font-urbanist"
            linkClassName="mb-4 bg-my-yellow px-4 py-3 text-center font-urbanist text-base font-800 uppercase tracking-0.1em text-my-blue transition hover:bg-my-blue hover:text-my-white md:mb-6"
            useNextLink
            languageSite={languageSite}
          />
        ))}
      </LinksList>
    </div>
  )
}
