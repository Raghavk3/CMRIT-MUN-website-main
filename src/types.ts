export interface CompatibilityItem {
  icon: string;
  title: string;
  url: string;
}

export interface FeatureItem {
  description: string;
  icon: string;
  subtitle:string;
  title: string;
  popup_title: string;
  popup_agenda1: string;
  popup_agenda2: string;
  executive1: string;
  executive2:string;
  social: {
    instagram: string;
    whatsapp: string;
    linkedin: string;
  };
}

export interface FooterLink {
  description: string;
  icon: string;
  url: string;
}

export interface NavItem {
  title: string;
  url: string;
}
