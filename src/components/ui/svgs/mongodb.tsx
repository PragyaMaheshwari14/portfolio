import type { SVGProps } from "react";

const MongoDB = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256">
    <rect width="256" height="256" fill="#001E2B" rx="20" />
    <path
      fill="#47A248"
      d="M128 30c20 45 48 78 48 120 0 35-21 61-48 76-27-15-48-41-48-76 0-42 28-75 48-120z"
    />
    <path
      fill="#fff"
      d="M128 60c10 25 20 45 20 70 0 21-9 37-20 45-11-8-20-24-20-45 0-25 10-45 20-70z"
      opacity=".3"
    />
  </svg>
);

export { MongoDB };