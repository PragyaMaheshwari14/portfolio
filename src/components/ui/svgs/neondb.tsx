import type { SVGProps } from "react";

const NeonDB = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256">
    <rect width="256" height="256" fill="#0F172A" rx="20" />
    <circle cx="128" cy="128" r="60" fill="#00E599" />
    <circle cx="128" cy="128" r="30" fill="#0F172A" />
  </svg>
);

export { NeonDB };