import {
  AmazonLogo,
  ArtPapersLogo,
  BookingComLogo,
  CocaColaLogo,
  FordLogo,
  GoodsAndServicesLogo,
  HondaLogo,
  JPMorganLogo,
  LexusLogo,
  NissanLogo,
  NorthwesternLogo,
  OllyLogo,
  SapientNitroLogo,
  ToyotaLogo,
  UnileverLogo,
  UpsLogo,
  VerizonLogo
} from '@/components';
import { PortfolioLogo } from '@/models';

export const portfolioLogos: { [key: string]: PortfolioLogo } = {
  amazon: {
    SVG: AmazonLogo,
    label: 'Amazon'
  },
  artPapers: {
    SVG: ArtPapersLogo,
    label: 'ArtPapers'
  },
  bookingCom: {
    SVG: BookingComLogo,
    label: 'Booking.com'
  },
  cocaCola: {
    SVG: CocaColaLogo,
    label: 'Coca-Cola'
  },
  ford: {
    SVG: FordLogo,
    label: 'Ford'
  },
  goodsAndServices: {
    SVG: GoodsAndServicesLogo,
    label: 'Goods & Services'
  },
  honda: {
    SVG: HondaLogo,
    label: 'Honda'
  },
  jpMorgan: {
    SVG: JPMorganLogo,
    label: 'JP Morgan'
  },
  lexus: {
    SVG: LexusLogo,
    label: 'Lexus'
  },
  nissan: {
    SVG: NissanLogo,
    label: 'Nissan'
  },
  northwestern: {
    SVG: NorthwesternLogo,
    label: 'Northwestern University'
  },
  olly: { SVG: OllyLogo, label: 'OLLY' },
  sapientNitro: {
    SVG: SapientNitroLogo,
    label: 'Sapient Nitro'
  },
  toyota: {
    SVG: ToyotaLogo,
    label: 'Toyota'
  },
  unilever: { SVG: UnileverLogo, label: 'Unilever' },
  ups: { SVG: UpsLogo, label: 'UPS' },
  verizon: {
    SVG: VerizonLogo,
    label: 'Verizon'
  }
};
