export interface Medium {
  id: number;
  type?: string;
  url?: string;
  thumbnail?: string;
  values?: Instructor[];
  order_idx?: number;
  name: string;
  resource_type?: string;
  resource_value?: string;
  thumbnail_url?: string;
}

export interface Checklist {
  id: number;
  title: string;
  description: string;
  subtitle: string;
  values?: Instructor[];
  order_idx?: number;
  name: string;
  icon?: string;
  slug?: string;
  text?: string;
  image?: string;
  clicked_url?: string;
}

export interface Section {
  id: number;
  title?: string;
  description?: string;
  type: string;
  values?: Instructor[];
  order_idx?: number;
  name: string;
  subtitle: string;
  icon?: string;
  background?: Background;
  top_left_icon_img?: string;
  isOpenByDefault?: boolean;
  items?: {
    title: string;
    type: string;
    isFree?: boolean;
    url?: string;
  }[];
  instructors?: Instructor[];
  features?: Checklist[];
}

export interface CtaText {
  enroll_button_text: string;
  enroll_button_url: string;
  cta_text: string;
  name: string;
  description: string;
  order_idx: number;
}

export interface Seo {
  title: string;
  meta_description: string;
}

export interface Data {
  slug: string;
  id: number;
  data: Data[];
  title?: string;
  description: string;
  media: Medium[];
  checklist: Checklist[];
  seo: Seo;
  cta_text: Checklist;
  sections: Section[];
}
export interface Instructor {
  name: string;
  image?: string;
  text: string;
  slug?: string;
  description?: string;
  university?: string;
  score?: string;
  icon?: string;
  title?: string;
  subtitle?: string;
  background?: Background;
  cta?: Checklist;
  thumbnail?: string;
  top_left_icon_img?: string;
}
export interface Background {
  image: string;
}
export interface ApiResponse {
  success: boolean;
  data: Data;
}
