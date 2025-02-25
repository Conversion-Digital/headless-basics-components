import { GetLanguageSiteByURL, getLogger, PageAndSingleComponentDetails, processURLForNavigation } from '@conversiondigital/cd-headless-data/src';

const log = getLogger("theme.components.sitemapclient.mapping");

export function mapIdentifierData(pageAndComponentCombo: PageAndSingleComponentDetails) {
  const allContent = pageAndComponentCombo?.component?.data?.allContent as any;
  let nodes = allContent?.edges?.map((x: { node: any; }) => x.node);

  // Filter out the nodes based on matching the language site prefix in the url
  if(typeof(pageAndComponentCombo?.page?.languageSite) !== 'undefined' && pageAndComponentCombo?.page?.languageSite !== null && pageAndComponentCombo?.page?.languageSite.homepageSlugPrefix !== null && pageAndComponentCombo?.page?.languageSite.homepageSlugPrefix !== '')
  {;
    nodes = nodes.filter((x: { url: string | string[]; }) => pageAndComponentCombo?.page?.languageSite && x.url.indexOf(pageAndComponentCombo.page.languageSite.homepageSlugPrefix) > -1);
  }else {
    log.debug("mapIdentifierData > no language set", nodes.length);
  }

  nodes.map(async (x: { url: string; superAlias: string; name: string; slug: any; hasChildren: boolean; children: { edges: string | any[]; }; parentId: any; parent: { id: any; }; }) => {
    const languageSite = await GetLanguageSiteByURL(x.url);

    let beforeFriendlyUrl = x.url;
    if(x.superAlias && x.superAlias !== ''){
      beforeFriendlyUrl = x.superAlias;
    }

    const friendlyUrl = processURLForNavigation(beforeFriendlyUrl, languageSite);
    x.name = x.name.replace('/', '');
    x.slug = x.url; // The slug is the unprocessed URL with 'us-homepage' at the start
    x.url = friendlyUrl; // The url is process to remove that
    x.hasChildren = x.children.edges.length > 0  ? true : false;
    x.children = Array.isArray(x.children?.edges) ? { edges: x.children.edges } : { edges: [] };
    x.parentId = x.parent?.id;
  });
  nodes = nodes.filter((x: { name: string | string[]; }) => (!(x.name.indexOf("_") > -1)));
  return nodes;
}
