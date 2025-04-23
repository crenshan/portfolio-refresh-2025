import { NavLink } from 'react-router-dom';

import { resumePdf } from '@/assets';
import { IconLinkedin, IconMail, IconPDF, IconPhone } from '@/components';
import { about } from '@/content';
import { WORK_ROUTE } from '@/config';

import mixins from '../../styles/mixins.module.css';

import styles from './Resume.module.css';

export const Resume = () => (
  <>
    <header>
      <div className={`${styles.resumeDownload} ${mixins.outerContainer}`}>
        <div
          className={`${styles.resumeDownloadInner} ${mixins.innerContainer}`}
        >
          <h1>Resume</h1>

          <a
            className={`${styles.resumeDownloadLink} ${mixins.touchTarget}`}
            href={resumePdf}
            download
          >
            Download <span className={mixins.visuallyHidden}>Resume (PDF)</span>
            <span className={styles.downloadLinkIcon}>
              <IconPDF />
            </span>
          </a>
        </div>
      </div>

      <div className={`${mixins.outerContainer}`}>
        <div className={`${styles.resumeHead} ${mixins.innerContainer}`}>
          <h2 className={styles.resumeTitle}>{about.title}</h2>
          <p className={styles.resumeSubtitle}>
            {about.subtitle}
            <i className={mixins.visuallyHidden}> / </i>
            <span>{about.a11y}</span>
          </p>

          <address>
            <a
              href="tel:14043531122"
              className={`${styles.contactLink} ${mixins.touchTarget}`}
            >
              <span className={styles.contactLinkIcon}>
                <IconPhone />
              </span>
              404.353.1122
            </a>

            <a
              href="mailto:crenshan@gmail.com"
              className={styles.contactLink}
            >
              <span className={styles.contactLinkIcon}>
                <IconMail />
              </span>
              crenshan@gmail.com
            </a>

            <a
              href="https://linkedin.com/in/nathancrenshaw"
              className={styles.contactLink}
              target="_blank"
              rel="noreferrer nofollow"
            >
              <span className={styles.contactLinkIcon}>
                <IconLinkedin />
              </span>
              LinkedIn
            </a>
          </address>
        </div>
      </div>
    </header>

    <div className={`${styles.resume} ${mixins.outerContainer}`}>
      <div className={`${styles.resumeInner} ${mixins.innerContainer}`}>
        <main>
          <section className={styles.resumeSection}>
            <h2
              className={`${styles.resumeSectionHead} ${mixins.visuallyHidden}`}
            >
              About
            </h2>
            <p className={styles.resumeIntro}>
              {`I'm a frontend developer with a design background, focused on building accessible, scalable web experiences. I thrive at the intersection of design and engineering, bringing curiosity, clarity, and collaboration to everything from coding to mentoring.`}
            </p>
          </section>

          <div className={styles.resumeSeparator} />

          <div className={styles.resumeColumns}>
            <section className={styles.resumeSection}>
              <h2 className={styles.resumeSectionHead}>Core Strengths</h2>
              <ul>
                <li>Accessibility-first development (WCAG/ARIA)</li>
                <li>Bridging design & engineering</li>
                <li>Strategic technical leadership</li>
                <li>Rapid prototyping & creative problem-solving</li>
                <li>Mentorship, training, and advocacy</li>
              </ul>
            </section>

            <section className={styles.resumeSection}>
              <h2 className={styles.resumeSectionHead}>Industry Experience</h2>
              <ul>
                <li>Automotive advertising & showcase platforms</li>
                <li>E-commerce and editorial web experiences</li>
                <li>Audio streaming & live broadcasting</li>
                <li>Touchscreen vending & retail interfaces</li>
                <li>Banking & financial visualization tools</li>
              </ul>
            </section>
          </div>

          <section className={styles.resumeSection}>
            <h2 className={styles.resumeSectionHead}>Work History</h2>

            <article className={styles.resumeWork}>
              <div className={styles.resumeWorkPortfolioWrap}>
                <h3>Amazon</h3>
                <NavLink
                  to={`${WORK_ROUTE}?tag=amazon`}
                  className={`${styles.resumeWorkPortfolio} ${mixins.touchTarget}`}
                >
                  View Work
                </NavLink>
              </div>

              <h4>Brand Innovation Lab</h4>

              <p className={styles.resumeWorkRole}>
                <span>Design Technologist / Web Accessibility SME </span>
                <span className={styles.resumeWorkTime}>
                  <time dateTime="2022">2022</time> - Present
                </span>
              </p>
              <p>
                Leading accessibility initiatives and creating innovative
                advertising experiences for brands like Toyota, Honda, and Ford.
                Built Figma plugins, internal tooling, and led cross-functional
                accessibility efforts across Fire TV and web campaigns.
              </p>

              <details>
                <summary>View details</summary>

                <ul>
                  <li>
                    Served as Web Accessibility SME, guiding cross-functional
                    teams in implementing inclusive practices.
                  </li>
                  <li>
                    Developed and delivered org-wide accessibility training
                    across Brand Innovation Lab.
                  </li>
                  <li>
                    Created two Figma plugins to improve accessibility and
                    design workflows.
                  </li>
                  <li>
                    Built vehicle showcases for Amazon Fire TV using accessible,
                    performant web tech.
                  </li>
                  <li>
                    Developed landing pages with 3D assets and AR functionality
                    for major automotive brands.
                  </li>
                </ul>
              </details>

              <div className={styles.resumeWorkSeparator} />

              <h4>Amp</h4>

              <p className={styles.resumeWorkRole}>
                <span>Frontend Engineer </span>
                <span className={styles.resumeWorkTime}>
                  <time dateTime="2021">2021</time> -{' '}
                  <time dateTime="2022">2022</time>
                </span>
              </p>
              <p>
                Built iOS creator and listener experiences for Amazon’s
                live-audio app. Embedded in design team to influence UX
                direction. Led org-wide accessibility training and created a
                shared UI component library.
              </p>

              <details>
                <summary>View details</summary>
                <ul>
                  <li>
                    Built creator experience in the iOS Amp app with a focus on
                    interaction and animation.
                  </li>
                  <li>
                    Led the development of audio ad experiences for creators and
                    listeners.
                  </li>
                  <li>
                    Embedded within design team to influence product direction
                    and UX.
                  </li>
                  <li>
                    Trained engineers org-wide on accessibility, design best
                    practices, and UI consistency.
                  </li>
                  <li>
                    Built and maintained a shared UI library used across the
                    organization.
                  </li>
                </ul>
              </details>
            </article>

            <article className={styles.resumeWork}>
              <div className={styles.resumeWorkPortfolioWrap}>
                <h3>The Coca-Cola Company</h3>
                <NavLink
                  to={`${WORK_ROUTE}?tag=cocaCola`}
                  className={styles.resumeWorkPortfolio}
                >
                  View Work
                </NavLink>
              </div>

              <h4>Freestyle</h4>

              <p className={styles.resumeWorkRole}>
                <span>Senior UI Architect / UI Team Lead </span>
                <span className={styles.resumeWorkTime}>
                  <time dateTime="2018">2018</time> -{' '}
                  <time dateTime="2021">2021</time>
                </span>
              </p>
              <p>
                Directed frontend efforts for Coca-Cola Freestyle across 50,000+
                dispensers. Designed mobile-pouring solutions during COVID,
                rebuilt technician UIs with React, and led hiring, mentoring,
                and performance enablement for the Freestyle UI team.
              </p>

              <details>
                <summary>View details</summary>
                <ul>
                  <li>
                    Led UI for eight Freestyle applications across 50,000+
                    dispensers worldwide.
                  </li>
                  <li>
                    Designed and delivered “Mobile Pouring” — a contact-free
                    dispensing experience in response to COVID-19.
                  </li>
                  <li>
                    Rebuilt technician-facing interface for modern and legacy
                    hardware using ReactJS.
                  </li>
                  <li>
                    Designed consumer-facing UI for Coca-Cola’s engagement
                    platform on dispensers.
                  </li>
                  <li>
                    Managed hiring and performance enablement for the Freestyle
                    UI team.
                  </li>
                </ul>
              </details>
            </article>

            <article className={styles.resumeWork}>
              <div className={styles.resumeWorkPortfolioWrap}>
                <h3>Goods & Services, LLC</h3>

                <NavLink
                  to={`${WORK_ROUTE}?tag=goodsAndServices`}
                  className={styles.resumeWorkPortfolio}
                >
                  View Work
                </NavLink>
              </div>
              <p className={styles.resumeWorkRole}>
                <span>Director of Experience Technology </span>
                <span className={styles.resumeWorkTime}>
                  <time dateTime="2017">2017</time> -{' '}
                  <time dateTime="2018">2018</time>
                </span>
              </p>
              <p>
                Led technology for a boutique design studio. Delivered data-rich
                dashboards for JP Morgan Chase, launched an e-commerce site for
                Oliver + Rain, and helped ARTPAPERS transition from print to
                immersive digital.
              </p>

              <details>
                <summary>View details</summary>
                <ul>
                  <li>
                    Ran technology for boutique design studio delivering
                    high-impact experiences.
                  </li>
                  <li>
                    Built Angular + D3.js retirement planning dashboard for JP
                    Morgan Chase.
                  </li>
                  <li>
                    {`Launched e-commerce platform for children's clothing startup
                    Oliver + Rain.`}
                  </li>
                  <li>
                    Developed digital-first experience for ARTPAPERS magazine.
                  </li>
                </ul>
              </details>
            </article>

            <article className={styles.resumeWork}>
              <h3>Backbase</h3>
              <p className={styles.resumeWorkRole}>
                <span>Senior Frontend Consultant </span>
                <span className={styles.resumeWorkTime}>
                  <time dateTime="2016">2016</time> -{' '}
                  <time dateTime="2017">2017</time>
                </span>
              </p>
              <p>
                Created custom online banking solutions. Led UI efforts for the
                Federal Home Loan Bank of Boston, developed reusable banking
                widgets, and provided accessibility-focused mentorship and
                training.
              </p>

              <details>
                <summary>View details</summary>
                <ul>
                  <li>
                    Led UI team for Federal Home Loan Bank of Boston online
                    banking platform.
                  </li>
                  <li>
                    Built dozens of reusable widgets with accessibility in mind.
                  </li>
                  <li>
                    Trained developers and stakeholders on frontend best
                    practices.
                  </li>
                </ul>
              </details>
            </article>

            <article className={styles.resumeWork}>
              <div className={styles.resumeWorkPortfolioWrap}>
                <h3>Sapient Nitro</h3>
                <NavLink
                  to={`${WORK_ROUTE}?tag=sapientNitro`}
                  className={styles.resumeWorkPortfolio}
                >
                  View Work
                </NavLink>
              </div>
              <p className={styles.resumeWorkRole}>
                <span>Manager of Interactive Technology </span>
                <span className={styles.resumeWorkTime}>
                  <time dateTime="2012">2012</time> -{' '}
                  <time dateTime="2016">2016</time>
                </span>
              </p>
              <p>
                Oversaw globally distributed teams and delivered large-scale web
                applications. Rebuilt UPS.com with responsive UI and style
                guides, and developed an Angular marketing asset hub for
                Coca-Cola.
              </p>

              <details>
                <summary>View details</summary>
                <ul>
                  <li>
                    Managed globally distributed teams building complex web
                    apps.
                  </li>
                  <li>
                    Led redesign and responsive rebuild of UPS.com after 13
                    years of legacy systems.
                  </li>
                  <li>
                    Created marketing asset portal for Coca-Cola with Angular.
                  </li>
                </ul>
              </details>
            </article>

            <article className={styles.resumeWork}>
              <h3>The Weather Channel</h3>
              <p className={styles.resumeWorkRole}>
                <span>Senior Web Applications Developer </span>
                <span className={styles.resumeWorkTime}>
                  <time dateTime="2011">2011</time> -{' '}
                  <time dateTime="2012">2012</time>
                </span>
              </p>
              <p>
                {`Played a key role in redesigning weather.com. Prototyped the
                company's first responsive site and authored frontend coding
                standards for the development team.`}
              </p>

              <details>
                <summary>View details</summary>
                <ul>
                  <li>
                    {`Built prototype for The Weather Channel's first responsive
                    website redesign.`}
                  </li>
                  <li>
                    Authored frontend coding standards and best practices
                    documentation.
                  </li>
                </ul>
              </details>
            </article>
          </section>

          <section className={styles.resumeSection}>
            <h2 className={styles.resumeSectionHead}>Education</h2>
            <p>
              <strong>Georgia Southwestern State University</strong>
              <br />
              B.F.A. in Fine Arts · <time dateTime="2003">2003</time>
            </p>
          </section>
        </main>
      </div>
    </div>
  </>
);
