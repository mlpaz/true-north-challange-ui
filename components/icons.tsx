import * as React from "react";

import { IconSvgProps } from "@/types";

export const Logo = ({ size = 36, width, height, ...props }: IconSvgProps) => (
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

export const ExitIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    width={size || width}
    role="presentation"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      fill="currentColor"
      d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"
    />
  </svg>
);

export const DeleteIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 20 20"
    width="1em"
    {...props}
  >
    <path
      d="M17.5 4.98332C14.725 4.70832 11.9333 4.56665 9.15 4.56665C7.5 4.56665 5.85 4.64998 4.2 4.81665L2.5 4.98332"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      d="M7.08331 4.14169L7.26665 3.05002C7.39998 2.25835 7.49998 1.66669 8.90831 1.66669H11.0916C12.5 1.66669 12.6083 2.29169 12.7333 3.05835L12.9166 4.14169"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      d="M15.7084 7.61664L15.1667 16.0083C15.075 17.3166 15 18.3333 12.675 18.3333H7.32502C5.00002 18.3333 4.92502 17.3166 4.83335 16.0083L4.29169 7.61664"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      d="M8.60834 13.75H11.3833"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      d="M7.91669 10.4167H12.0834"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);

export const EyeIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 20 20"
    width="1em"
    {...props}
  >
    <path
      d="M12.9833 10C12.9833 11.65 11.65 12.9833 10 12.9833C8.35 12.9833 7.01666 11.65 7.01666 10C7.01666 8.35 8.35 7.01666 10 7.01666C11.65 7.01666 12.9833 8.35 12.9833 10Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      d="M9.99999 16.8916C12.9417 16.8916 15.6833 15.1583 17.5917 12.1583C18.3417 10.9833 18.3417 9.00831 17.5917 7.83331C15.6833 4.83331 12.9417 3.09998 9.99999 3.09998C7.05833 3.09998 4.31666 4.83331 2.40833 7.83331C1.65833 9.00831 1.65833 10.9833 2.40833 12.1583C4.31666 15.1583 7.05833 16.8916 9.99999 16.8916Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);

export const AddIcon = ({
  size = 16,
  width,
  height,
  ...props
}: IconSvgProps): React.ReactElement => (
  <svg
    viewBox="0 0 448 512"
    height={size || height}
    width={size || width}
    {...props}
  >
    <path
      fill="currentColor"
      d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
    />
  </svg>
);

export const SubstractionIcon = ({
  size = 16,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    viewBox="0 0 448 512"
    height={size || height}
    width={size || width}
    {...props}
  >
    <path
      fill="currentColor"
      d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
    />
  </svg>
);

export const MultiplicationIcon = ({
  size = 16,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    viewBox="0 0 384 512"
    height={size || height}
    width={size || width}
    {...props}
  >
    <path
      fill="currentColor"
      d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
    />
  </svg>
);

export const DivisionIcon = ({
  size = 16,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    viewBox="0 0 448 512"
    height={size || height}
    width={size || width}
    {...props}
  >
    <path
      fill="currentColor"
      d="M272 96a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 320a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM400 288c17.7 0 32-14.3 32-32s-14.3-32-32-32L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l352 0z"
    />
  </svg>
);

export const SquareRootIcon = ({
  size = 16,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    viewBox="0 0 576 512"
    height={size || height}
    width={size || width}
    {...props}
  >
    <path
      fill="currentColor"
      d="M282.6 78.1c8-27.3 33-46.1 61.4-46.1l200 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L344 96 238.7 457c-3.6 12.3-14.1 21.2-26.8 22.8s-25.1-4.6-31.5-15.6L77.6 288 32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l45.6 0c22.8 0 43.8 12.1 55.3 31.8l65.2 111.8L282.6 78.1zM393.4 233.4c12.5-12.5 32.8-12.5 45.3 0L480 274.7l41.4-41.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L525.3 320l41.4 41.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L480 365.3l-41.4 41.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 320l-41.4-41.4c-12.5-12.5-12.5-32.8 0-45.3z"
    />
  </svg>
);
