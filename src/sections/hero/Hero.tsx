import { about } from '@/content';
import { nathan } from '@/assets';
import { Marquee, ResponsiveImage } from '@/components';
import { MarqueeLogos } from '@/config/marquee';

import styles from './Hero.module.css';

export const Hero = () => (
  <div className={styles.heroContainer}>
    <div className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroContent}>
          <div className={styles.heroHeadshot}>
            <ResponsiveImage img={nathan} />
          </div>

          <h1 className={styles.heroTitle}>{about.title}</h1>
          <h2 className={styles.heroSubtitle}>
            {about.subtitle}
            <i className={styles.heroSubtitleSeparator}> / </i>
            <span>{about.a11y}</span>
          </h2>
          <p className={styles.heroIntro}>{about.intro}</p>
        </div>
      </div>
    </div>

    <Marquee logos={MarqueeLogos} />
  </div>
);
