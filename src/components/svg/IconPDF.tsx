export const IconPDF = ({
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
    viewBox="0 0 20 24"
    aria-hidden={title ? undefined : true}
    {...props}
  >
    <title>{title}</title>
    <path
      fill={color || 'currentColor'}
      d="M5.1 15.4c0-.4-.3-.6-.8-.6h-.4v1.3h.3c.5 0 .8-.3.8-.7ZM8.1 14.8h-.4v2.8H8c.9 0 1.5-.5 1.5-1.5 0-.9-.5-1.4-1.4-1.4Z"
    />
    <path
      fill={color || 'currentColor'}
      d="M13.7 0H4.1C2.7 0 1.5 1.1 1.5 2.6V12h-.2c-.6 0-1 .5-1 1v6.2c0 .6.5 1 1 1h.2v1.1c0 1.4 1.1 2.6 2.6 2.6h13.2c1.4 0 2.6-1.1 2.6-2.6V6l-6.2-6ZM2.9 14.2h1.3c.6 0 1 .1 1.3.3.3.2.5.6.5 1s-.1.8-.4 1c-.3.3-.8.5-1.4.5h-.3v1.5h-1v-4.3Zm14.3 8.2H4.1c-.5 0-1-.4-1-1v-1.1h12.3c.6 0 1-.5 1-1v-6.2c0-.6-.5-1-1-1H3.1V2.6c0-.5.4-1 1-1h9.1v3.3c0 1 .8 1.8 1.8 1.8h3.3v14.8c0 .5-.4 1-1 1Zm-10.5-4v-4.3H8c.8 0 1.4.1 1.8.5.4.3.7.9.7 1.6s-.3 1.4-.7 1.8c-.5.4-1.1.6-2 .6H6.7Zm7-2.5v.8h-1.6v1.7h-1v-4.3h2.6v.8H12v1h1.6Z"
    />
  </svg>
);
