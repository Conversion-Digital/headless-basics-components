import { GetLanguageSiteByURL, log, logPrefix, PageAndSingleComponentDetails, processURLForNavigation } from "@conversiondigital/headless-basics-data/src";

export async function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  log.trace(`${logPrefix()} mapIdentifierData for sanity-based sitemap`);
  try {
    // The new query returns an array 'allPage' with objects
    // each having fields: _id, _type, title, description, showInNavigation, level, and slug { current, ... } 
    const allPage = pageAndComponentCombo?.component?.data?.allPage as any[];
    if (!allPage || allPage.length === 0) {
      return [];
    }

    const languageSite = pageAndComponentCombo?.page?.languageSite;
    const mappedPages: any[] = [];

    for (const page of allPage) {
      // We want only pages that have a valid slug
      if (!page?.slug?.current) {
        continue;
      }

      // Prepare the raw URL from the slug
      let originalUrl = "/" + (page.slug.current || "").replace(/^\/+/, "");
      // Attempt to find the correct site
      const siteRef = await GetLanguageSiteByURL(originalUrl);

      // Convert raw URL to a friendly URL
      const friendlyUrl = processURLForNavigation(originalUrl, siteRef);

      // Extract name from 'title'
      let name = (page.title || "").replace("/", "");

      mappedPages.push({
        id: page._id,
        name: name,
        url: friendlyUrl,
        level: page.level ?? 1,
        showInNavigation: !!page.showInNavigation,
      });
    }

    // Filter out any pages with underscores in the name
    const finalSitemap = mappedPages.filter(
      (x) => !(x.name.indexOf("_") > -1)
    );

    return finalSitemap;
  } catch (error) {
    log.error(`${logPrefix()} Error in mapSitemapData Error: ${error}`);
    log.error(`${logPrefix()} Error in mapSitemapData stack: ${(error as any).stack}`);
    return undefined;
  }
}