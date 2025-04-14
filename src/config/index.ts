export * from './featured';
export * from './marquee';
export * from './portfolio';
export * from './portfolioLogos';
export * from './routes';
export * from './workLogos';

export const version = '1.0';

export const UNIQUE_CAMPAIGN_ID = import.meta.env.VITE_UNIQUE_CAMPAIGN_ID;

export const DEBUG = import.meta.env.VITE_DEBUG;

export const isDev = import.meta.env.DEV;
export const isProd = import.meta.env.PROD;

export const BREAKPOINT_DESKTOP = 768;

// check if browser has accessibility option for 'reduced motion' active
export const REDUCE_MOTION = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

// check if browser has accessibility option for 'reduced transparency' active
export const REDUCE_TRANSPARENCY = window.matchMedia(
  '(prefers-reduced-transparency: reduce)'
).matches;

// FONTS
export const FONTS = {
  nunito:
    'https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap'
  // publicSans:
  //   'https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap'
  // noto: 'https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap'
};

export const FONT_URLS = Object.values(FONTS);
