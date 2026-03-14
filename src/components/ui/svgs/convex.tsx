import type { SVGProps } from "react";

const Convex = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256">
    <rect width="256" height="256" fill="#111827" rx="20" />
    <polygon
      points="128,40 210,90 210,170 128,216 46,170 46,90"
      fill="#6366F1"
    />
    <circle cx="128" cy="128" r="30" fill="#111827" />
  </svg>
);

export { Convex };