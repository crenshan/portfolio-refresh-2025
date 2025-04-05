export const IconChevronLeft = ({
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
      d="M12.8,3.4c.3,0,.5,0,.7.3.4.4.4,1,0,1.4l-4.9,4.9,4.9,4.9c.4.4.4,1,0,1.4s-1,.4-1.4,0l-5.6-5.6c-.4-.4-.4-1,0-1.4l5.6-5.6c.2-.2.5-.3.7-.3Z"
    />
  </svg>
);
