import { work } from '@/assets';
import {
  A11yAILogo,
  ArtPapersLogo,
  BroncoSportLogo,
  CocaColaFreestyleLogo,
  JPMorganLogo,
  MfnLogo,
  NorthwesternKelloggLogo,
  OliverAndRainLogo,
  PressPlayForLALogo,
  UpsFulLogo,
  VerizonFiosLogo
} from '@/components';
import { PortfolioItem } from '@/models';
import { DetailBasic, PortfolioA11yAi, PortfolioCocaCola } from '@/portfolio';
import {
  pressPlayForLADemo,
  pressPlayForLAPoster
} from '@/assets/work/pressPlayForLA';

import { workLogos } from './workLogos';

export const portfolio: PortfolioItem[] = [
  {
    id: 'a11yAi',
    title: 'A11y AI',
    featTitle: 'A11y AI Accessibility Tools',
    element: PortfolioA11yAi,
    short:
      'AI-powered accessibility tools streamlining alt text generation for images, making digital content more inclusive for all users.',
    description:
      "I created and developed the core components of the A11y AI accessibility suite, specifically the web application and Figma plugin for alt text generation. These innovative tools leverage Amazon Bedrock and Anthropic's Claude models to automatically create optimized alternative text descriptions for images, ensuring digital content is accessible to users who rely on screen readers. The Figma plugin integration enables designers to incorporate accessibility directly into their workflow, embedding inclusive practices from the beginning of the design process. My contribution helps teams save significant time while ensuring compliance with accessibility standards, transforming a complex requirement into a streamlined, efficient workflow that promotes more inclusive digital experiences across Amazon Brand Innovation Lab's products and campaigns.",
    preview: work.a11yAiPreview,
    featLogo: { logo: A11yAILogo, color: '#9d57f4', secondary: '#0265dc' },
    empLogo: workLogos.amazon,
    images: {
      figmaAltText: work.a11yAiFigmaAltText,
      figmaUpdate: work.a11yAiFigmaUpdate,
      webAltText: work.a11yAiWebAltText,
      webUpdate: work.a11yAiWebUpdate
    },
    tags: ['amazon'],
    year: 2024.0912
  },
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
    id: 'broncoSport',
    title: 'Bronco Sport',
    featTitle: '2025 Ford Bronco Sport',
    element: DetailBasic,
    short:
      'Interactive Fire TV experience bringing the 2025 Ford Bronco Sport’s dual personality to life through customization and immersive content.',
    description:
      "As the sole developer for the 2025 Ford Bronco Sport Custom Landing Page on Fire TV, I conceptualized and implemented all animations and interactions that brought Ford's \"get you back out there\" positioning to life. The experience features an interactive colorizer allowing real-time vehicle customization, an innovative G.O.A.T. Mode selector that integrates product screens directly with Fire TV, and a dynamic gallery showcasing the vehicle's versatility across different terrains. Working closely with the creative team, I developed a feature rotator with multiple lifestyle images that highlights the Bronco Sport's dual identity as both daily driver and adventure companion. This digital-first approach successfully connected Ford with younger, diverse audiences seeking outdoor experiences through an immersive, interactive platform.",
    preview: work.broncoSportPreview,
    featLogo: { logo: BroncoSportLogo },
    empLogo: workLogos.amazon,
    featureVideo: {
      video: work.broncoSportDemo,
      poster: work.broncoSportDemoPoster
    },
    imageList: [
      work.broncoSportHome,
      work.broncoSportFeatures,
      work.broncoSportGoatModes
    ],
    imagesUniform: true,
    tags: ['amazon', 'ford'],
    year: 2025.0317
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
    id: 'pressPlayForLA',
    title: 'Press Play For L.A.',
    element: DetailBasic,
    short:
      'Turning streams into support: helping L.A. wildfire victims through music and video content.',
    description:
      'As the front-end developer working closely with the design team, I helped create "Press Play for L.A.," a digital initiative that transforms passive streaming into active support for wildfire victims. The platform enables users to generate donations for the American Red Cross simply by streaming "Listen to L.A." playlists on Amazon Music or watching select Prime Video content. For each hour streamed, Amazon donates $1 (up to $100,000) to support relief efforts. The project features a custom landing page with accessibility considerations, cross-platform integration across Amazon FTV, Amazon Music, STV, DSP, and interactive audio ads, all developed as a volunteer effort to benefit the victims of the 2025 L.A. wildfires.',
    preview: work.pressPlayForLAPreview,
    featLogo: {
      logo: PressPlayForLALogo
    },
    empLogo: workLogos.amazon,
    featureVideo: {
      video: pressPlayForLADemo,
      poster: pressPlayForLAPoster
    },
    imageList: [work.pressPlayForLAFull],
    tags: ['amazon'],
    year: 2024.1224
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
