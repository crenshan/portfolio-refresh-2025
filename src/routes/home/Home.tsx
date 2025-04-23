import { NavLink } from 'react-router-dom';

import { Featured, ResponsiveImage } from '@/components';
import { portfolio, WORK_ROUTE } from '@/config';
import { a11yAiFigmaDemo, a11yAiFigmaPoster } from '@/assets/work/a11yAi';

import mixins from '../../styles/mixins.module.css';

import styles from './Home.module.css';

export const Home = () => {
  const a11yAiData = portfolio.find(pItem => pItem.id === 'a11yAi');
  const imgs = a11yAiData?.images;

  const figmaVideo = a11yAiFigmaDemo;
  const figmaPoster = a11yAiFigmaPoster;

  if (!a11yAiData || !imgs) return null;

  return (
    <>
      <section className={`${styles.homeFeature} ${mixins.outerContainer}`}>
        <div className={styles.videoWrap}>
          <div
            className={styles.videoWrapInner}
            style={
              figmaVideo.ratio ?
                { paddingTop: `${figmaVideo.ratio}%` }
              : undefined
            }
          >
            <div
              className={styles.videoPoster}
              aria-hidden
            >
              {figmaVideo.poster && <ResponsiveImage img={figmaPoster} />}
            </div>

            <figure>
              <video
                controls
                playsInline
                autoPlay={!!figmaVideo.autoplay}
                muted={!!figmaVideo.autoplay}
                loop={!!figmaVideo.autoplay}
                controlsList="nodownload noremoteplayback noplaybackrate"
                disablePictureInPicture
                onContextMenu={() => false}
                preload="metaa11yAiData"
                aria-label="Coca-Cola Freestyle: Contact-Free Dispensing Overview"
                aria-describedby="contactless-video-desc"
                title="Coca-Cola Freestyle Mobile Pour overview"
                poster="a11yAiData:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
              >
                <source
                  src={figmaVideo.src.webm}
                  type="video/webm"
                />
                <source
                  src={figmaVideo.src.mp4}
                  type="video/mp4"
                />
                {figmaVideo.captions && (
                  <track
                    default
                    kind="captions"
                    srcLang="en"
                    label="English CC"
                    src={figmaVideo.captions}
                  />
                )}
              </video>

              {figmaVideo.description && (
                <figcaption
                  id="contactless-video-desc"
                  className={mixins.visuallyHidden}
                >
                  {figmaVideo.description}
                </figcaption>
              )}
            </figure>
          </div>
        </div>

        <div className={styles.homeFeatureDetails}>
          {a11yAiData.featLogo &&
            (() => {
              const FeatLogo = a11yAiData.featLogo.logo;

              return (
                <NavLink
                  to={`${WORK_ROUTE}/${a11yAiData.id}`}
                  className={styles.detailLogo}
                  aria-label={`Click to view details for ${a11yAiData.featTitle}`}
                >
                  <FeatLogo
                    title={`${a11yAiData.featLogo.title || a11yAiData.title} Logo`}
                    color={a11yAiData.featLogo.color}
                    secondary={a11yAiData.featLogo.secondary}
                  />
                </NavLink>
              );
            })()}

          <div className={styles.detailIntro}>
            {!a11yAiData.featLogo && (
              <div
                className={styles.detailTitle}
                aria-hidden
              >
                {a11yAiData.title}
              </div>
            )}

            <p>{a11yAiData.short}</p>
          </div>
        </div>

        <div className={styles.detailLinksWrap}>
          <NavLink
            to={`${WORK_ROUTE}/${a11yAiData.id}`}
            className={styles.detailLink}
            aria-label={`Click to view details for ${a11yAiData.featTitle}`}
          >
            View Details
          </NavLink>
        </div>

        <div className={styles.divider} />
      </section>

      <Featured />
      {/* ... */}
    </>
  );
};
