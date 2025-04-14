import { NavLink } from 'react-router-dom';
import { useContext, useMemo } from 'react';

import { WORK_ROUTE, featuredWork, portfolio } from '@/config';
import { PortfolioItem } from '@/models';
import { APP_ACTIONS, AppContext } from '@/store';

import mixins from '../../styles/mixins.module.css';
import { ResponsiveImage } from '../svg/responsiveImage';

import styles from './Featured.module.css';

export const Featured = () => {
  const { dispatch } = useContext(AppContext);

  const resetWorkFilters = () => {
    dispatch({
      type: APP_ACTIONS.UPDATE_WORK_TAGS,
      payload: {
        workTags: []
      }
    });
  };

  const featWork = useMemo(() => {
    const work: PortfolioItem[] = [];

    for (let i = 0; i < featuredWork.length; i++) {
      const portItem = portfolio.find(port => port.id === featuredWork[i]);
      if (portItem) work.push(portItem);
    }

    return work;
  }, []);

  return (
    <section className={`${styles.featured} ${mixins.outerContainer}`}>
      <div className={mixins.innerContainer}>
        <div className={styles.featuredInner}>
          <h2 className={mixins.visuallyHidden}>Featured Work</h2>

          <div className={styles.featuredList}>
            {featWork.map(work => (
              <div
                key={`home_work_${work.id}_${Math.random()}`}
                className={styles.featuredListItem}
              >
                <div className={styles.featuredListPreview}>
                  <NavLink
                    to={`${WORK_ROUTE}/${work.id}`}
                    aria-label={`Click to view details for ${work.featTitle}`}
                  >
                    <ResponsiveImage img={work.preview} />
                  </NavLink>
                </div>
                <div className={styles.featuredListDetails}>
                  <h3>{work.featTitle || work.title}</h3>

                  <p>{work.short}</p>

                  <div className={styles.detailLinksWrap}>
                    <NavLink
                      to={`${WORK_ROUTE}/${work.id}`}
                      className={styles.detailLink}
                      aria-label={`Click to view details for ${work.featTitle}`}
                    >
                      View Details
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.allWorkWrap}>
            <NavLink
              to={WORK_ROUTE}
              className={styles.allWork}
              onClick={resetWorkFilters}
            >
              View All Work
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};
