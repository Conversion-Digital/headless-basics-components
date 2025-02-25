
import { FallbackComponent, getLogger, IndividualComponentProps, ViewComponentProps } from "@conversiondigital/cd-headless-data/src"

import { Suspense } from "react"
import AccordionClientLoader from "./accordionClientLoader"
import DevButton from "../../../../../components/developer/devButton"
import { getSectionBackgroundColour } from "../../../../utils/getSectionBackgroundColour"

const log = getLogger("theme.components.accordion.components.index")

export default function AccordionUI(dynamicComponent: ViewComponentProps) {
  const componentDetails = dynamicComponent.componentInformation;
  if (!componentDetails || !componentDetails.metaData) {
    log.error("Invalid data passed to AccordionUI", componentDetails)
    return <div>Error rendering AccordionUI: Missing data</div>
  }
  const data = componentDetails

  populateMetaData(data)
  let matchingData = componentDetails.data as any

  if (!matchingData) {
    matchingData = {}
  }
  const accordionData: { name: string; renderedComponent: JSX.Element }[] = []

  matchingData?.children?.edges?.map(({ node: componentInformation }: { node: { componentInformation: ViewComponentProps } }) => {
    log.trace("AccordionUI : renderQuery ------------------------------------- ", componentInformation?.componentInformation?.componentInformation.id)

    const subComponentOutline = componentInformation?.componentInformation?.componentInformation.subComponentOutline;

    let Component: React.FC<ViewComponentProps> | null = null; // Initialize the component as null
    if (typeof componentInformation?.componentInformation?.componentInformation.view === 'function') {
      // If componentInformation.view is a function, we can directly use it like a React component
      Component = componentInformation?.componentInformation?.componentInformation.view;
    } else {
      // Log an error and provide a fallback if no valid component type is found
      log.trace('No Component Type Found: ', subComponentOutline);
      /* eslint-disable react/display-name */
      Component = () => <FallbackComponent typename={subComponentOutline?.__typename || "Unknown"} />;
      Component.displayName = 'FallbackComponentWrapper';
    }

    const name = subComponentOutline?.name || "Unnamed Component"
    const renderedComponent = (
      <Component
        componentInformation={componentInformation?.componentInformation?.componentInformation}
      />
    )
    accordionData.push({ name, renderedComponent })
  })

  return (
    <>
      <div
        className={`w-full ${getSectionBackgroundColour(
          matchingData?.backgroundColour as string,
          ""
        )} py-6`}
      >
        <div className="relative w-full container">
          <Suspense>
            <DevButton metaData={componentDetails.metaData} />
          </Suspense>
          <div className="my-4">
            <AccordionClientLoader
              accordionData={accordionData}
              globalData={componentDetails}
            />
          </div>
        </div>
      </div>
    </>
  )
}

function populateMetaData(componentDetails: IndividualComponentProps) {
  if (componentDetails.metaData) 
  {
      // Get the relative path of the current file
      componentDetails.metaData.rendering = "theme/components/accordion/components/index.tsx"
      // Get the name of the current function
      componentDetails.metaData.renderingExportFunction = "AccordionUI"
  }
}
