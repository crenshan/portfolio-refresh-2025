import { useContext, useEffect, useMemo } from 'react';
import { useSearchParams, useNavigate, NavLink } from 'react-router-dom';

import { APP_ACTIONS, AppContext } from '@/store';
import { WORK_ROUTE, workLogos, portfolio } from '@/config';
import type { PortfolioItem, WorkTag } from '@/models';
import { shuffleArray } from '@/utils';
import { ResponsiveImage, SkipLink } from '@/components';

import mixins from '../../styles/mixins.module.css';

import styles from './Work.module.css';

export const Work = () => {
  const { state, dispatch } = useContext(AppContext);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const pKeys = Object.keys(portfolio);

  const portfolioTags = useMemo(() => {
    const allTags: WorkTag[] = [];

    for (let i = 0; i < pKeys.length; i++) {
      const pTags = portfolio[i].tags;

      for (let j = 0; j < pTags.length; j++) {
        if (!allTags.includes(pTags[j])) {
          allTags.push(pTags[j]);
        }
      }
    }

    return allTags;
  }, [pKeys.length]);

  const activeTags = state.workTags;

  const workKeys = useMemo(
    () =>
      activeTags.length ? activeTags : (
        (shuffleArray(portfolioTags) as string[])
      ),
    [activeTags, portfolioTags]
  );

  const workItems = useMemo(() => {
    const items: PortfolioItem[] = [];
    for (let i = 0; i < pKeys.length; i++) {
      const pTags = portfolio[i].tags;
      let hasTag = false;

      for (let j = 0; j < pTags.length; j++) {
        if (workKeys.includes(pTags[j])) {
          hasTag = true;
        }
      }

      if (hasTag) items.push(portfolio[i]);
    }

    return items.sort((a, b) => b.year - a.year);
  }, [pKeys.length, workKeys]);

  const toggleActive = (id: WorkTag) => {
    let newTags = [] as WorkTag[];

    if (activeTags.includes(id)) {
      newTags = state.workTags.filter(tag => tag !== id);
    } else {
      // newTags = [...state.workTags, id];
      newTags = [id];
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
          <SkipLink to="#work_portfolio">Skip Filters</SkipLink>

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
              {portfolioTags.map(key => {
                const isActive = activeTags.includes(key as WorkTag);
                const LogoSVG = workLogos[key].SVG;
                return (
                  <button
                    key={`work_logo_${key}`}
                    className={`${styles.workTagButton} ${mixins.touchTarget} ${isActive ? styles.active : ''}`}
                    type="button"
                    style={{
                      width: workLogos[key].size.width,
                      height: workLogos[key].size.height
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

          <main
            id="work_portfolio"
            className={styles.workList}
          >
            <h2 className={mixins.visuallyHidden}>Portfolio</h2>

            <div className={styles.workListItems}>
              {workItems.map(item => (
                <NavLink
                  key={`work_item_${item.id}`}
                  className={styles.workListItem}
                  aria-labelledby={`work_item_${item.id}_label`}
                  aria-describedby={`work_item_${item.id}_desc`}
                  to={`${WORK_ROUTE}/${item.id}`}
                >
                  <ResponsiveImage
                    img={item.preview}
                    aria-hidden
                  />

                  <div
                    className={styles.workListItemContent}
                    aria-hidden
                  >
                    <h3
                      id={`work_item_${item.id}_label`}
                      className={styles.workListLabel}
                    >
                      <span className={mixins.visuallyHidden}>
                        Click to view details for{' '}
                      </span>
                      {item.title}
                    </h3>

                    <p
                      id={`work_item_${item.id}_desc`}
                      className={styles.workListDescription}
                    >
                      {item.description}
                    </p>

                    <div className={styles.workListLogos}>
                      {item.tags.map(tag => {
                        const LogoSVG = workLogos[tag].SVG;
                        return (
                          <div
                            key={`work_item_${item.id}_logo_${tag}`}
                            style={{
                              width: workLogos[tag].size.width,
                              height: workLogos[tag].size.height
                            }}
                          >
                            <LogoSVG title={workLogos[tag].label} />
                          </div>
                        );
                      })}
                    </div>

                    <p className={styles.workListPrompt}>Click for Details</p>
                  </div>
                </NavLink>
              ))}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
