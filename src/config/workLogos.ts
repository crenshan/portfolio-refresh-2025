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
  OllyLogo,
  ArtPapersLogo,
  GoodsAndServicesLogo,
  NorthwesternLogo,
  SapientNitroLogo,
  UnileverLogo,
  UniversalLogo
  // MfnLogo
} from '@/components/svg/logos';
import { LogoItem } from '@/models';

export const workLogos: { [key: string]: LogoItem } = {
  amazon: {
    id: 'amazon',
    SVG: AmazonLogo,
    label: 'Amazon',
    size: {
      width: 110,
      height: 50
    }
  },
  artPapers: {
    id: 'artPapers',
    SVG: ArtPapersLogo,
    label: 'Art Papers',
    size: {
      width: 120,
      height: 28
    }
  },
  booking: {
    id: 'booking',
    SVG: BookingComLogo,
    label: 'Booking.com',
    size: {
      width: 142,
      height: 32
    }
  },
  cocaCola: {
    id: 'cocaCola',
    SVG: CocaColaLogo,
    label: 'Coca-Cola',
    size: {
      width: 110,
      height: 35
    }
  },
  ford: {
    id: 'ford',
    SVG: FordLogo,
    label: 'Ford',
    size: {
      width: 82,
      height: 32
    }
  },
  goodsAndServices: {
    id: 'goodsAndServices',
    SVG: GoodsAndServicesLogo,
    label: 'Goods & Services',
    size: {
      width: 98,
      height: 34
    }
  },
  honda: {
    id: 'honda',
    SVG: HondaLogo,
    label: 'Honda',
    size: {
      width: 160,
      height: 20
    }
  },
  jpMorgan: {
    id: 'jpMorgan',
    SVG: JPMorganLogo,
    label: 'JP Morgan',
    size: {
      width: 123,
      height: 35
    }
  },
  lexus: {
    id: 'lexus',
    SVG: LexusLogo,
    label: 'Lexus',
    size: {
      width: 166,
      height: 30
    }
  },
  // mfn: {
  //   id: 'mfn',
  //   SVG: MfnLogo,
  //   label: "My Friend's Nephew",
  //   size: {
  //     width: 30,
  //     height: 42
  //   }
  // },
  nissan: {
    id: 'nissan',
    SVG: NissanLogo,
    label: 'Nissan',
    size: {
      width: 124,
      height: 21
    }
  },
  northwestern: {
    id: 'northwestern',
    SVG: NorthwesternLogo,
    label: 'Northwestern University',
    size: {
      width: 168,
      height: 30
    }
  },
  olly: {
    id: 'olly',
    SVG: OllyLogo,
    label: 'OLLY',
    size: {
      width: 90,
      height: 32
    }
  },
  sapientNitro: {
    id: 'sapientNitro',
    SVG: SapientNitroLogo,
    label: 'SapientNitro',
    size: {
      width: 140,
      height: 32
    }
  },
  toyota: {
    id: 'toyota',
    SVG: ToyotaLogo,
    label: 'Toyota',
    size: {
      width: 158,
      height: 26
    }
  },
  unilever: {
    id: 'unilever',
    SVG: UnileverLogo,
    label: 'Unilever',
    size: {
      width: 130,
      height: 40
    }
  },
  universal: {
    id: 'universal',
    SVG: UniversalLogo,
    label: 'Universal Parks',
    size: {
      width: 98,
      height: 50
    }
  },
  ups: {
    id: 'ups',
    SVG: UpsLogo,
    label: 'UPS',
    size: {
      width: 36,
      height: 42
    }
  },
  verizon: {
    id: 'verizon',
    SVG: VerizonLogo,
    label: 'Verizon',
    size: {
      width: 112,
      height: 32
    }
  }
};
