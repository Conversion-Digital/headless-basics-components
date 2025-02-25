import { LanguageSite } from "@conversiondigital/cd-headless-data/src/interfaces"

export interface ComponentMetaData {
  url: string;
  typeName: string;
  id: string;
  rendering: string;
  variant: string;
  name: string;
  queryFileLocation: string;
  query: string;
  liveDocumentation: string;
  youtubeVideo: string;
  renderingExportFunction: string;
  isInsideGrid: boolean;
  lastUpdated?: string;
  isClientSide: boolean;
  languageSite?: LanguageSite;
}