export const HondaLogo = ({
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
    viewBox="0 0 300 37"
    aria-hidden={title ? undefined : true}
    {...props}
  >
    <title>{title}</title>

    <path
      fill={color}
      d="M34.5 6.1h.1l4.6.5c2.1.2 2.3 2 2.3 3.1V15h-21V9.7c0-1.1.2-2.8 2.3-3.1l4.6-.5V1.5H0v4.6l4.6.5c2.1.2 2.3 2 2.3 3.1v17.7c0 1.1-.2 2.8-2.3 3.1L0 31v4.6h27.3V31l-4.6-.5c-2.1-.2-2.3-2-2.3-3.1v-5.3h20.9v5.3c0 1.1-.2 2.8-2.3 3.1l-4.6.5v4.6h27.3V31l-4.6-.5c-2.1-.2-2.3-2-2.3-3.1V9.7c0-1.1.2-2.8 2.3-3.1l4.6-.5V1.5H34.4v4.6ZM216.1 1.5h-33.6v4.6l4 .4c1.4.2 2.4.8 2.4 2.7v18c0 1.1-.2 2.8-2.3 3.1l-4.6.5v4.6h34c12.2 0 22.2-4.9 22.2-17s-9.8-16.9-22.1-16.9ZM213.6 29h-11.5V8.1h11.5c6.8 0 9.1 3.2 9.1 10.5s-2.3 10.5-9.1 10.5Z"
    />
    <path
      fill={color}
      d="M295.5 30.4c-2.2-.2-2.8-1.6-3.5-2.6l-15.7-24c-1.1-1.7-2-2.3-3.6-2.3H247v4.6l6.2.7c.9.1 2.1 1.3 1.1 2.8l-11.7 18.9c-.4.8-1.1 1.6-2.4 1.9l-4.6.5v4.6h21.7v-4.6l-3.7-.3c-1.6-.2-2.5-1.3-1.6-2.6l1.7-2.8h20.9l1.5 2.3c1.4 2.1-.3 2.9-1.9 3.1l-3.8.4v4.6h29.4V31l-4.5-.4Zm-38.1-11.3 6.4-10.5 6.9 10.5h-13.3ZM158.2 6.1l4.6.5c2.1.2 2.3 2 2.3 3.1v17l-18-23.8c-.8-1.1-1.5-1.4-3.5-1.4h-23.3v4.6l4.6.5c2.1.2 2.3 2 2.3 3.1v17.7c0 1.1-.2 2.8-2.3 3.1l-4.6.5v4.6h21.8V31l-4.6-.5c-2.1-.2-2.3-2-2.3-3.1v-17l18 23.7c.9 1.1 1.5 1.4 3.5 1.4h16.6V9.6c0-1.1.2-2.8 2.3-3.1l4.6-.5V1.4h-21.7l-.2 4.7ZM90.9.3C68.8.3 63.1 10 63.1 18.4s5.7 18.2 27.8 18.2 27.8-9.7 27.8-18.1S113.1.3 90.9.3Zm0 29.9c-8.6 0-12.1-3.6-12.1-11.7S82.4 6.8 90.9 6.8 103 10.4 103 18.5s-3.5 11.7-12.1 11.7Z"
    />
  </svg>
);
