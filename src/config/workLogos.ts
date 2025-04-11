import {
  AmazonLogo,
  CocaColaLogo,
  JPMorganLogo,
  BookingComLogo,
  UpsLogo,
  FordLogo,
  HondaLogo,
  ToyotaLogo,
  NissanLogo,
  VerizonLogo,
  LexusLogo,
  OllyLogo
} from '@/components/svg/logos';
import { LogoItem } from '@/models';

export const workLogos: { [key: string]: LogoItem } = {
  amazon: {
    id: 'amazon',
    SVG: AmazonLogo,
    label: 'Amazon',
    width: 100,
    height: 43
  },
  cocaCola: {
    id: 'cocaCola',
    SVG: CocaColaLogo,
    label: 'Coca-Cola',
    width: 110,
    height: 35
  },
  booking: {
    id: 'booking',
    SVG: BookingComLogo,
    label: 'Booking.com',
    width: 136,
    height: 28
  },
  ford: {
    id: 'ford',
    SVG: FordLogo,
    label: 'Ford',
    width: 82,
    height: 32
  },
  honda: {
    id: 'honda',
    SVG: HondaLogo,
    label: 'Honda',
    width: 150,
    height: 18
  },
  jpMorgan: {
    id: 'jpMorgan',
    SVG: JPMorganLogo,
    label: 'JP Morgan',
    width: 126,
    height: 33
  },
  lexus: {
    id: 'lexus',
    SVG: LexusLogo,
    label: 'Lexus',
    width: 152,
    height: 26
  },
  nissan: {
    id: 'nissan',
    SVG: NissanLogo,
    label: 'Nissan',
    width: 140,
    height: 20
  },
  olly: {
    id: 'olly',
    SVG: OllyLogo,
    label: 'OLLY',
    width: 78,
    height: 26
  },
  toyota: {
    id: 'toyota',
    SVG: ToyotaLogo,
    label: 'Toyota',
    width: 144,
    height: 24
  },
  ups: {
    id: 'ups',
    SVG: UpsLogo,
    label: 'UPS',
    width: 36,
    height: 42
  },
  verizon: {
    id: 'verizon',
    SVG: VerizonLogo,
    label: 'Verizon',
    width: 112,
    height: 32
  }
};
