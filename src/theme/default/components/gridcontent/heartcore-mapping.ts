import {
  PageAndSingleComponentDetails,
  extractUmbracoGuid,
  getLogger,
  getMatchingResultBySortOrder,
  getPageTypeBySlug,
  loadSingleComponentGraphQLData,
  logPrefix,
  stripSiteLanguagePrefixAsync,
} from "@conversiondigital/cd-headless-data/src"

const log = getLogger("theme.components.gridcontent.mapping");

export async function mapIdentifierData(IndividualComponentProps: PageAndSingleComponentDetails) {
  const content = IndividualComponentProps?.component?.data?.content as any;
  log.trace("variables heartcore mapIdentifierData > ", JSON.stringify(IndividualComponentProps?.component?.data))
  log.trace("mapIdentifierData data.content.children.edges > ", content?.children?.edges);

  let matchingData = getMatchingResultBySortOrder(content?.children?.edges, "GridContent", IndividualComponentProps?.component?.sortOrder)

  if (!matchingData) {
    matchingData = {}
  }

  const body = matchingData.body;

  await mapGridSubComponents(body, matchingData, IndividualComponentProps);

  if(!matchingData?.childComponents || matchingData?.childComponents?.length === 0){
    log.trace("No embedded child components found for grid component", content?.url);
  }

  matchingData.componentDocumentation = getComponentDocumentation();
  matchingData.youtubeVideo = getYoutubeDocumentation();

  return matchingData;
}

function getComponentDocumentation() {
  return "/library/2-structured-grid-content";
}

function getYoutubeDocumentation() {
  return "https://youtu.be/uTM9VEn2_Hc";
}

// Function to retrieve a component given its ID and other required information
async function getComponent(udi: string, individualComponentProps: PageAndSingleComponentDetails) {
  individualComponentProps.component.udi = udi;
  const pageDefinition = individualComponentProps.component.pageDefinition;

  if (pageDefinition) {
    pageDefinition.source += " > grid ";
  } else {
    log.warn('pageDefinition is undefined');
    return null;
  }
  log.trace(`${logPrefix()}[getComponent][${individualComponentProps.page.preliminarySlug}] calling getPageTypeBySlug with udi: ${udi}`);
  const model = await getPageTypeBySlug(pageDefinition, true, udi);
  log.trace(`${logPrefix()}[getComponent][${individualComponentProps.page.preliminarySlug}]`, model);
  const contentTypeAlias = model.contentTypeAlias;
  model.__typename = contentTypeAlias;
  let url = model.url;
  if(!(url.indexOf("/global-components") > -1)) {
    url = await stripSiteLanguagePrefixAsync(model.url);
  }
  if (!individualComponentProps?.component.pageDefinition) {
    log.warn('PageDefinition is undefined');
    return null;
  }
  const component = await loadSingleComponentGraphQLData(model, individualComponentProps.component.pageDefinition, url);

  if(component){
    component.id = udi;
    if (component.metaData) {
      component.metaData.id = udi;
      component.metaData.isInsideGrid = true;
      component.metaData.languageSite = individualComponentProps.page.languageSite;
    }
    return component;
  }
  return null;
}

// Function to process the matches and return the components
async function processMatches(matches: any[], IndividualComponentProps: PageAndSingleComponentDetails) {
  const components = await Promise.all(matches.map(async (match) => {
    const udi = extractUmbracoGuid(match);
    if (udi) {
      return getComponent(udi, IndividualComponentProps);
    }
    return null;
  }));

  return components.filter(component => component !== null);
}

// Main function to map the grid subcomponents
async function mapGridSubComponents(body: any, matchingData: any, IndividualComponentProps: PageAndSingleComponentDetails) {
  matchingData.childComponents = [];

  if (!body) {
    log.warn('Body is undefined');
    return;
  }

  const bodyString = JSON.stringify(body);

  if (!bodyString) {
    log.warn('BodyString is undefined');
    return;
  }

  const matches = bodyString.match(/umb:\/\/document\/([a-fA-F0-9]{32})/g);

  if (matches) {
    matchingData.childComponents = await processMatches(matches, IndividualComponentProps);
  }
}
