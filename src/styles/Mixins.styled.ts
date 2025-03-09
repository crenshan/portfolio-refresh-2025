/* eslint-disable no-bitwise */
import { css, keyframes } from 'styled-components';

import MediaQueries from './Media.styled';
import { PX_TO_REM } from './Theme.styled';

export const FullWidthOuter = (bgColor?: string, noPadding?: boolean) => css`
  background: ${() => bgColor || 'none'};
  padding-inline: ${({ theme }) =>
    noPadding ? 0 : theme.pagePadding.mobile}rem;
  width: 100%;
  transition: background-color 0.3s ease-in-out;

  ${MediaQueries.desktop} {
    padding-inline: ${({ theme }) =>
      noPadding ? 0 : theme.pagePadding.desktop}rem;
  }
`;

export const FullWidthInner = () => css`
  max-width: ${({ theme }) =>
    theme.breakpoints.desktopMax - theme.pagePadding.desktop * PX_TO_REM * 2}px;
  margin: 0 auto;
`;

export const HexToRgba = (hex: string, opacity: number): string => {
  let c: number;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    let temp: string[] = hex.substring(1).split('');
    if (temp.length === 3) {
      temp = [temp[0], temp[0], temp[1], temp[1], temp[2], temp[2]];
    }
    c = parseInt(temp.join(''), 16); // Ensure 'c' is a number
    return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',')},${opacity})`;
  }
  throw new Error('Bad Hex');
};

export const VisuallyHidden = css`
  &:not(:focus, :active) {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;

export const VisuallyHiddenUnset = css`
  &:not(:focus, :active) {
    clip: unset;
    clip-path: unset;
    height: unset;
    overflow: unset;
    position: unset;
    white-space: unset;
    width: unset;
  }
`;

export const TouchTarget = css`
  &::after {
    content: '';
    position: absolute;
    inset: 50% 0 0 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    min-width: ${({ theme }) => theme.touchTarget}px;
    height: 100%;
    min-height: ${({ theme }) => theme.touchTarget}px;
  }
`;

export const MediaBelowHeight = (height: number) =>
  `@media (max-height: ${height}px)`;

export const MediaAboveHeight = (height: number) =>
  `@media (min-height: ${height}px)`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SlideIn = (duration = 0.3, delay = 0) => css`
  animation-duration: ${duration}s;
  animation-delay: ${delay}s;
  animation-name: ${slideIn};
  animation-fill-mode: forwards;
  opacity: 0;
`;

const fadeIn = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`;

export const FadeIn = (duration = 0.3, delay = 0) => css`
  animation-duration: ${duration}s;
  animation-delay: ${delay}s;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
  opacity: 0;
`;

export const spin = keyframes`
    from { transform:rotate(0deg) }
    to { transform:rotate(360deg) }
`;

export const Spin = (duration = 3) => css`
  animation-duration: ${duration}s;
  animation-name: ${spin};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;
