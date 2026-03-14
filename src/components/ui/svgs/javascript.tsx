import type { SVGProps } from "react";

const Javascript = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256">
    <rect width="256" height="256" fill="#F7DF1E" rx="20" />
    <path
      fill="#000"
      d="M67 214l19-11c4 7 8 13 18 13 9 0 14-4 14-17v-92h24v93c0 28-16 41-39 41-20 0-31-10-37-22m88-3l19-11c5 8 11 14 22 14 9 0 15-4 15-10 0-7-6-10-17-15l-6-3c-18-8-29-18-29-38 0-19 14-33 37-33 16 0 27 6 35 20l-19 12c-4-7-9-10-16-10-7 0-12 4-12 10 0 7 5 10 16 15l6 3c21 9 32 19 32 40 0 23-18 35-42 35-23 0-37-11-44-25"
    />
  </svg>
);

export { Javascript };