import { SiteImg, ClientLogo } from '@/models';

// CLIENT LOGO IMAGES
export const amazonLight: SiteImg = {
  src: {
    sm: '/images/clients/amazon_wt.png',
    lg: '/images/clients/amazon_wt@2x.png'
  },
  alt: 'Amazon logo'
};

export const amazonDark: SiteImg = {
  src: {
    sm: '/images/clients/amazon.png',
    lg: '/images/clients/amazon@2x.png'
  },
  alt: 'Amazon logo'
};

export const amazonLogo: ClientLogo = {
  light: amazonLight,
  dark: amazonDark
};

export const attLight: SiteImg = {
  src: {
    sm: '/images/clients/att_wt.png',
    lg: '/images/clients/att_wt@2x.png'
  },
  alt: 'AT&T logo'
};

export const attDark: SiteImg = {
  src: { sm: '/images/clients/att.png', lg: '/images/clients/att@2x.png' },
  alt: 'AT&T logo'
};

export const attLogo: ClientLogo = {
  light: attLight,
  dark: attDark
};

export const cocaColaLight: SiteImg = {
  src: {
    sm: '/images/clients/coca_cola_wt.png',
    lg: '/images/clients/coca_cola_wt@2x.png'
  },
  alt: 'Coca-Cola logo'
};

export const cocaColaDark: SiteImg = {
  src: {
    sm: '/images/clients/coca_cola.png',
    lg: '/images/clients/coca_cola@2x.png'
  },
  alt: 'Coca-Cola logo'
};

export const cocaColaLogo: ClientLogo = {
  light: cocaColaLight,
  dark: cocaColaDark
};

export const jpMorganLight: SiteImg = {
  src: {
    sm: '/images/clients/jpmorgan_wt.png',
    lg: '/images/clients/jpmorgan_wt@2x.png'
  },
  alt: 'JP Morgan logo'
};

export const jpMorganDark: SiteImg = {
  src: {
    sm: '/images/clients/jpmorgan.png',
    lg: '/images/clients/jpmorgan@2x.png'
  },
  alt: 'JP Morgan logo'
};

export const jpMorganLogo: ClientLogo = {
  light: jpMorganLight,
  dark: jpMorganDark
};

export const northwesternLight: SiteImg = {
  src: {
    sm: '/images/clients/northwestern_wt.png',
    lg: '/images/clients/northwestern_wt@2x.png'
  },
  alt: 'Northwestern logo'
};

export const northwesternDark: SiteImg = {
  src: {
    sm: '/images/clients/northwestern.png',
    lg: '/images/clients/northwestern@2x.png'
  },
  alt: 'Northwestern logo'
};

export const northwesternLogo: ClientLogo = {
  light: northwesternLight,
  dark: northwesternDark
};

export const upsLight: SiteImg = {
  src: {
    sm: '/images/clients/ups_wt.png',
    lg: '/images/clients/ups_wt@2x.png'
  },
  alt: 'UPS logo'
};

export const upsDark: SiteImg = {
  src: { sm: '/images/clients/ups.png', lg: '/images/clients/ups@2x.png' },
  alt: 'UPS logo'
};

export const upsLogo: ClientLogo = {
  light: upsLight,
  dark: upsDark
};

export const verizonLight: SiteImg = {
  src: {
    sm: '/images/clients/verizon_wt.png',
    lg: '/images/clients/verizon_wt@2x.png'
  },
  alt: 'Verizon logo'
};

export const verizonDark: SiteImg = {
  src: {
    sm: '/images/clients/verizon.png',
    lg: '/images/clients/verizon@2x.png'
  },
  alt: 'Verizon logo'
};

export const verizonLogo: ClientLogo = {
  light: verizonLight,
  dark: verizonDark
};

export const clientLogos: { [key: string]: ClientLogo } = {
  amazon: amazonLogo,
  att: attLogo,
  cocaCola: cocaColaLogo,
  jpMorgan: jpMorganLogo,
  northwestern: northwesternLogo,
  ups: upsLogo,
  verizon: verizonLogo
};
