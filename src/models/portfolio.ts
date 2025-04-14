import { JSX } from 'react';

import { SiteImg } from './images';
import { WorkTag } from './tags';
import { LogoItem } from './logos';

export interface PortfolioLink {
  href: string;
  label: string;
}

export type PortfolioLogo = {
  href: string;
  SVG: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
};

export type PortfolioItem = {
  id: string;
  title: string;
  featTitle?: string;
  element: (() => JSX.Element | null) | (({ data }) => JSX.Element | null);
  short: string;
  description: string;
  pullQuote?: string;
  preview: SiteImg;
  featLogo?: {
    logo: React.ComponentType<
      React.SVGProps<SVGSVGElement> & {
        title?: string;
        color?: string;
        secondary?: string;
      }
    >;
    color?: string;
    secondary?: string;
    title?: string;
  };
  empLogo?: LogoItem;
  images?: { [key: string]: SiteImg };
  imageList?: SiteImg[];
  imagesUniform?: boolean;
  links?: PortfolioLink[];
  tags: WorkTag[];
  year: number;
};
