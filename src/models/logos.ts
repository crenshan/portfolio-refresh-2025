export type LogoSize = {
  width: number;
  height: number;
};

export type LogoItem = {
  id: string;
  label: string;
  size: LogoSize;
  SVG: React.ComponentType<
    React.SVGProps<SVGSVGElement> & { color?: string; title?: string }
  >;
};
