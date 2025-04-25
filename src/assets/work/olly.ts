import { SiteImg, SiteVideo } from '@/models';

export const ollyPreview: SiteImg = {
  src: {
    sm: '/images/work/olly/olly.jpg',
    lg: '/images/work/olly/olly@2x.jpg'
  },
  avif: {
    sm: '/images/work/olly/olly.avif',
    lg: '/images/work/olly/olly@2x.avif'
  },
  alt: 'Preview image of the OLLY website home page.'
};

export const ollyDemo: SiteVideo = {
  src: {
    webm: '/images/work/olly/olly_demo.webm',
    mp4: '/images/work/olly/olly_demo.mp4'
  },
  description: 'A demonstration of the OLLY page on amazon.com.',
  autoplay: true
};

export const ollyPoster: SiteImg = {
  src: {
    sm: '/images/work/olly/olly_demo.jpg',
    lg: '/images/work/olly/olly_demo@2x.jpg'
  },
  avif: {
    sm: '/images/work/olly/olly_demo.avif',
    lg: '/images/work/olly/olly_demo@2x.avif'
  },
  alt: 'A preview of the OLLY demo depicting a screenshot of the OLLY page on amazon.com.'
};

export const ollyFull: SiteImg = {
  src: {
    sm: '/images/work/olly/olly_full.jpg',
    lg: '/images/work/olly/olly_full@2x.jpg'
  },
  avif: {
    sm: '/images/work/olly/olly_full.avif',
    lg: '/images/work/olly/olly_full@2x.avif'
  },
  alt: 'Screenshot of the OLLY page on amazon.com. The page contains a number of sections including a promotional video, the "Wheel of Wellness", product cards, and information about the OLLY Alexa theme.'
};
