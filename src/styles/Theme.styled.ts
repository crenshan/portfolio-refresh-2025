import { Colors } from './Colors.styled';

export const PX_TO_REM = 10;

// check if browser has accessibility option for 'reduced motion' active
const reduceMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;
export const PAGE_TRANSITION = {
  ease: 'easeOut',
  duration: reduceMotion ? 0 : 0.5
};

export const breakpoints = {
  mobileMin: 320,
  mobileMid: 360,
  tabletMin: 580,
  desktopMin: 1000,
  desktopMax: 1512
};

const colors = {
  // base colors
  black: '#000',
  white: '#fff',

  pink: '#c615b1',
  purple: '#753eab',
  blue: '#1b5cff',
  green: '#00c9a7',
  yellow: '#ffce22',
  orange: '#ff675e',
  red: '#ff3d71',

  ...Colors
};

const gradients = {
  pinkPurple: `linear-gradient(to right,${colors.purple},${colors.pink})`,
  greenYellow: `linear-gradient(to right, ${colors.green}, ${colors.yellow})`,
  redOrange: `linear-gradient(to right, ${colors.red}, ${colors.orange})`
};

/**
 * Theme configuration for StyledComponents
 */
export const Theme = {
  // layout
  // -------------------------------------------------
  pagePadding: {
    mobile: 3, // 30px
    desktop: 8 // 80px
  },

  navHeight: {
    mobile: 11.4 // 114px
  },

  mobNavBuffer: 40,

  touchTarget: 44,

  // fonts
  // -------------------------------------------------
  fontFamily: {
    sans: `'Noto Sans', sans-serif`
  },

  // colors
  // -------------------------------------------------
  colors: {
    ...colors
  },

  gradients: {
    ...gradients
  },

  // breakpoints
  // -------------------------------------------------
  breakpoints
};

export default Theme;
