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

import { PortfolioLogos } from './portfolioLogos';

export const portfolio: PortfolioItem[] = [
  {
    id: 'artPapers',
    title: 'ArtPapers',
    element: PortfolioArtPapers,
    description:
      'As Manager of Interactive Technology for SapientNitro, I lead the frontend development of the redesign of UPS.com. In addition to serving as the lead developer, I designed the frontend architecture and oversaw the site tools update to AngularJS.',
    preview: work.artPapersPreview,
    imageList: [work.artPapersHome, work.artPapersPost],
    logos: [PortfolioLogos.artPapers, PortfolioLogos.goodsAndServices]
  },
  {
    id: 'cocaCola',
    title: 'CocaCola',
    element: PortfolioCocaCola,
    description:
      'As Manager of Interactive Technology for SapientNitro, I lead the frontend development of the redesign of UPS.com. In addition to serving as the lead developer, I designed the frontend architecture and oversaw the site tools update to AngularJS.',
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
    logos: [PortfolioLogos.cocaCola]
  },
  {
    id: 'fios',
    title: 'Verizon FiOS',
    element: PortfolioFiOS,
    description:
      'As Manager of Interactive Technology for SapientNitro, I lead the frontend development of the redesign of UPS.com. In addition to serving as the lead developer, I designed the frontend architecture and oversaw the site tools update to AngularJS.',
    preview: work.fiosPreview,
    imageList: [
      work.fiosHouse,
      work.fiosLetsSee,
      work.fiosPark,
      work.fiosLivingRoom,
      work.fiosSelection
    ],
    logos: [PortfolioLogos.verizon, PortfolioLogos.sapientNitro]
  },
  {
    id: 'jpMorgan',
    title: 'JP Morgan "SmartSpending"',
    element: PortfolioJPMorgan,
    description:
      'As Manager of Interactive Technology for SapientNitro, I lead the frontend development of the redesign of UPS.com. In addition to serving as the lead developer, I designed the frontend architecture and oversaw the site tools update to AngularJS.',
    preview: work.jpMorganPreview,
    imageList: [
      work.jpMorganFunding,
      work.jpMorganReview,
      work.jpMorganWhatDoYouWant
    ],
    logos: [PortfolioLogos.jpMorgan, PortfolioLogos.goodsAndServices]
  },
  {
    id: 'kellogg',
    title: 'Kellogg School of Management',
    element: PortfolioKellogg,
    description:
      'As Manager of Interactive Technology for SapientNitro, I lead the frontend development of the redesign of UPS.com. In addition to serving as the lead developer, I designed the frontend architecture and oversaw the site tools update to AngularJS.',
    preview: work.kelloggPreview,
    imageList: [work.kelloggHome, work.kelloggMba],
    logos: [PortfolioLogos.northwestern, PortfolioLogos.sapientNitro]
  },
  {
    id: 'mfn',
    title: "My Friend's Nephew",
    element: PortfolioMFN,
    description:
      'As Manager of Interactive Technology for SapientNitro, I lead the frontend development of the redesign of UPS.com. In addition to serving as the lead developer, I designed the frontend architecture and oversaw the site tools update to AngularJS.',
    preview: work.mfnPreview,
    imageList: [work.mfnHome, work.mfnWork, work.mfnDetail],
    logos: []
  },
  {
    id: 'oliverAndRain',
    title: 'Oliver & Rain',
    element: PortfolioOliverAndRain,
    description:
      'As Manager of Interactive Technology for SapientNitro, I lead the frontend development of the redesign of UPS.com. In addition to serving as the lead developer, I designed the frontend architecture and oversaw the site tools update to AngularJS.',
    preview: work.oliverAndRainPreview,
    imageList: [
      work.oliverAndRainStory,
      work.oliverAndRainCategories,
      work.oliverAndRainEssentials
    ],
    logos: [PortfolioLogos.ups, PortfolioLogos.sapientNitro]
  },
  {
    id: 'ups',
    title: 'UPS Redesign',
    element: PortfolioUps,
    description:
      'As Manager of Interactive Technology for SapientNitro, I lead the frontend development of the redesign of UPS.com. In addition to serving as the lead developer, I designed the frontend architecture and oversaw the site tools update to AngularJS.',
    preview: work.upsPreview,
    imageList: [work.upsHome, work.upsShipping],
    logos: [PortfolioLogos.ups, PortfolioLogos.sapientNitro]
  }
];
