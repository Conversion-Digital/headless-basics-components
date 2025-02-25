import { filterAndUpdateClassServer, getLogger, getMatchingResultBySortOrder, LanguageSite, logPrefix, PageAndSingleComponentDetails } from "@conversiondigital/headless-basics-data/src";

const log = getLogger("theme.components.richtext.mapping");

export async function mapIdentifierData(individualComponentProps: PageAndSingleComponentDetails) {
  const content = individualComponentProps?.component?.data?.content as any;
  log.trace("variables heartcore mapIdentifierData > ", JSON.stringify(individualComponentProps?.component?.data))

  let matchingData:any = getMetaData();

  // This is a special case to handle for Accordion and Grid Sub-Components
  if(content?.contentTypeAlias == 'richtext'){

    log.trace(`${logPrefix()}[richtext][mapRichTextData][A][${individualComponentProps?.page?.source}] data.content > `, individualComponentProps?.component?.data?.content);
    matchingData = individualComponentProps?.component?.data?.content;
    individualComponentProps.page.source += " > mapRichTextData[A]";
    if(typeof matchingData === 'undefined'){
      log.warn(`${logPrefix()}[richtext][mapRichTextData][B][${individualComponentProps?.page?.source}] richtext matchingData is undefined`);
    }else{
      if (individualComponentProps.page?.languageSite) {
        if (individualComponentProps.page.languageSite) {
          matchingData.processedBody = await processRichBody(matchingData?.body, individualComponentProps.page.languageSite);
        } else {
          log.warn(`${logPrefix()}[richtext][mapRichTextData][B][${individualComponentProps?.page?.source}] languageSite is undefined`);
        }
      } else {
        log.warn(`${logPrefix()}[richtext][mapRichTextData][B][${individualComponentProps?.page?.source}] languageSite is undefined`);
      }
      matchingData.lastUpdated = content?.updateDate ? content?.updateDate : '';
    }
  // This is the main case of handling rich text as page Sub-Components
  }else {
    log.trace(`${logPrefix()}[richtext][mapRichTextData][C][${individualComponentProps?.page?.source}] data.content.children.edges > `, content?.children?.edges);
    matchingData = getMatchingResultBySortOrder(content?.children?.edges, "Richtext", individualComponentProps?.component?.sortOrder);
    individualComponentProps.page.source += " > mapRichTextData[B]";
    if(typeof matchingData === 'undefined'){
      log.warn(`${logPrefix()}[richtext][mapRichTextData][D][${individualComponentProps?.page?.source}] richtext matchingData is undefined`);
    }else{
      if (individualComponentProps.page?.languageSite) {
        matchingData.processedBody = await processRichBody(matchingData?.body, individualComponentProps.page.languageSite);
      } else {
        log.warn(`${logPrefix()}[richtext][mapRichTextData][B][${individualComponentProps?.page?.source}] languageSite is undefined`);
      }
      matchingData = {...matchingData, ...getMetaData(matchingData?.updateDate)};
    }
  }

  if (!matchingData) {
    matchingData = getMetaData();
  }

  return matchingData;
}

function getMetaData(lastUpdate?: string) {
  return {
    componentDocumentation: getComponentDocumentation(),
    youtubeVideo: getYoutubeDocumentation(),
    lastUpdated: lastUpdate
  }
}

function getComponentDocumentation() {
  return "/library/1-rich-text-simple";
}

function getYoutubeDocumentation() {
  return "https://www.youtube.com/watch?v=y7Y5pbfUj5o";
}

async function processRichBody(body: any, languageSite: LanguageSite):Promise<string> {
  return await filterAndUpdateClassServer(body, languageSite);
}
