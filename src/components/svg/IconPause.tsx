export const IconPause = ({
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
    viewBox="0 0 20 20"
    aria-hidden={title ? undefined : true}
    {...props}
  >
    <title>{title}</title>
    <path
      fill={color || 'currentColor'}
      d="M7.3 0H4.6c-.2 0-.5 0-.6.3-.2.2-.3.4-.3.6v18.2c0 .2 0 .5.3.6.2.2.4.3.6.3h2.7c.2 0 .5 0 .6-.3.2-.2.3-.4.3-.6V.9c0-.2 0-.5-.3-.6-.2-.2-.4-.3-.6-.3ZM16.1.3c-.2-.2-.4-.3-.6-.3h-2.7c-.2 0-.5 0-.6.3-.2.2-.3.4-.3.6v18.2c0 .2 0 .5.3.6s.4.3.6.3h2.7c.2 0 .5 0 .6-.3.2-.2.3-.4.3-.6V.9c0-.2 0-.5-.3-.6Z"
    />
  </svg>
);
