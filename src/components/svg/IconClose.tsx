export const IconClose = ({
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
      d="m13.4 12 9.5 9.5c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0L12 13.4l-9.5 9.5c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l9.5-9.5-9.5-9.5c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l9.5 9.5 9.5-9.5c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L13.4 12Z"
    />
  </svg>
);
