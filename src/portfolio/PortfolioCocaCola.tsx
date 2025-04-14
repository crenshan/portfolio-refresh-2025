import { NavLink } from 'react-router-dom';

import { ResponsiveImage } from '@/components';
import { WORK_ROUTE, portfolio } from '@/config';
import { cocaColaContactlessVideo } from '@/assets/work/cocaCola';

import mixins from '../styles/mixins.module.css';

import styles from './PortfolioCocaCola.module.css';

export const PortfolioCocaCola = () => {
  const data = portfolio.find(pItem => pItem.id === 'cocaCola');
  const imgs = data?.images;

  if (!data || !imgs) return null;

  return (
    <>
      <div className={styles.detailHeader}>
        <div className={styles.detailHeaderLockup}>
          <div>
            {data.featLogo &&
              (() => {
                const FeatLogo = data.featLogo.logo;
                return (
                  <div className={styles.detailLogo}>
                    <FeatLogo
                      title={`${data.featLogo.title} Logo`}
                      color={data.featLogo.color}
                      secondary={data.featLogo.secondary}
                    />
                  </div>
                );
              })()}

            <div className={styles.detailIntro}>
              <p>{data.description}</p>

              {data.pullQuote && (
                <p className={styles.detailQuote}>{data.pullQuote}</p>
              )}
            </div>
          </div>

          <div className={styles.headerImg}>
            <ResponsiveImage img={imgs.dispensers} />
          </div>
        </div>

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

      <div className={styles.dividerImg}>
        <ResponsiveImage img={imgs.glasses} />
      </div>

      <section className={styles.videoSection}>
        <div className={styles.videoSectionInner}>
          <div className={styles.videoCopy}>
            <h2>Contactless Pouring</h2>
            <p>
              At the onset of the COVID-19 pandemic, the Freestyle team quickly
              identified the need to minimize contact with shared surfaces. In
              response, we developed an innovative mobile solution that enabled
              users to select and pour their beverages directly from their
              personal devices—completely touch-free. This adaptation not only
              prioritized user safety but also demonstrated the flexibility and
              forward-thinking nature of the Freestyle platform.
            </p>
          </div>

          <div className={styles.videoWrap}>
            <div className={styles.videoWrapInner}>
              <div
                className={styles.videoPoster}
                aria-hidden
              >
                <ResponsiveImage img={imgs.contactless} />
              </div>

              <figure>
                <video
                  controls
                  playsInline
                  preload="metadata"
                  aria-label="Coca-Cola Freestyle: Contact-Free Dispensing Overview"
                  aria-describedby="contactless-video-desc"
                  title="Coca-Cola Freestyle Mobile Pour overview"
                  poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                >
                  <source
                    src={cocaColaContactlessVideo.src.webm}
                    type="video/webm"
                  />
                  <source
                    src={cocaColaContactlessVideo.src.mp4}
                    type="video/mp4"
                  />
                  <track
                    default
                    kind="captions"
                    srcLang="en"
                    label="English CC"
                    src={cocaColaContactlessVideo.captions}
                  />
                </video>
                <figcaption
                  id="contactless-video-desc"
                  className={mixins.visuallyHidden}
                >
                  {`A narrated demonstration of Coca-Cola Freestyle's Mobile Pour technology, highlighting touchless drink dispensing using a smartphone.`}
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.videoTranscript}>
        <details
          lang="en"
          aria-labelledby="transcript-toggle transcript-title"
        >
          <summary id="transcript-toggle">Show transcript</summary>
          <div
            id="transcript-title"
            className={styles.videoTranscriptContent}
          >
            <h2 className={mixins.visuallyHidden}>Transcript</h2>
            <p>
              <strong>00:00:05</strong>{' '}
              <span>
                As the leader in fountain beverages, Coca-Cola Freestyle has
                developed the latest in contact-free dispensing.
              </span>
            </p>
            <p>
              <strong>00:00:11</strong>{' '}
              <span>
                All Coca-Cola beverage dispensers are safe to use with the
                recommended care and cleaning, but in the current climate,
                people may be seeking touchless options as they return to their
                favorite restaurants, grocery stores, and convenience stores.
              </span>
            </p>
            <p>
              <strong>00:00:25</strong>{' '}
              <span>
                Coca-Cola Freestyle is introducing Mobile Pour, a new way for
                your guests to pour their favorite drinks using their
                smartphone.
              </span>
            </p>
            <p>
              <strong>00:00:32</strong>{' '}
              <span>No app downloads or memberships required.</span>
            </p>
            <p>
              <strong>00:00:35</strong> <span>{`Let's see how it works.`}</span>
            </p>
            <p>
              <strong>00:00:38</strong>{' '}
              <span>
                First, the guest places their glass under the dispenser and
                scans the QR code using their smartphone camera.
              </span>
            </p>
            <p>
              <strong>00:00:44</strong>{' '}
              <span>
                Next, they tap the pop-up banner, opening a new browser window
                where they will see all 32 beverage brands at their fingertips.
              </span>
            </p>
            <p>
              <strong>00:00:52</strong>{' '}
              <span>{`Then they'll select their favorite
                brand, like Coca-Cola, and a flavor like Cherry Coke.`}</span>
            </p>
            <p>
              <strong>00:00:58</strong>{' '}
              <span>
                As they press and hold the pour button, their drink is filled
                within seconds.
              </span>
            </p>
            <p>
              <strong>00:01:03</strong>{' '}
              <span>{`With Coca-Cola Freestyle's advanced
                capabilities, we're staying a step ahead on contact-free
                solutions and plan to start implementing them across all
                Freestyle platforms this summer.`}</span>
            </p>
          </div>
        </details>
      </div>

      <section className={styles.imageSection}>
        <h2>Frontend Development and User Interfaces</h2>

        <div className={`${styles.imageRow} ${styles.imageRow3to1}`}>
          <div className={styles.imageWrap}>
            <ResponsiveImage img={imgs.cui} />
          </div>
          <div className={styles.imageWrap}>
            <ResponsiveImage img={imgs.ncuiMSeries} />
          </div>
        </div>

        <div className={`${styles.imageRow} ${styles.imageRowAuto70}`}>
          {/* <div className={`${styles.imageRow} ${styles.imageRow1to2}`}> */}
          {/* <div className={styles.imageWrap}>
            <ResponsiveImage img={imgs.cuiPour} />
          </div> */}
          <div className={`${styles.imageWrap} ${styles.imageNoBorder}`}>
            <ResponsiveImage img={imgs.freestyle8100} />
          </div>
        </div>
      </section>

      <section className={styles.imageSection}>
        <h2>UX and Wireframes</h2>

        <div className={`${styles.imageRow} ${styles.imageRow2to3}`}>
          <div className={styles.imageWrap}>
            <ResponsiveImage img={imgs.ncuiIngredientSummary} />
          </div>
          <div className={styles.imageWrap}>
            <ResponsiveImage img={imgs.ncuiSubsystem} />
          </div>
        </div>

        <div className={`${styles.imageRow}`}>
          <div className={styles.imageWrap}>
            <ResponsiveImage img={imgs.ncuiServiceCodesHistory} />
          </div>
          <div className={styles.imageWrap}>
            <ResponsiveImage img={imgs.ncuiServiceCodesOrder} />
          </div>
          <div className={styles.imageWrap}>
            <ResponsiveImage img={imgs.ncuiServiceCodesAction} />
          </div>
        </div>
      </section>

      <div className={`${styles.dividerImg} ${styles.dividerImgTopOnly}`}>
        <ResponsiveImage img={imgs.waveGlasses} />
      </div>
    </>
  );
};
