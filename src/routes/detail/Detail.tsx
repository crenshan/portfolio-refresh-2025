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

            <h1>HTML Ipsum Presents</h1>

            <p>
              <strong>Pellentesque habitant morbi tristique</strong> senectus et
              netus et malesuada fames ac turpis egestas. Vestibulum tortor
              quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
              eu libero sit amet quam egestas semper.{' '}
              <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend
              leo. Quisque sit amet est et sapien ullamcorper pharetra.
              Vestibulum erat wisi, condimentum sed ornare sit amet, wisi.
              Aenean fermentum, elit eget tincidunt condimentum, eros ipsum
              rutrum orci, sagittis tempus lacus enim ac dui.{' '}
              <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut
              felis.
            </p>

            <h2>Header Level 2</h2>

            <ol>
              <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
              <li>Aliquam tincidunt mauris eu risus.</li>
            </ol>

            <blockquote>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                magna. Cras in mi at felis aliquet congue. Ut a est eget ligula
                molestie gravida. Curabitur massa. Donec eleifend, libero at
                sagittis mollis, tellus est malesuada tellus, at luctus turpis
                elit sit amet quam. Vivamus pretium ornare est.
              </p>
            </blockquote>

            <h3>Header Level 3</h3>

            <ul>
              <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
              <li>Aliquam tincidunt mauris eu risus.</li>
            </ul>

            <h1>HTML Ipsum Presents</h1>

            <p>
              <strong>Pellentesque habitant morbi tristique</strong> senectus et
              netus et malesuada fames ac turpis egestas. Vestibulum tortor
              quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
              eu libero sit amet quam egestas semper.{' '}
              <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend
              leo. Quisque sit amet est et sapien ullamcorper pharetra.
              Vestibulum erat wisi, condimentum sed ornare sit amet, wisi.
              Aenean fermentum, elit eget tincidunt condimentum, eros ipsum
              rutrum orci, sagittis tempus lacus enim ac dui.{' '}
              <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut
              felis.
            </p>

            <h2>Header Level 2</h2>

            <ol>
              <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
              <li>Aliquam tincidunt mauris eu risus.</li>
            </ol>

            <blockquote>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                magna. Cras in mi at felis aliquet congue. Ut a est eget ligula
                molestie gravida. Curabitur massa. Donec eleifend, libero at
                sagittis mollis, tellus est malesuada tellus, at luctus turpis
                elit sit amet quam. Vivamus pretium ornare est.
              </p>
            </blockquote>

            <h3>Header Level 3</h3>

            <ul>
              <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
              <li>Aliquam tincidunt mauris eu risus.</li>
            </ul>

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
