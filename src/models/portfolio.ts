import { JSX } from 'react';

import { SiteImg } from './images';

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
  element: () => JSX.Element;
  description: string;
  preview: SiteImg;
  logos: PortfolioLogo[];
  images?: { [key: string]: SiteImg };
  imageList?: SiteImg[];
  links?: PortfolioLink[];
};
