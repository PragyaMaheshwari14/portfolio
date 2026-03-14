import type { SVGProps } from "react";

const Express = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256">
    <rect width="256" height="256" fill="#000" rx="20" />
    <text
      x="50%"
      y="55%"
      fill="#fff"
      fontSize="60"
      fontFamily="Arial, Helvetica, sans-serif"
      textAnchor="middle"
      dominantBaseline="middle"
    >
      ex
    </text>
  </svg>
);

export { Express };