import { NavLink } from 'react-router-dom';

import { PortfolioItem } from '@/models';
import { ResponsiveImage } from '@/components';
import { WORK_ROUTE } from '@/config';

import mixins from '../styles/mixins.module.css';

import styles from './DetailBasic.module.css';

export const DetailBasic = ({ data }: { data: PortfolioItem }) => {
  const getImgClassnames = () =>
    data.imagesUniform || data.imageList?.length === 1 ?
      styles.detailImagesWrap
    : styles.detailImages;

  return (
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
        {!data.featLogo && (
          <div
            className={styles.detailTitle}
            aria-hidden
          >
            {data.title}
          </div>
        )}

        <p>{data.description}</p>

        {data.pullQuote && (
          <p className={styles.detailQuote}>{data.pullQuote}</p>
        )}

        {data.links && (
          <ul className={styles.detailLinkList}>
            {data.links.map(link => (
              <li key={`${data.id}_detail_link_${link.href}}`}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="nofollow noreferrer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}

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

      {data.featureVideo && (
        <div className={styles.videoWrap}>
          <div
            className={styles.videoWrapInner}
            style={
              data.featureVideo.video.ratio ?
                { paddingTop: `${data.featureVideo.video.ratio}%` }
              : undefined
            }
          >
            <div
              className={styles.videoPoster}
              aria-hidden
            >
              {data.featureVideo.poster && (
                <ResponsiveImage img={data.featureVideo.poster} />
              )}
            </div>

            <figure>
              <video
                controls
                playsInline
                autoPlay={!!data.featureVideo.video.autoplay}
                muted={!!data.featureVideo.video.autoplay}
                loop={!!data.featureVideo.video.autoplay}
                controlsList="nodownload noremoteplayback noplaybackrate"
                disablePictureInPicture
                onContextMenu={() => false}
                preload="metadata"
                aria-label="Coca-Cola Freestyle: Contact-Free Dispensing Overview"
                aria-describedby="contactless-video-desc"
                title="Coca-Cola Freestyle Mobile Pour overview"
                poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
              >
                <source
                  src={data.featureVideo.video.src.webm}
                  type="video/webm"
                />
                <source
                  src={data.featureVideo.video.src.mp4}
                  type="video/mp4"
                />
                {data.featureVideo.video.captions && (
                  <track
                    default
                    kind="captions"
                    srcLang="en"
                    label="English CC"
                    src={data.featureVideo.video.captions}
                  />
                )}
              </video>

              {data.featureVideo.video.description && (
                <figcaption
                  id="contactless-video-desc"
                  className={mixins.visuallyHidden}
                >
                  {data.featureVideo.video.description}
                </figcaption>
              )}
            </figure>
          </div>
        </div>
      )}

      {data.imageList && (
        <div className={getImgClassnames()}>
          {data.imageList.map((image, idx) => (
            <ResponsiveImage
              key={`${data.id}_detail_img_${idx}}`}
              img={image}
            />
          ))}

          <div className={styles.employer} />
        </div>
      )}
    </>
  );
};
