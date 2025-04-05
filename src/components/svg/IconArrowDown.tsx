export const IconArrowDown = ({
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
      d="M20.8 11.9c-.4-.4-1.1-.4-1.5 0l-6.2 6.2V3.3c0-.6-.5-1.1-1.1-1.1s-1.1.5-1.1 1.1v14.9L4.7 12c-.4-.4-1.1-.4-1.5 0s-.4 1.1 0 1.5l8.1 8.1c.2.2.5.3.8.3s.5-.1.8-.3l8.1-8.1c.4-.4.4-1.1 0-1.5Z"
    />
  </svg>
);
