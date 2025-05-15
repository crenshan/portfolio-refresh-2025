import { work } from '@/assets';
import {
  A11yAILogo,
  ArtPapersLogo,
  BookingComLogo,
  BroncoSportLogo,
  CocaColaFreestyleLogo,
  HondaLogo,
  JPMorganLogo,
  LexusLogo,
  MfnLogo,
  NorthwesternKelloggLogo,
  OliverAndRainLogo,
  OllyLogo,
  PressPlayForLALogo,
  ToyotaLogo,
  UniversalLogo,
  UpsFulLogo,
  VerizonFiosLogo
} from '@/components';
import { PortfolioItem } from '@/models';
import { DetailBasic, PortfolioA11yAi, PortfolioCocaCola } from '@/portfolio';

import { workLogos } from './workLogos';

export const portfolio: PortfolioItem[] = [
  {
    id: 'a11yAi',
    title: 'A11y AI',
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
    id: 'bookingCom',
    title: 'Booking.com - Discover "The Idea of You"',
    element: DetailBasic,
    short:
      'Interactive Fire TV experience bringing "The Idea of You" film locations to life through custom videos and animated travel collages.',
    description:
      "I developed the Fire TV component of Booking.com's 'Discover The Idea of You' interactive companion content experience, part of their innovative 'Travel the Screen' campaign. This first-of-its-kind project integrated Prime Video's original film content with travel inspiration, allowing viewers to follow Anne Hathaway's character on her transformative journey across five global destinations. My development work included implementing the technical framework for three custom IMDb behind-the-scenes videos, five exclusive film clips, and custom animated location collages that showcased Booking.com accommodations inspired by scenes from the movie. I built the Fire TV application with accessible navigation and seamless video playback while optimizing performance for the platform. The experience was primarily discovered through marquee Fire TV placements including Screen Saver and Feature Rotator, contributing to a campaign that reached 22.3M unique users and significantly improved brand perception metrics.",
    preview: work.bookingPreview,
    featLogo: { logo: BookingComLogo, color: '#003580' },
    empLogo: workLogos.amazon,
    featureVideo: {
      video: work.bookingDemo,
      poster: work.bookingDemoPoster
    },
    imageList: [
      work.bookingHome,
      work.bookingMap,
      work.bookingDiscover,
      work.bookingTrailer,
      work.bookingCommercial
    ],
    imagesUniform: true,
    links: [
      {
        label:
          'Amazon Case Study: How Booking.com engaged travelers with custom The Rings of Power and The Idea of You Prime Video campaigns',
        href: 'https://advertising.amazon.com/en-us/library/case-studies/booking-com-prime-video-campaigns/'
      },
    ],
    tags: ['amazon', 'booking'],
    year: 2024.05
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
    id: 'destinationPaak',
    title: 'Lexus GX: Destination Paak',
    element: DetailBasic,
    short:
      "Developed Fire TV execution for Lexus GX's music campaign featuring Anderson .Paak, driving exceptional engagement.",
    description:
      "As a developer for the Fire TV execution of 'Destination .Paak - The Lexus GX Remix,' I contributed to this culturally-impactful campaign celebrating the all-new 2024 Lexus GX. Working alongside Team One and Amazon Music, I helped implement the technical integration of 8x Grammy winner Anderson .Paak's exclusive remix of 'Celebrate' across Fire TV platforms. My development work supported the campaign's standout performance metrics, particularly the remarkable average dwell time of 200 seconds on Fire TV CLP—12x higher than Lexus's historical average. The Fire TV placements (Feature Rotator & Screensaver) achieved double-digit lifts across nearly all metrics in Kantar studies, while our Latitude survey showed Unaided Brand Awareness 58% higher than norms. This successful collaboration between automotive luxury and music culture later expanded to sponsorship of Anderson .Paak's Malibu Tour, generating an additional $1.3MM in revenue.",
    preview: work.destinationPaakPreview,
    featLogo: { logo: LexusLogo },
    empLogo: workLogos.amazon,
    featureVideo: {
      video: work.destinationPaakDemo,
      poster: work.destinationPaakDemoPoster
    },
    imageList: [
      work.destinationPaakMusicVideos,
      work.destinationPaakInterviews,
      work.destinationPaakGarage,
      work.destinationPaakBear
    ],
    imagesUniform: true,
    tags: ['amazon', 'lexus'],
    year: 2024.0621
  },
  {
    id: 'dreamGenerator',
    title: 'Honda Dream Generator',
    element: DetailBasic,
    short:
      "AI-powered interactive storytelling experience creating personalized animated adventures featuring Honda's all-electric Prologue SUV.",
    description:
      "I built the Fire TV campaign and Amazon.com page for the Honda Dream Generator, an innovative AI-powered storytelling platform created for the launch of Honda's first all-electric SUV, the Prologue. My responsibilities included developing all animations and interactions across both platforms to create an intuitive and engaging user experience. Working closely with 1stAveMachine's AI team, I implemented the technical integration that delivered finished personalized videos based on user selections, ensuring seamless functionality across multiple devices. The system needed to handle complex data processing to match user inputs with the appropriate animation sequences from a library of 190 story variations. This collaborative project successfully generated thousands of unique animated adventures while maintaining consistent performance and visual quality, resulting in exceptional engagement metrics and significantly increased brand awareness for the Honda Prologue.",
    preview: work.dreamGeneratorPreview,
    featLogo: {
      logo: HondaLogo,
      color: '#ca0000'
    },
    empLogo: workLogos.amazon,
    featureVideo: {
      video: work.dreamGeneratorFtv,
      poster: work.dreamGeneratorFtvPoster
    },
    imageList: [
      work.dreamGeneratorKeyArt,
      work.dreamGeneratorCharacters,
      work.dreamGeneratorLocations
    ],
    imagesUniform: true,
    links: [
      {
        label:
          'Honda Press Release: Honda is Bringing an Imaginative Dream Adventure Experience to Families Across Amazon',
        href: 'https://hondanews.com/en-US/honda-automobiles/releases/release-c47fff63a4bbfa260d98e7dcc2003d6d-honda-is-bringing-an-imaginative-dream-adventure-experience-to-families-across-amazon'
      },
      {
        label: 'Shorty Awards: Finalist in Auto and Animation',
        href: 'https://shortyawards.com/17th/amazon-honda-dream-generator'
      },
      {
        label: 'Ad Age: Behind Honda’s AI-powered personalized EV campaign',
        href: 'https://adage.com/article/marketing-news-strategy/honda-offers-ai-generated-create-your-own-adventure-videos-around-new-suv/2546561'
      },
      {
        label: 'Media Post: Honda Partners With Amazon For Dream Generator',
        href: 'https://www.mediapost.com/publications/article/394416/honda-partners-with-amazon-for-dream-generator.html'
      },
      {
        label:
          'Marketing Drive: Honda leverages AI for Dream Generator film experience with Amazon Ads',
        href: 'https://www.marketingdive.com/news/honda-ai-dream-generator-amazon-ads-prologue-suv/710497/'
      },
      {
        label:
          'Automotive World: Honda is bringing an imaginative dream adventure experience to families across Amazon',
        href: 'https://www.automotiveworld.com/news-releases/honda-is-bringing-an-imaginative-dream-adventure-experience-to-families-across-amazon/'
      },
      {
        label:
          'Design Rush: Honda and Amazon Ads Team Up to Create a Dream Generator',
        href: 'https://spotlight.designrush.com/news/honda-and-amazon-ads-team-up-to-create-dream-generator'
      }
    ],
    tags: ['honda', 'amazon'],
    year: 2024.0315
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
    id: 'olly',
    title: 'OLLY Vitamins & Supplements',
    element: DetailBasic,
    short:
      'Multi-platform wellness campaign featuring interactive experiences and animations celebrating everyday wellness victories.',
    description:
      'As the design technologist for Unilever\'s OLLY "Happy New You" Campaign, I developed all animations and interactive elements across multiple Amazon platforms. My primary technical challenge was building the "Wheel of Wellness" feature with comprehensive accessibility considerations. The project required implementing interactive components across Amazon Live, Custom Brand Store, Interactive Audio Ads, and Alexa integrations. I focused on creating technically sound, engaging experiences that maintained functionality while ensuring all users, including those with disabilities, could fully interact with the content. This large-scale campaign ($4M) demanded careful attention to performance optimization and cross-platform compatibility while working collaboratively with a multidisciplinary team.',
    preview: work.ollyPreview,
    featLogo: {
      logo: OllyLogo,
      color: '#af1685'
    },
    empLogo: workLogos.amazon,
    featureVideo: {
      video: work.ollyDemo,
      poster: work.ollyPoster
    },
    imageList: [work.ollyFull],
    tags: ['amazon', 'unilever'],
    year: 2024.1224
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
      video: work.pressPlayForLADemo,
      poster: work.pressPlayForLAPoster
    },
    imageList: [work.pressPlayForLAFull],
    tags: ['amazon'],
    year: 2025.0213
  },
  {
    id: 'toyota4Runner',
    title: '2025 Toyota 4Runner',
    element: DetailBasic,
    short:
      "Interactive Fire TV experience showcasing the 2025 Toyota 4Runner's capabilities with real-time colorizer and Stagecoach music festival integration.",
    description:
      "I developed Toyota's first Fire TV Custom Landing Page for the 2025 4Runner, creating an interactive experience that strengthened the vehicle's position in the adventure segment. My development work included building a 360-degree interactive vehicle colorizer allowing real-time customization, implementing a responsive video gallery featuring brand content, and creating the technical framework for the Toyota Music Den integration which included deeplinks to the Stagecoach Amazon Music Live livestream—a first for Fire TV. The experience featured interactive elements highlighting the vehicle's adventure capabilities while seamlessly integrating with Toyota's Stagecoach festival sponsorship. This $1.5 million campaign required optimizing performance for Fire TV devices while ensuring smooth navigation and interaction with the vehicle showcase, lifestyle imagery galleries, and direct links to Toyota.com for deeper engagement.",
    preview: work.toyota4runnerPreview,
    featLogo: {
      logo: ToyotaLogo,
      color: '#eb0a1e'
    },
    empLogo: workLogos.amazon,
    featureVideo: {
      video: work.toyota4runnerDemo,
      poster: work.toyota4runnerDemoPoster
    },
    imageList: [
      work.toyota4runnerHome,
      work.toyota4runnerGallery,
      work.toyota4runnerColor,
      work.toyota4runnerVideo,
      work.toyota4runnerMusicDen,
      work.toyota4runnerMore
    ],
    imagesUniform: true,
    tags: ['toyota', 'amazon'],
    year: 2025.0416
  },
  {
    id: 'universalEpicUniverse',
    title: 'Universal Parks: Epic Universe',
    element: DetailBasic,
    short:
      "Interactive Fire TV experience showcasing Universal's Epic Universe park through captivating videos and an explorable digital map.",
    description:
      "I developed an immersive Fire TV experience announcing and celebrating the May 2025 opening of Universal's Epic Universe theme park. The interactive application featured introduction videos for all five distinctively themed areas: Celestial Park, The Wizarding World of Harry Potter - Ministry of Magic, SUPER NINTENDO WORLD, How to Train Your Dragon - Isle of Berk, and Dark Universe. Central to the experience was an interactive map I built allowing users to explore each section of the park, learn about attractions, and view key features. The project required implementing smooth video integration, intuitive navigation controls optimized for Fire TV remotes, and engaging transitions between different park areas. This digital experience served as a crucial component of Universal's marketing strategy to build anticipation for their newest theme park while providing potential visitors with an accessible preview of what to expect.",
    preview: work.universalEpicUniversePreview,
    featLogo: {
      logo: UniversalLogo,
      color: '#01366a'
    },
    empLogo: workLogos.amazon,
    featureVideo: {
      video: work.universalEpicUniverseDemo,
      poster: work.universalEpicUniverseDemoPoster
    },
    imageList: [
      work.universalEpicUniverseExplore,
      work.universalEpicUniverseMap
    ],
    tags: ['universal', 'amazon'],
    year: 2025.05
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
