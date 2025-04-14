import { NavLink } from 'react-router-dom';

import { PortfolioItem } from '@/models';
import { ResponsiveImage } from '@/components';
import { WORK_ROUTE } from '@/config';

import mixins from '../styles/mixins.module.css';

import styles from './DetailBasic.module.css';

export const DetailBasic = ({ data }: { data: PortfolioItem }) => (
  <>
    {data.featLogo &&
      (() => {
        const FeatLogo = data.featLogo.logo;

        return (
          <div className={styles.detailLogo}>
            <FeatLogo
              title={`${data.featLogo.title || data.title} Logo`}
              color={data.featLogo.color}
              secondary={data.featLogo.secondary}
            />
          </div>
        );
      })()}
    <div className={styles.detailIntro}>
      <p>{data.description}</p>

      {data.pullQuote && <p className={styles.detailQuote}>{data.pullQuote}</p>}

      {data.empLogo &&
        (() => {
          const EmployerLogo = data.empLogo.SVG;
          return (
            <div className={styles.detailEmployer}>
              <span className={styles.detailEmployerLabel}>
                Created during
                <br /> my time at
              </span>
              <span className={mixins.visuallyHidden}>
                {data.empLogo.label}
              </span>
              <NavLink to={`${WORK_ROUTE}?tag=${data.empLogo.id}`}>
                <EmployerLogo
                  width={data.empLogo.size.width}
                  height={data.empLogo.size.height}
                />
              </NavLink>
            </div>
          );
        })()}
    </div>

    {data.imageList && (
      <div
        className={
          data.imagesUniform ? styles.detailImagesWrap : styles.detailImages
        }
      >
        {data.imageList.map((image, idx) => (
          <ResponsiveImage
            key={`${data.id}_detail_img_${idx}_${Math.random()}`}
            img={image}
          />
        ))}

        <div className={styles.employer} />
      </div>
    )}
  </>
);
