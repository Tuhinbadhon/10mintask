export interface Medium {
  id: number;
  type: string;
  url: string;
  thumbnail: string;
}

export interface Checklist {
  id: number;
  title: string;
  description: string;
}

export interface Section {
  id: number;
  title: string;
  description: string;
  type: string;
}

export interface CtaText {
  enroll_button_text: string;
}

export interface Seo {
  title: string;
  meta_description: string;
}

export interface Data {
  slug: string;
  id: number;
  title: string;
  description: string;
  media: Medium[];
  checklist: Checklist[];
  seo: Seo;
  cta_text: CtaText;
  sections: Section[];
}
