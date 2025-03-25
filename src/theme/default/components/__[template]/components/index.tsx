import {
  IndividualComponentProps,
  ViewComponentProps,
  componentBoilerPlate,
  getLogger,
  logPrefix,
} from "@conversiondigital/headless-basics-data/src"
import {
  DefaultHero,
  FadedInformationHero,
  HeroCTAButtons,
  ImageHighlightHero,
  RightImageHero,
  SlimBackgroundHero,
  TitleOnlyHero,
} from "./variants";

const log = getLogger("theme.components.hero.components.index")

export default function HeroUI(dynamicComponent: ViewComponentProps) {

  const {variant, blueprint, componentInformation, matchingData} = componentBoilerPlate(dynamicComponent)

  populateMetaData(componentInformation)

  log.trace("Rendering Hero with variant: ", variant)

  if(!blueprint)  {
    return <DefaultHero />
  }

  switch (variant) {
    case "Hero - Image Highlight":
      return <ImageHighlightHero blueprint={blueprint} componentInformation={componentInformation} matchingData={matchingData} />
    default:
      return <DefaultHero />
  }
}

function populateMetaData(componentDetails: IndividualComponentProps) {

  if(typeof(componentDetails) === "undefined") {
    log.trace(`${logPrefix()} No componentMetaData found`, (typeof(componentDetails)))
    return;
  }

  if (componentDetails?.metaData) {
      // Get the relative path of the current file
      componentDetails.metaData.rendering = "theme/components/hero/components/index.tsx"
      // Get the name of the current function
      componentDetails.metaData.renderingExportFunction = "HeroUI"
  }
}
