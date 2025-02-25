export interface FagItem {
  heading: string;
  text: string;
}

export interface Faq {
  content: FagItem;
}

export type Faqs = Array<Faq>;
