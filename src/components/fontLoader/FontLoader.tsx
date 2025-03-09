import { HeadProvider, Link } from 'react-head';

import { FONT_URLS } from '@/config';

/**
 * Google Font loader component
 * https://fonts.google.com/
 */
export const FontLoader = () => (
  <HeadProvider>
    <Link
      rel="preconnect"
      href="https://fonts.googleapis.com"
    />

    <Link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin=""
    />

    {FONT_URLS.map(fontUrl => (
      <Link
        key={`${fontUrl}_${Math.random()}`}
        href={fontUrl}
        rel="stylesheet"
      />
    ))}
  </HeadProvider>
);
