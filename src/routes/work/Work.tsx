import { useContext, useEffect, useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

import { APP_ACTIONS, AppContext } from '@/store';
import { WORK_ROUTE, workLogos } from '@/config';
import type { WorkTag } from '@/models';
import { shuffleArray } from '@/utils';

import mixins from '../../styles/mixins.module.css';

import styles from './Work.module.css';

export const Work = () => {
  const { state, dispatch } = useContext(AppContext);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const allTags = useMemo(
    () => shuffleArray(Object.keys(workLogos)) as string[],
    []
  );
  const activeTags = state.workTags;

  const toggleActive = (id: WorkTag) => {
    let newTags = [] as WorkTag[];

    if (activeTags.includes(id)) {
      newTags = state.workTags.filter(tag => tag !== id);
    } else {
      newTags = [...state.workTags, id];
    }
    dispatch({
      type: APP_ACTIONS.UPDATE_WORK_TAGS,
      payload: {
        workTags: newTags
      }
    });
  };

  useEffect(() => {
    const query = searchParams.get('tag');
    const tags = query?.split(',');
    if (tags && tags.length) {
      dispatch({
        type: APP_ACTIONS.UPDATE_WORK_TAGS,
        payload: {
          workTags: [...(tags as WorkTag[])]
        }
      });

      navigate(WORK_ROUTE, { replace: true });
    }
  }, [searchParams, dispatch, navigate]);

  return (
    <>
      <header>
        <div className={`${styles.workHead} ${mixins.outerContainer}`}>
          <div className={`${styles.workHeadInner} ${mixins.innerContainer}`}>
            <h1>Work</h1>
          </div>
        </div>
      </header>

      <div className={mixins.outerContainer}>
        <div className={mixins.innerContainer}>
          <section
            className={styles.workFilters}
            aria-labelledby="work-filter-heading"
            aria-describedby="work-filter-description"
          >
            <h2
              id="work-filter-heading"
              className={styles.workFiltersHead}
            >
              Filter Work by Employer/Client
            </h2>
            <p
              id="work-filter-description"
              className={mixins.visuallyHidden}
            >
              Select the buttons below to view the work associated with specific
              employers and clients. If no filters are applied, all work will be
              displayed
            </p>
            <div className={styles.workTags}>
              {allTags.map(key => {
                const isActive = activeTags.includes(key as WorkTag);
                const LogoSVG = workLogos[key].SVG;
                return (
                  <button
                    key={`work_logo_${key}`}
                    className={`${styles.workTagButton} ${mixins.touchTarget} ${isActive ? styles.active : ''}`}
                    type="button"
                    style={{
                      width: workLogos[key].width,
                      height: workLogos[key].height
                    }}
                    onClick={() => toggleActive(key as WorkTag)}
                    aria-label={
                      isActive ?
                        `Remove ${workLogos[key].label} filter`
                      : `Filter by ${workLogos[key].label}`
                    }
                    aria-pressed={isActive}
                  >
                    <LogoSVG />
                  </button>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
