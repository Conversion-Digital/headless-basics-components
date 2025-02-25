//for level 1
export interface ISitemapItem {
  id: string;
  url: string;
  name: string;
  level: number;
  hasChildren: boolean;
  showInSitemap?: boolean;
  children?: SitemapChildren; // Optional, as not all items may have children
}

export type SitemapChildren = INodeNestedSitemapItem[] | IEdgeNestedSitemapItem;

//for level 2
export type INodeNestedSitemapItem = {
  node: ISitemapItem;
}

//for level 3
export type IEdgeNestedSitemapItem = {
  edges: INodeNestedSitemapItem[];
}

