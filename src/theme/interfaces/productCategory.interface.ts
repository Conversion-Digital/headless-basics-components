import { LanguageSite } from "@conversiondigital/headless-basics-data/src";

export interface ProductMedia {
  name?: string;
  mediaTypeAlias?: string;
  altText?: string;
}

export interface ProductPhoto {
  url: string;
  media?: ProductMedia;
}

export interface ProductNode {
  __typename: string;
  name?: string;
  url?: string;
  productPhoto?: ProductPhoto;
  productName?: string;
  productDescription?: string;
  productFeature?: string;
}

export interface ProductEdge {
  node: ProductNode;
}

export interface ProductChildren {
  edges: ProductEdge[];
}

export interface ProductCategory {
  id: string;
  url: string;
  name: string;
  description: string;
  children: ProductChildren;
}

export interface CategoryData {
  name: string;
  category: any;
  productCategories: ProductCategory[];
}

export interface ProductCategoryProps {
  category: CategoryData;
  languageSite: LanguageSite;
}
