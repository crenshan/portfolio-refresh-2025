import { createGlobalStyle } from 'styled-components';

import { DEBUG, UNIQUE_CAMPAIGN_ID } from '@/config';

import { NormalizeStyles } from './Normalize.styled';
import { TypographyStyles } from './Typography.styled';
import { RevengeStyles } from './Revenge.styled';
import MediaQueries from './Media.styled';
import { VisuallyHidden } from './Mixins.styled';

/**
 * GlobalStyleComponent for application with imports for other global
 * style files and defined global layout styles
 */
export const GlobalStyles = createGlobalStyle`

  ${NormalizeStyles}

  ${TypographyStyles}

  :where(#${UNIQUE_CAMPAIGN_ID}) {
    /* provides visual feed back in UI for markup errors */
    ${process.env.NODE_ENV === 'development' && DEBUG && RevengeStyles}

    /* & {
      max-width: 100vw;
    } */

    *,
    *::before,
    *::after { box-sizing: border-box; }

    ${MediaQueries.reduceMotion} {
      * {
        transition: none !important;
        animation: none !important;
      }
    }

    button {
      &:focus-visible {
        outline-offset: 0.5rem;
      }

      &:active {
        scale: 0.98;
      }
    }

    a:hover,
    a:focus,
    a:focus-visible {
      ${MediaQueries.desktop} {
      outline-offset: 0.5rem;
      }
    }

    /* Hiding class, making content visible only to screen readers but not visually */
    .-sr-only {
      ${VisuallyHidden}
    }
  }

  .visually-hidden {
    border: 0;
    clip: rect(0, 0, 0, 0);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    white-space: nowrap;
  }
`;

export default GlobalStyles;
