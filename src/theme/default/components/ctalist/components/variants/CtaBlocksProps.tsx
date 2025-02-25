import { LanguageSite } from "@conversiondigital/headless-basics-data/src/interfaces";

export interface CtaBlocksProps {
  data: {
    align?: string;
    backgroundColour?: string;
    callToActionItems?: {
      content: {
        id?: string;
        backgroundColour?: string;
        heading: string;
        link: string;
      };
    }[];
  };
  heading: string;
  text: string;
  languageSite: LanguageSite | undefined;
}

export interface CtaButtonsProps {
  data: {
    align?: string;
    backgroundColour?: string;
    callToActionItems?: { content: { id?: string; link: string, heading?: string } }[];
  };
  heading: string;
  text: string;
  languageSite: LanguageSite | undefined;
}
