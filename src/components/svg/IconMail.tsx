export const IconMail = ({
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
      d="M7.7 12.1 0 5.9v13.2l7.7-6.9Zm1 .9-7.6 6.9H23L15.5 13l-2.9 2.4-.4.4-.4-.4-3-2.5Zm7.8-.8 7.5 6.9V5.9l-7.5 6.3Zm6.4-7.1H1.2l11 9 10.7-9Z"
    />
  </svg>
);
