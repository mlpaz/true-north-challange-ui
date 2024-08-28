import * as React from "react";

import { IconSvgProps } from "@/types";

export const Logo: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    height={size || height}
    viewBox="0 0 2048 2048"
    width={size || width}
    {...props}
  >
    <path
      transform="translate(1017,704)"
      d="m0 0h12l16 3 14 7 11 9 9 12 8 18 12 35 17 48 20 57 17 48 19 54 17 48 19 54 17 48 19 54 17 48 19 54 17 48 19 54 17 48 19 54 17 48 19 54 17 48 19 54 12 33 10 29 19 54 5 15 1 5v22l-4 13-7 13-9 10-9 6-13 5-9 2-17 1-14-2-12-4-11-6-42-32-12-9-21-16-24-18-21-16-16-12-21-16-28-21-21-16-12-9-21-16-19-14-13-10-16-12-13-10-12-9-21-16-7-5-5 1-11 8-21 16-19 14-13 10-36 27-17 13-32 24-21 16-44 33-21 16-19 14-21 16-19 14-13 10-20 15-17 12-11 5-10 3-7 1h-18l-14-3-14-7-10-9-7-9-6-12-3-12v-19l4-15 15-43 17-48 14-40 34-96 14-40 34-96 14-40 34-96 14-40 34-96 14-40 34-96 14-40 34-96 14-40 34-96 10-28 6-16 5-10 8-10 9-8 16-8z"
      fill="#D62B40"
    />
    <path
      transform="translate(856,128)"
      d="m0 0h15l15 3 15 8 13 12 11 13 18 22 12 14 8 10 11 13 9 11 11 13 11 14 9 10 8 10 12 14 8 10 12 14 8 10 12 14 8 10 12 14 8 10 13 15 4 5 1-214 3-12 4-9 5-8 9-10 9-7 12-6 13-3h17l14 3 15 8 11 10 7 10 6 12 3 16v390l-1 14-4 12-7 12-8 9-14 9-14 5-14 2-15-1-15-5-11-7-9-8-9-11-12-14-14-17-12-14-8-10-12-14-8-10-11-13-9-11-11-13-9-11-11-13-9-11-11-13-9-11-11-13-11-14-9-10-9-11-11-14-2-1v205l-2 18-5 12-6 10-13 13-16 8-10 3-17 1-16-3-14-7-11-9-8-10-7-14-3-14v-399l4-16 7-13 11-12 10-7 10-5z"
      fill="currentColor"
    />
  </svg>
);

export const MoonFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

export const SunFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);
