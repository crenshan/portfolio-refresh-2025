import { about } from '@/content';
import { nathan } from '@/assets';

import styles from './Hero.module.css';

export const Hero = () => {
  //* FIXME: Remove console message
  console.log('NC>>', 'HERO');

  return (
    <div className={styles.heroContainer}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroHeadshot}>
            <img
              src={nathan.src as string}
              alt={nathan.alt}
            />
          </div>

          <h1 className={styles.heroTitle}>{about.title}</h1>
          <h2 className={styles.heroSubtitle}>{about.subtitle}</h2>
          <p className={styles.heroIntro}>{about.intro}</p>
        </div>
      </div>
    </div>
  );
};
