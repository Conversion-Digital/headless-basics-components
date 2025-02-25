import React, { Suspense } from "react"
import dynamic from "next/dynamic"
import { LanguageSite } from "@conversiondigital/headless-basics-data/src"
import LinksList, { LinksListLinkProps } from "../../../common/links/LinksList";

interface SimpleLinkListProps {
  data: { heading?: string; links: LinksListLinkProps[] }
  variant: string
  languageSite: LanguageSite
}

const SimpleAnchorLists = dynamic<{
  links: LinksListLinkProps[]
  className: string
  useNextLink: boolean
  languageSite: LanguageSite
}>(
  () =>
    import("../../../../components/common/links/simpleAnchorListsClientLoader").then(
      (mod) => mod.default
    )
)

const SimpleLinkList: React.FC<SimpleLinkListProps> = ({ data, variant, languageSite }) => {
  if (variant !== "SimpleLinkList") return null

  if (!data) return null

  return (
    <LinksList
      heading={data.heading ?? "On this page:"}
      className="max-w-(--breakpoint-md) py-4 capitalize text-my-blue"
      headingClassName="mb-2 text-body1 font-800 capitalize leading-body1 text-my-blue"
    >
      <Suspense fallback={<div>Links Loading...</div>}>
        <SimpleAnchorLists
          links={data.links ?? []}
          className="grid max-w-max grid-cols-1 gap-x-8 md:grid-cols-2"
          useNextLink
          languageSite={languageSite}
        />
      </Suspense>
    </LinksList>
  )
}

export default SimpleLinkList
