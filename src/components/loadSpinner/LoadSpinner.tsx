/* eslint-disable react/no-unknown-property */
export const LoadSpinner = ({ color }: { color?: string }) => {
  const spinnerColor = color || 'currentColor';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width="50px"
    >
      <radialGradient
        id="a8"
        cx=".66"
        fx=".66"
        cy=".3125"
        fy=".3125"
        gradientTransform="scale(1.5)"
      >
        <stop
          offset="0"
          stopColor={spinnerColor}
        />
        <stop
          offset=".3"
          stopColor={spinnerColor}
          stopOpacity=".9"
        />
        <stop
          offset=".6"
          stopColor={spinnerColor}
          stopOpacity=".6"
        />
        <stop
          offset=".8"
          stopColor={spinnerColor}
          stopOpacity=".3"
        />
        <stop
          offset="1"
          stopColor={spinnerColor}
          stopOpacity="0"
        />
      </radialGradient>
      <circle
        style={{ transformOrigin: 'center' }}
        fill="none"
        stroke="url(#a8)"
        strokeWidth="25"
        strokeLinecap="round"
        strokeDasharray="200 1000"
        strokeDashoffset="0"
        cx="100"
        cy="100"
        r="70"
      >
        <animateTransform
          type="rotate"
          attributeName="transform"
          calcMode="spline"
          dur="1"
          values="360;0"
          keyTimes="0;1"
          keySplines="0 0 1 1"
          repeatCount="indefinite"
        />
      </circle>
      <circle
        style={{ transformOrigin: 'center' }}
        fill="none"
        opacity=".1"
        stroke={spinnerColor}
        strokeWidth="25"
        strokeLinecap="round"
        cx="100"
        cy="100"
        r="70"
      />
    </svg>
  );
};
