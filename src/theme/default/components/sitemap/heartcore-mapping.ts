import { GetLanguageSiteByURL, log, logPrefix, PageAndSingleComponentDetails, processURLForNavigation } from "@conversiondigital/cd-headless-data/src";

export async function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  try {
    const allContent = pageAndComponentCombo?.component?.data?.allContent as any;
    let nodes = allContent?.edges?.map((x: { node: any; }) => x.node);

    // Filter out the nodes based on matching the language site prefix in the url
    if(typeof(pageAndComponentCombo?.page?.languageSite) !== 'undefined' && pageAndComponentCombo?.page?.languageSite !== null && pageAndComponentCombo?.page?.languageSite.homepageSlugPrefix !== null && pageAndComponentCombo?.page?.languageSite.homepageSlugPrefix !== '')
    {
      nodes = nodes.filter((x: any) => pageAndComponentCombo?.page?.languageSite && x.url.indexOf(pageAndComponentCombo.page.languageSite.homepageSlugPrefix) > -1);
    }else {
      log.debug("mapSitemapData > no language set", nodes?.length);
    }

    nodes.map(async (x: { url: string; superAlias: string; name: string; slug: any; }) => {
      const languageSite = await GetLanguageSiteByURL(x.url);

      let beforeFrieldyUrl = x.url;
      if(x.superAlias && x.superAlias !== ''){
        beforeFrieldyUrl = x.superAlias;
      }

      const friendlyUrl = processURLForNavigation(beforeFrieldyUrl, languageSite);
      x.name = x.name.replace('/', '');
      x.slug = x.url; // The slug is the unprocessed URL with 'us-homepage' at the start
      x.url = friendlyUrl; // The url is process to remove that
    });
    nodes = nodes.filter((x: { name: string | string[]; }) => (!(x.name.indexOf("_") > -1)));
    return nodes;
  } catch (error) {
    log.error(`${logPrefix()} Error in mapSitemapData Error: ${error}`);
    // Print out the stack trace
    log.error(`${logPrefix()} Error in mapSitemapData stack: ${(error as any).stack}`);
    return undefined;
  }
}
