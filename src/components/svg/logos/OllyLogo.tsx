export const OllyLogo = ({
  color = '#000',
  title,
  ...props
}: {
  color?: string;
  title?: string;
} & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 400 134"
    aria-hidden={title ? undefined : true}
    {...props}
  >
    <title>{title}</title>
    <path
      fill={color}
      d="M67.01.29C30.25.29.34 30.19.34 66.94s29.91 66.68 66.67 66.68 66.66-29.9 66.66-66.68S103.76.29 67.01.29Zm0 105.84c-21.72 0-39.32-17.6-39.32-39.32S45.29 27.5 67.01 27.5s39.32 17.6 39.32 39.31-17.6 39.32-39.32 39.32ZM364.33 4.65l-24.11 36.23-24.09-36.23h-36.01l44.12 63.82v60.79h32V68.47l44.1-63.82h-36.01zM258.94 4.65h-32.01v124.61h68.18v-26.77h-36.17V4.65zM178.4 4.65h-32.01v124.61h68.17v-26.77H178.4V4.65z"
    />
    <path
      fill={color}
      d="M93.41 73.45c-1.67-.72-3.73.07-4.46 1.74-3.82 8.71-12.43 14.33-21.94 14.33S48.9 83.9 45.07 75.21c-.72-1.67-2.77-2.49-4.46-1.74-1.7.74-2.48 2.75-1.74 4.45a30.74 30.74 0 0 0 56.27-.01 3.4 3.4 0 0 0-1.74-4.47Z"
    />
  </svg>
);
