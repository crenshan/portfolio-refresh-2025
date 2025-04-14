import { useLocation } from 'react-router-dom';

import { about } from '@/content';
import { nathan } from '@/assets';
import { Marquee, ResponsiveImage } from '@/components';
import { HOME_ROUTE, marqueeLogos } from '@/config';

import mixins from '../../styles/mixins.module.css';

import styles from './Hero.module.css';

export const Hero = () => {
  const location = useLocation();

  if (location.pathname !== HOME_ROUTE) return null;

  return (
    <div className={styles.heroContainer}>
      <div className={`${styles.hero} ${mixins.outerContainer}`}>
        <div className={`${styles.heroInner} ${mixins.innerContainer}`}>
          <div className={styles.heroContent}>
            <div className={styles.heroHeadshot}>
              <ResponsiveImage img={nathan} />
            </div>

            <h1 className={styles.heroTitle}>{about.title}</h1>
            <h2 className={styles.heroSubtitle}>
              {about.subtitle}
              <i className={mixins.visuallyHidden}> / </i>
              <span>{about.a11y}</span>
            </h2>
            <p className={styles.heroIntro}>{about.intro}</p>
          </div>
        </div>
      </div>

      <Marquee logos={marqueeLogos} />
    </div>
  );
};
