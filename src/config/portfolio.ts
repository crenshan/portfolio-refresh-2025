import { work } from '@/assets';
import { PortfolioItem } from '@/models';
import {
  PortfolioArtPapers,
  PortfolioCocaCola,
  PortfolioFiOS,
  PortfolioJPMorgan,
  PortfolioKellogg,
  PortfolioMFN,
  PortfolioOliverAndRain,
  PortfolioUps
} from '@/portfolio';

export const portfolio: PortfolioItem[] = [
  {
    id: 'artPapers',
    title: 'Art Papers',
    element: PortfolioArtPapers,
    description:
      'Lorem ipsum dolor sit amet, vel volutpat incorrupte comprehensam in, recteque reprimique an eum.',
    preview: work.artPapersPreview,
    imageList: [work.artPapersHome, work.artPapersPost],
    tags: ['artPapers', 'goodsAndServices'],
    year: 2017
  },
  {
    id: 'cocaCola',
    title: 'Coca-Cola Freestyle',
    element: PortfolioCocaCola,
    description:
      'Lorem ipsum dolor sit amet, vel volutpat incorrupte comprehensam in, recteque reprimique an eum.',
    preview: work.cocaColaPreview,
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
      shakenWhiskey: work.cocaColaShakenWhiskey
    },
    tags: ['cocaCola'],
    year: 2021
  },
  {
    id: 'fios',
    title: 'Verizon FiOS',
    element: PortfolioFiOS,
    description:
      'Lorem ipsum dolor sit amet, vel volutpat incorrupte comprehensam in, recteque reprimique an eum.',
    preview: work.fiosPreview,
    imageList: [
      work.fiosHouse,
      work.fiosLetsSee,
      work.fiosPark,
      work.fiosLivingRoom,
      work.fiosSelection
    ],
    tags: ['verizon', 'sapientNitro'],
    year: 2012
  },
  {
    id: 'jpMorgan',
    title: 'JP Morgan "SmartSpending"',
    element: PortfolioJPMorgan,
    description:
      'Lorem ipsum dolor sit amet, vel volutpat incorrupte comprehensam in, recteque reprimique an eum.',
    preview: work.jpMorganPreview,
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
    element: PortfolioKellogg,
    description:
      'Lorem ipsum dolor sit amet, vel volutpat incorrupte comprehensam in, recteque reprimique an eum.',
    preview: work.kelloggPreview,
    imageList: [work.kelloggHome, work.kelloggMba],
    tags: ['northwestern', 'sapientNitro'],
    year: 2013
  },
  {
    id: 'mfn',
    title: "My Friend's Nephew",
    element: PortfolioMFN,
    description:
      'Lorem ipsum dolor sit amet, vel volutpat incorrupte comprehensam in, recteque reprimique an eum.',
    preview: work.mfnPreview,
    imageList: [work.mfnHome, work.mfnWork, work.mfnDetail],
    tags: [],
    year: 2015
  },
  {
    id: 'oliverAndRain',
    title: 'Oliver & Rain',
    element: PortfolioOliverAndRain,
    description:
      'Lorem ipsum dolor sit amet, vel volutpat incorrupte comprehensam in, recteque reprimique an eum.',
    preview: work.oliverAndRainPreview,
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
    title: 'UPS Redesign',
    element: PortfolioUps,
    description:
      'Lorem ipsum dolor sit amet, vel volutpat incorrupte comprehensam in, recteque reprimique an eum.',
    preview: work.upsPreview,
    imageList: [work.upsHome, work.upsShipping],
    tags: ['ups', 'sapientNitro'],
    year: 2015
  }
];
