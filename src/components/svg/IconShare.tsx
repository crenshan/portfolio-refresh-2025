export const IconShare = ({
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
      d="M18 15.8c-.8 0-1.6.4-2.2.9l-7-3.9c0-.2.1-.5.1-.8s0-.5-.1-.8l7-3.9c.5.6 1.3.9 2.2.9 1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 0 .5.1.8l-7 3.9C7.6 9.3 6.8 9 5.9 9c-1.7 0-3 1.3-3 3s1.3 3 3 3 1.6-.4 2.2-.9l7 3.9c0 .2-.1.5-.1.8 0 1.7 1.3 3 3 3s3-1.3 3-3-1.3-3-3-3Zm0-12c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5ZM6 13.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5Zm12 6.7c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5Z"
    />
  </svg>
);
