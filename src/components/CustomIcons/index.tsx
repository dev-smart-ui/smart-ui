type SvgIconsProps = {
  height?: number;
  width?: number;
  // eslint-disable-next-line react/no-unused-prop-types
  fill?: string;
};

export const Icons = {
  MainArrow: ({ height = 32, width = 32, fill = '#F8F8F8' }: SvgIconsProps) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 16.5C4 15.6716 4.44772 15 5 15H27C27.5523 15 28 15.6716 28 16.5C28 17.3284 27.5523 18 27 18H5C4.44772 18 4 17.3284 4 16.5Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 6.72307C17.3906 6.33254 18.3166 6.33255 18.7072 6.72307L27.7072 15.3304C28.0977 15.7209 28.0977 17.2743 27.7072 17.6649L18.7072 26.1373C18.3166 26.5278 17.3906 26.5278 17 26.1373C16.6095 25.7468 16.6095 24.8906 17 24.5001L25.5858 16.4302L17 8.50013C16.6095 8.1096 16.6095 7.11359 17 6.72307Z"
        fill={fill}
      />
    </svg>
  ),
  Sun: ({ height = 18, width = 18 }: SvgIconsProps) => (
    <svg
      width={height}
      height={width}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_581_41)">
        <path
          d="M9 13C11.2091 13 13 11.2091 13 9C13 6.79086 11.2091 5 9 5C6.79086 5 5 6.79086 5 9C5 11.2091 6.79086 13 9 13Z"
          stroke="#F8F8F8"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 1V2"
          stroke="#F8F8F8"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 16V17"
          stroke="#F8F8F8"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 3L4 4"
          stroke="#F8F8F8"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 14L15 15"
          stroke="#F8F8F8"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 9H2"
          stroke="#F8F8F8"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 9H17"
          stroke="#F8F8F8"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 15L4 14"
          stroke="#F8F8F8"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 4L15 3"
          stroke="#F8F8F8"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_581_41">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
};
