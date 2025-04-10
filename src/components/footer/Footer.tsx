import { MarqueeLogos } from '@/config';

import { Marquee } from '../marquee';

import styles from './Footer.module.css';

export const Footer = () => {
  const fContentId = 'footerContent';
  return (
    <footer className={styles.footer}>
      <Marquee
        logos={MarqueeLogos}
        skipTo={`#${fContentId}`}
      />
      <div id={fContentId} />
    </footer>
  );
};
