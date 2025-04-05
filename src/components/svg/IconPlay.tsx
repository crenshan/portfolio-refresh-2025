export const IconPlay = ({
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
      d="M1.8,2.6v14.9c0,1.4,1.6,2.3,2.8,1.7l13.6-7.4c1.4-.8,1.4-2.6,0-3.4L4.6.9c-1.2-.6-2.8.3-2.8,1.7Z"
    />
  </svg>
);
