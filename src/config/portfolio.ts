import { work } from '@/assets';
import {
  ArtPapersLogo,
  CocaColaFreestyleLogo,
  JPMorganLogo,
  MfnLogo,
  NorthwesternKelloggLogo,
  OliverAndRainLogo,
  UpsFulLogo,
  VerizonFiosLogo
} from '@/components';
import { PortfolioItem } from '@/models';
import { DetailBasic, PortfolioCocaCola } from '@/portfolio';

import { workLogos } from './workLogos';

export const portfolio: PortfolioItem[] = [
  {
    id: 'artPapers',
    title: 'Art Papers',
    featTitle: 'Art Papers Magazine',
    element: DetailBasic,
    short:
      'A visually rich digital version of a print publication, built with full-stack precision and design focus.',
    description:
      'I led the full-stack development for an online art magazine, translating the publication’s visually rich and editorially curated print aesthetic into a responsive, performant digital experience. My goal was to maintain the same level of design integrity across platforms while ensuring a seamless and intuitive user experience.',
    pullQuote:
      'Atlanta-based and globally-engaged, Art Papers serves the creative community and the culturally curious by expanding the dialogue around contemporary art and culture, exploring the ways they affect and reflect human experience. We do this in print, online, and through public programming.',
    preview: work.artPapersPreview,
    featLogo: { logo: ArtPapersLogo },
    empLogo: workLogos.goodsAndServices,
    imageList: [work.artPapersHome, work.artPapersPost],
    tags: ['artPapers', 'goodsAndServices'],
    year: 2017
  },
  {
    id: 'cocaCola',
    title: 'Coca-Cola Freestyle',
    element: PortfolioCocaCola,
    short:
      'Front-end architecture for Coca-Cola Freestyle dispensers with interactive access to 100+ drink options.',
    description:
      'As part of the Coca-Cola Freestyle team, I was responsible for architecting and leading the front-end development of both consumer- and non-consumer-facing interfaces across the Freestyle line of beverage dispensers. These touchscreen systems offer users access to 100+ drink combinations in an engaging, intuitive format. My work focused on creating a scalable, modular codebase that supported responsive interaction, smooth performance, and consistent branding across multiple hardware versions and deployment environments.',
    preview: work.cocaColaPreview,
    featLogo: {
      logo: CocaColaFreestyleLogo,
      color: '#fe001a'
    },
    empLogo: workLogos.cocaCola,
    images: {
      cui: work.cocaColaFreestyleCui,
      cuiPour: work.cocaColaFreestyleCuiPour,
      contactless: work.cocaColaContactless,
      dispensers: work.cocaColaFreestyleDispensers,
      glasses: work.cocaColaGlasses,
      freestyle: work.cocaColaFreestyle,
      freestyle8100: work.cocaColaFreestyle8100,
      ncuiIngredientSummary: work.cocaColaNcuiIngredientSummary,
      ncuiMSeries: work.cocaColaNcuiMSeries,
      ncuiServiceCodesAction: work.cocaColaNcuiServiceCodesAction,
      ncuiServiceCodesHistory: work.cocaColaNcuiServiceCodesHistory,
      ncuiServiceCodesOrder: work.cocaColaNcuiServiceCodesOrder,
      ncuiSubsystem: work.cocaColaNcuiSubsystem,
      shakenTequila: work.cocaColaShakenTequila,
      shakenVodka: work.cocaColaShakenVodka,
      shakenWhiskey: work.cocaColaShakenWhiskey,
      wave: work.cocaColaWave,
      waveGlasses: work.cocaColaWaveGlasses
    },
    tags: ['cocaCola'],
    year: 2021
  },
  {
    id: 'fios',
    title: 'Verizon FiOS',
    featTitle: 'Verizon FiOS Quantum TV',
    element: DetailBasic,
    short:
      'An interactive product recommender for Verizon FiOS Quantum TV, helping users find the best setup.',
    description:
      'I led the front-end development of the Verizon FiOS Quantum TV product recommendation application, an interactive web-based experience designed to help customers select the right service tier based on their lifestyle and media usage. The application guided users through a series of visually engaging, scenario-based prompts—such as streaming content across multiple rooms, watching live TV on tablets in public spaces, and seamlessly pausing and resuming shows in different rooms of the house. Each step of the journey was crafted to reflect real-world use cases, making technical features feel relatable and intuitive. The final screen presented tailored recommendations between Enhanced and Premium service tiers, based on the user’s input. The experience combined playful visual storytelling with clear, actionable outcomes.',
    preview: work.fiosPreview,
    featLogo: {
      logo: VerizonFiosLogo,
      color: '#ed1c24',
      secondary: '#000'
    },
    empLogo: workLogos.sapientNitro,
    imageList: [
      work.fiosHouse,
      work.fiosLetsSee,
      work.fiosPark,
      work.fiosLivingRoom,
      work.fiosSelection
    ],
    imagesUniform: true,
    tags: ['verizon', 'sapientNitro'],
    year: 2012
  },
  {
    id: 'jpMorgan',
    title: 'JP Morgan',
    featTitle: 'JP Morgan Smart Spending',
    element: DetailBasic,
    short:
      'A financial planning prototype with custom data visualizations, built using React and D3.js.',
    description:
      'I developed a prototype of the JP Morgan SmartSpending app using React and D3.js, with a focus on custom data visualization and interactive vector graphics. The tool was designed to help financial agents guide clients through various retirement planning scenarios in a clear, engaging, and highly interactive way. My role involved building out the core front-end architecture and implementing dynamic charts that adapted in real time to client inputs and financial variables.',
    preview: work.jpMorganPreview,
    featLogo: { logo: JPMorganLogo },
    empLogo: workLogos.goodsAndServices,
    imageList: [
      work.jpMorganFunding,
      work.jpMorganReview,
      work.jpMorganWhatDoYouWant
    ],
    tags: ['jpMorgan', 'goodsAndServices'],
    year: 2017
  },
  {
    id: 'kellogg',
    title: 'Kellogg School of Management',
    element: DetailBasic,
    short:
      'A full front-end rebuild for a content-rich academic site, focused on scalability and maintainability.',
    description:
      'I served as lead front-end developer for the redesign of Northwestern University’s Kellogg School of Management website. In addition to building the front-end architecture from the ground up, I was responsible for establishing scalable, modular code standards and ensuring seamless integration with the back-end CMS. The project emphasized performance, accessibility, and long-term maintainability to support the needs of a large, content-rich academic institution.',
    pullQuote:
      'Kellogg is a global business school with a vibrant community of faculty, staff, students and alumni who shape the practice of business and organizations around the world. Kellogg brings a blend of theory and practice to its rigorous academic experience, creating a dynamic research and learning environment.',
    preview: work.kelloggPreview,
    featLogo: { logo: NorthwesternKelloggLogo, color: '#4e2a84' },
    empLogo: workLogos.sapientNitro,
    imageList: [work.kelloggHome, work.kelloggMba],
    tags: ['northwestern', 'sapientNitro'],
    year: 2013
  },
  {
    id: 'mfn',
    title: "My Friend's Nephew",
    element: DetailBasic,
    short:
      'An AngularJS-powered site designed to reflect the agency’s playful yet polished brand identity.',
    description:
      'I developed the website for the boutique creative agency My Friend’s Nephew, using AngularJS to build a dynamic, responsive front-end experience. The goal was to reflect the agency’s playful yet polished aesthetic while ensuring smooth performance and maintainability. My role included implementing custom animations, modular components, and a structure that supported easy content updates.',
    pullQuote:
      'My Friend’s Nephew is an Atlanta-based advertising agency that specializes in helping regional growth-oriented brands and nonprofits unlock their true potential. Because even if you’re not McDonald’s, every brand has a secret sauce. We’ll partner with you to fine-tune its ingredients and turn them into something that tastes delicious and connects with consumers on an emotional level. And while we have backgrounds and experience working on big, national brands, we get our kicks helping brands grow, no matter what size.',
    preview: work.mfnPreview,
    featLogo: { logo: MfnLogo, color: '#000' },
    imageList: [work.mfnHome, work.mfnWork, work.mfnDetail],
    tags: [],
    year: 2015
  },
  {
    id: 'oliverAndRain',
    title: 'Oliver & Rain',
    element: DetailBasic,
    short:
      'A bespoke e-commerce site for a sustainable baby clothing brand, balancing aesthetics and performance.',
    description:
      'Oliver & Rain is a sustainability-focused baby clothing brand, and I was responsible for the full-stack development of their highly customized e-commerce platform. My work included building a flexible front-end that reflected the brand’s clean, nature-inspired aesthetic, as well as integrating a bespoke back-end solution to support product management, content updates, and seamless checkout. The goal was to deliver a shopping experience that felt as intentional and thoughtful as the brand itself.',
    pullQuote:
      'At Oliver & Rain, our mission is to leave this world a better place for our children; and we believe that starts with sustainable practices that are not only baby-friendly but earth-friendly too. Which is why, we choose to partner with one of India’s most eco-friendly garment manufacturers—Sree Santhosh Garments (SSG).',
    preview: work.oliverAndRainPreview,
    featLogo: {
      logo: OliverAndRainLogo,
      color: '#09437A'
    },
    empLogo: workLogos.goodsAndServices,
    imageList: [
      work.oliverAndRainStory,
      work.oliverAndRainCategories,
      work.oliverAndRainEssentials
    ],
    tags: ['goodsAndServices'],
    year: 2017
  },
  {
    id: 'ups',
    title: 'UPS',
    featTitle: 'UPS Redesign',
    element: DetailBasic,
    short:
      'A large-scale redesign with scalable front-end architecture, accessibility, and global readiness.',
    description:
      'While serving as Manager of Interactive Technology at SapientNitro, I led the front-end development efforts for the full redesign of UPS.com. My responsibilities included architecting the front-end framework, guiding key technical decisions, and leading the migration of critical site tools to AngularJS. A major focus of the project was ensuring accessibility compliance across all user interfaces, as well as building a scalable infrastructure to support internationalization and localization for global markets. I worked closely with design, UX, and back-end teams to deliver a modern, performant, and inclusive user experience.',
    preview: work.upsPreview,
    featLogo: {
      logo: UpsFulLogo,
      color: '#ffb500',
      secondary: '#351c15'
    },
    empLogo: workLogos.sapientNitro,
    imageList: [work.upsHome, work.upsShipping],
    tags: ['ups', 'sapientNitro'],
    year: 2015
  }
];
