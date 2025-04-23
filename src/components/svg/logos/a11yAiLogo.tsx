export const A11yAILogo = ({
  color = 'currentColor',
  highlight,
  solid = false,
  secondary,
  aiSolid = false,
  hidden = false
}: {
  color?: string;
  highlight?: string;
  solid?: boolean;
  secondary?: string;
  aiSolid?: boolean;
  hidden?: boolean;
}) => {
  const ariaProps = hidden ? { 'aria-hidden': true } : {};

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 130 46"
      fill={color}
      {...ariaProps}
    >
      <path d="M14 9.2c-7.7 0-14 6.3-14 14s6.3 14 14 14c2.6 0 5-.7 7.1-1.9v1.3H28V23.1c0-7.7-6.3-13.9-14-13.9zm0 21c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z" />

      <path
        style={{
          opacity: solid ? 1 : 0.8
        }}
        fill={highlight || color}
        d="M29.9 7.2h6v29.5h7V0h-13zM49 0v7.2h6v29.5h7V0z"
      />

      <path d="m88 9.3-6.2 14.1-6.1-14.1h-8.8l10.5 24.2L72 46h8.8l16-36.7z" />

      <path
        style={{
          opacity: aiSolid ? 1 : 0.8
        }}
        fill={secondary || color}
        d="M127.4 9.3h.6-12v.1l12 27.4V22.4c1.6-.1 2-1.4 2-3v-7.1c0-1.6-1-3-2.6-3zM121.6 7.6c2 0 3.6-1.6 3.6-3.6S123.6.4 121.6.4 118 2 118 4s1.6 3.6 3.6 3.6zM98.8 36.8h7.1l4.9-11.2 4.9 11.2h7.1L110.7 9.3z"
      />
    </svg>
  );
};
