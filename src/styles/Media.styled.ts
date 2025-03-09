import { breakpoints } from './Theme.styled';

export const MediaQueries = {
  micro: `@media screen and (max-width: ${breakpoints.mobileMin - 1}px)`,
  mobileSm: `@media screen and (max-width: ${breakpoints.mobileMid - 1}px)`,
  mobile: `@media screen and (max-width: ${breakpoints.tabletMin - 1}px)`,
  mobileMid: `@media screen and (min-width: ${breakpoints.mobileMid}px)`,
  tablet: `@media screen and (min-width: ${breakpoints.tabletMin}px)`,
  desktop: `@media screen and (min-width: ${breakpoints.desktopMin}px)`,
  desktopMax: `@media screen and (min-width: ${breakpoints.desktopMax}px)`,

  // 'reduce motion' user setting is present
  reduceMotion: '@media (prefers-reduced-motion: reduce)',

  // 'reduce motion' user setting is present
  allowMotion: '@media (prefers-reduced-motion: no-preference)'
};

export default MediaQueries;
