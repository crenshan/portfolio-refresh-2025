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
  UpsLogo,
  VerizonLogo
} from '@/components';
import { PortfolioLogo } from '@/models';

export const portfolioLogos: { [key: string]: PortfolioLogo } = {
  amazon: {
    href: 'https://example.com/1',
    SVG: AmazonLogo,
    label: 'Amazon'
  },
  artPapers: {
    href: 'https://example.com/1',
    SVG: ArtPapersLogo,
    label: 'ArtPapers'
  },
  bookingCom: {
    href: 'https://example.com/1',
    SVG: BookingComLogo,
    label: 'Booking.com'
  },
  cocaCola: {
    href: 'https://example.com/1',
    SVG: CocaColaLogo,
    label: 'Coca-Cola'
  },
  ford: {
    href: 'https://example.com/1',
    SVG: FordLogo,
    label: 'Ford'
  },
  goodsAndServices: {
    href: 'https://example.com/1',
    SVG: GoodsAndServicesLogo,
    label: 'Goods & Services'
  },
  honda: {
    href: 'https://example.com/1',
    SVG: HondaLogo,
    label: 'Honda'
  },
  jpMorgan: {
    href: 'https://example.com/1',
    SVG: JPMorganLogo,
    label: 'JP Morgan'
  },
  lexus: {
    href: 'https://example.com/1',
    SVG: LexusLogo,
    label: 'Lexus'
  },
  nissan: {
    href: 'https://example.com/1',
    SVG: NissanLogo,
    label: 'Nissan'
  },
  northwestern: {
    href: 'https://example.com/1',
    SVG: NorthwesternLogo,
    label: 'Northwestern University'
  },
  olly: { href: 'https://example.com/1', SVG: OllyLogo, label: 'OLLY' },
  sapientNitro: {
    href: 'https://example.com/1',
    SVG: SapientNitroLogo,
    label: 'Sapient Nitro'
  },
  toyota: {
    href: 'https://example.com/1',
    SVG: ToyotaLogo,
    label: 'Toyota'
  },
  ups: { href: 'https://example.com/1', SVG: UpsLogo, label: 'UPS' },
  verizon: {
    href: 'https://example.com/1',
    SVG: VerizonLogo,
    label: 'Verizon'
  }
};
