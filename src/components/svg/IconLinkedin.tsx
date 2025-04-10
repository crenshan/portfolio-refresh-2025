export const IconLinkedin = ({
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
      d="M17.9 1.1H6.1c-2.7 0-5 2.3-5 5v11.7c0 2.7 2.2 5 5 5h11.7c2.7 0 5-2.2 5-5V6.1c0-2.7-2.2-5-5-5ZM8.6 17.8H5.8V8.9h2.8v8.9ZM7.2 7.7c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6 1.6.7 1.6 1.6-.7 1.6-1.6 1.6Zm11.7 10.1h-2.8v-4.3c0-1 0-2.4-1.4-2.4S13 12.2 13 13.4v4.4h-2.8V8.9h2.6v1.2c.4-.7 1.3-1.4 2.6-1.4 2.8 0 3.3 1.8 3.3 4.2v4.9Z"
    />
  </svg>
);
