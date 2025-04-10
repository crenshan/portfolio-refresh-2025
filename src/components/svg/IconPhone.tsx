export const IconPhone = ({
  color,
  title,
  ...props
}: {
  color?: string;
  title?: string;
} & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 24 24"
    aria-hidden={title ? undefined : true}
    {...props}
  >
    <title>{title}</title>
    <path
      fill={color || 'currentColor'}
      d="M5 14.5c2.8 3.5 6.9 7.2 11.5 8.2 2.3.5 4.1.2 5.8-1.5.7-.7 1-1.6.4-2.4l-3.1-3.1c-.7-.7-1.5-1.1-2.5-.4-.6.5-1.2 1.3-1.8 1.7-1.7-.7-3.4-2.2-4.7-3.5-.7-.7-2.2-2.9-2.5-3.8.8-1.2 2.4-1.7 2.1-3.2-.1-.6-3.6-4.1-4.5-4.5-.9 0-1.2 0-1.6.5-3.7 3.6-1.8 8.5 1.1 12"
    />
  </svg>
);
