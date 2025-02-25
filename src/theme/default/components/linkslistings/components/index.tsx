import { getLogger } from "@conversiondigital/cd-headless-data/src"
import { IndividualComponentProps, ViewComponentProps } from "@conversiondigital/cd-headless-data/src"
import {
  ButtonLinks,
  DownloadLinks,
  SimpleAnchorLists,
  SmallDownloadLists,
} from "./variants"

const log = getLogger("theme.components.linkslistings.components.index")

export default function LinksListingsUI(dynamicComponent: ViewComponentProps) {
  const componentDetails = dynamicComponent.componentInformation

  if (!componentDetails || !componentDetails.metaData) {
    log.error("Invalid data passed to LinksListingsUI", componentDetails)
    return <div>Error rendering LinksListingsUI: Missing data</div>
  }
  const data = componentDetails
  let newData = Object.assign({}, data)

  let languageSite = componentDetails?.pageDefinition?.languageSite;
  if (!languageSite) {
    return (<></>);
  }

  populateMetaData(newData)

  let matchingData = newData.data

  if (!matchingData) {
    matchingData = {}
  }

  const classWrapper = getWrapperClasses(matchingData.isInsideGrid as boolean)
  let variant = matchingData.variant
    ? matchingData.variant
    : matchingData.selectableVariant

  switch (variant) {
    case "Links Listing - Button Links":
      return (
        <ButtonLinks
          componentDetails={newData}
          matchingData={matchingData}
          classWrapper={classWrapper}
          languageSite={languageSite}
        />
      )
    case "Links Listing - Download Links":
      return (
        <DownloadLinks
          componentDetails={newData}
          matchingData={matchingData}
          classWrapper={classWrapper}
          languageSite={languageSite}
        />
      )
    case "Links Listing - Simple Anchor Lists":
      return (
        <SimpleAnchorLists
          componentDetails={newData}
          matchingData={matchingData}
          classWrapper={classWrapper}
          languageSite={languageSite}
        />
      )
    case "Links Listing - Small Download Lists":
      return (
        <SmallDownloadLists
          componentDetails={newData}
          matchingData={matchingData}
          classWrapper={classWrapper}
          languageSite={languageSite}
        />
      )
    default:
      return <></>
  }
}

function getWrapperClasses(isGridWrapper: boolean) {
  let wrapper = "relative w-full container"

  if (isGridWrapper) {
    wrapper = "relative w-full sm:pl-6"
  }
  return wrapper
}

function populateMetaData(componentDetails: IndividualComponentProps) {
  // Get the relative path of the current file
  if (componentDetails.metaData) {
    componentDetails.metaData.rendering = "theme/components/linkslistings/components/index.tsx"
    // Get the name of the current function
    componentDetails.metaData.renderingExportFunction = "LinksListingsUI"
  }
}
