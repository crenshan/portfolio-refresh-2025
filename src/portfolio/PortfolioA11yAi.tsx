import { NavLink } from 'react-router-dom';

import { ResponsiveImage } from '@/components';
import { WORK_ROUTE, portfolio } from '@/config';
import {
  a11yAiFigmaDemo,
  a11yAiFigmaPoster,
  a11yAiWebDemo,
  a11yAiWebPoster
} from '@/assets/work/a11yAi';

import mixins from '../styles/mixins.module.css';

import styles from './DetailBasic.module.css';

export const PortfolioA11yAi = () => {
  const data = portfolio.find(pItem => pItem.id === 'a11yAi');
  const imgs = data?.images;

  const figmaVideo = a11yAiFigmaDemo;
  const figmaPoster = a11yAiFigmaPoster;
  const webVideo = a11yAiWebDemo;
  const webPoster = a11yAiWebPoster;

  if (!data || !imgs) return null;

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

      <h2>Figma Plugin</h2>

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
              preload="metadata"
              aria-label="Coca-Cola Freestyle: Contact-Free Dispensing Overview"
              aria-describedby="contactless-video-desc"
              title="Coca-Cola Freestyle Mobile Pour overview"
              poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
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

      <div className={styles.detailImagesWrap}>
        <ResponsiveImage img={imgs.figmaAltText} />
        <ResponsiveImage img={imgs.figmaUpdate} />
      </div>

      <div className={styles.divider} />

      <h2>Web Application</h2>

      <div className={styles.videoWrap}>
        <div
          className={styles.videoWrapInner}
          style={
            figmaVideo.ratio ? { paddingTop: `${webVideo.ratio}%` } : undefined
          }
        >
          <div
            className={styles.videoPoster}
            aria-hidden
          >
            {webVideo.poster && <ResponsiveImage img={webPoster} />}
          </div>

          <figure>
            <video
              controls
              playsInline
              autoPlay={!!webVideo.autoplay}
              muted={!!webVideo.autoplay}
              loop={!!webVideo.autoplay}
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
                src={webVideo.src.webm}
                type="video/webm"
              />
              <source
                src={webVideo.src.mp4}
                type="video/mp4"
              />
              {webVideo.captions && (
                <track
                  default
                  kind="captions"
                  srcLang="en"
                  label="English CC"
                  src={webVideo.captions}
                />
              )}
            </video>

            {webVideo.description && (
              <figcaption
                id="contactless-video-desc"
                className={mixins.visuallyHidden}
              >
                {webVideo.description}
              </figcaption>
            )}
          </figure>
        </div>
      </div>

      <div className={styles.detailImagesWrap}>
        <ResponsiveImage img={imgs.webAltText} />
        <ResponsiveImage img={imgs.webUpdate} />
      </div>
    </>
  );
};
