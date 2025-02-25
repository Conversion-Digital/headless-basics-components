import { LanguageSite, PageAndSingleComponentDetails, processURLForNavigationServer, QueryResult } from "@conversiondigital/headless-basics-data/src"
import { Content } from "../../../interfaces/advancedSpecificationTable.interface";

export interface BreadcrumbLink {
  href: string | QueryResult;
  text: string;
  prefetch?: boolean;
}

export async function mapIdentifierData(IndividualComponentProps: PageAndSingleComponentDetails): Promise<{ heading: string, links: BreadcrumbLink[] }> {
  if (!IndividualComponentProps?.page?.languageSite) {
    throw new Error("languageSite is undefined");
  }
  return await mapBreadcrumbStructure(IndividualComponentProps?.component?.data?.content, IndividualComponentProps.page.languageSite);
}

async function mapBreadcrumbStructure(data: unknown, languageSite:LanguageSite) {

  let nodes: any[] = [];

  addNode(data as Content);

  const breadcrumb = {
    heading: "Breadcrumb : Default",
    links: [] as BreadcrumbLink[]
  };

  function addNode(content: Content) {
    nodes.push(cleanupName(content));
    if (content?.parent) {
      addNode(content.parent);
    }
  }
  for(var i=nodes.length-1; i>-1; i--){
    let current = nodes[i];
    let cmsUrl = current?.url;
    if (!cmsUrl) {
      continue;
    }
    const friendlyUrl = await processURLForNavigationServer(cmsUrl, languageSite);
    breadcrumb?.links?.push({
      href: friendlyUrl,
      text: current.name,
      prefetch: current.prefetch
    });
  }

  return breadcrumb;
}

export function cleanupName(data: Content) {

  if(data?.name){
    data.name = data.name.replace('/', '');
  }else if(data?.navigationTitle){
    data.name = data.navigationTitle;
  }else if(data?.labal){
    data.name = data.labal;
  }

  return data;
}
