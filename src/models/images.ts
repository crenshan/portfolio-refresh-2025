export interface SiteImg {
  src: string | { sm: string; lg: string };
  alt: string;
}

export interface ClientLogo {
  light: SiteImg;
  dark: SiteImg;
}
