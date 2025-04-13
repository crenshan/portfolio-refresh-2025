import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

import { portfolio, WORK_ROUTE } from '@/config';
import type { PortfolioItem } from '@/models';

import mixins from '../../styles/mixins.module.css';

import styles from './Detail.module.css';

export const Detail = () => {
  const { id: detailId } = useParams();

  const [pageData, setPageData] = useState<PortfolioItem | null>();
  const [noData, setNoData] = useState(false);

  useEffect(() => {
    const details = portfolio.find(item => item.id === detailId);
    if (details) {
      setPageData(details);
    } else {
      setNoData(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header>
        <div className={`${styles.detailHead} ${mixins.outerContainer}`}>
          <div className={`${styles.detailHeadInner} ${mixins.innerContainer}`}>
            <h1>{pageData?.title}</h1>
          </div>
        </div>
      </header>

      <div className={mixins.outerContainer}>
        <div className={mixins.innerContainer}>
          <main className={styles.workDetail}>
            {noData && (
              <div className={styles.noData}>
                <p>{`Sorry, but we can't find that information.`}</p>
              </div>
            )}

            {pageData && <pageData.element data={pageData} />}

            <div className={styles.allWorkWrap}>
              <NavLink
                to={WORK_ROUTE}
                className={styles.allWork}
              >
                View All Work
              </NavLink>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
