export interface SiteVideo {
  src: { webm: string; mp4: string };
  poster?: string; // Image file
  captions?: string; // VTT file
  description?: string;
  autoplay?: boolean;
  ratio?: number;
}
