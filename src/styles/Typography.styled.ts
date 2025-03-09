import { css } from 'styled-components';

import { UNIQUE_CAMPAIGN_ID } from '@/config';

import MediaQueries from './Media.styled';

/**
 * Global typography styles
 */
export const TypographyStyles = css`
  html {
    font-size: 62.5%;
  }

  :where(#${UNIQUE_CAMPAIGN_ID}) {
    &,
    p {
      font-size: 1.45rem;
      font-family: ${({ theme }) => theme.fontFamily.sans};
      font-weight: 500;
      line-height: 1.6;
      letter-spacing: 0.03em;

      ${MediaQueries.desktop} {
        font-size: clamp(1.6rem, 0.521vw + 1.079rem, 2rem);
        letter-spacing: 0.008em;
      }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: 800;
      line-height: 1.15;
      margin: 0 0 0.35em;
      letter-spacing: 0;
    }

    h1,
    h2 {
      font-size: 3.35rem;
      line-height: 1;

      ${MediaQueries.desktop} {
        font-size: clamp(4.2rem, 2.604vw + 1.596rem, 6.2rem);
        line-height: 1.1;
      }
    }

    h3 {
      font-size: 3.32rem;
    }

    h4 {
      font-size: 2.76rem;
    }

    h5 {
      font-size: 2.3rem;
    }

    h6 {
      font-size: 1.92rem;
    }

    small {
      font-size: 1.2rem;
    }

    sup {
      inset-block-start: -0.7em;
      font-size: 0.6em;
    }

    a {
      transition: all 200ms;
      text-decoration: underline;
      cursor: pointer;
      outline: none;
      position: relative;

      &[data-hovered] {
        text-decoration-style: wavy;
      }
    }
  }
`;

export default TypographyStyles;
