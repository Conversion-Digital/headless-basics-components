interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const SearchIcon = (props: IconProps) => (
  <svg
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.97 16.545a9.014 9.014 0 1 1 2.198-2.045l3.982 3.983-2.122 2.12-4.058-4.058Zm1.483-7.53a6.439 6.439 0 1 1-12.877 0 6.439 6.439 0 0 1 12.877 0Z"
      fill="#043176"
    />
  </svg>
)

export const HamburgerIcon = (props: IconProps) => (
  <svg
    width="22"
    height="16"
    viewBox="0 0 22 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M22 0H0v4h22V0Zm0 6H0v4h22V6Zm0 6H0v4h22v-4Z" fill="#FAA634" />
  </svg>
)

export const CloseIcon = (props: IconProps) => (
  <svg
    width="19"
    height="19"
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.556 0 0 15.556l2.828 2.829L18.385 2.828 15.556 0Z"
      fill="#FAA634"
    />
    <path
      d="M18.384 15.556 2.829 0 0 2.828l15.556 15.557 2.829-2.829Z"
      fill="#FAA634"
    />
  </svg>
)

export const BlackCloseIcon = (props: IconProps) => (
  <svg
    width="51"
    height="51"
    viewBox="0 0 51 51"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="uil:times">
      <path
        id="Vector"
        d="M28.4962 25.5L37.6337 16.3838C38.0339 15.9836 38.2587 15.4409 38.2587 14.875C38.2587 14.3091 38.0339 13.7664 37.6337 13.3663C37.2336 12.9661 36.6909 12.7413 36.125 12.7413C35.5591 12.7413 35.0164 12.9661 34.6162 13.3663L25.5 22.5038L16.3837 13.3663C15.9836 12.9661 15.4409 12.7413 14.875 12.7413C14.3091 12.7413 13.7664 12.9661 13.3662 13.3663C12.9661 13.7664 12.7413 14.3091 12.7413 14.875C12.7413 15.4409 12.9661 15.9836 13.3662 16.3838L22.5037 25.5L13.3662 34.6163C13.1671 34.8138 13.009 35.0489 12.9011 35.3078C12.7932 35.5668 12.7377 35.8445 12.7377 36.125C12.7377 36.4056 12.7932 36.6833 12.9011 36.9423C13.009 37.2012 13.1671 37.4362 13.3662 37.6338C13.5638 37.8329 13.7988 37.991 14.0578 38.0989C14.3167 38.2068 14.5945 38.2623 14.875 38.2623C15.1555 38.2623 15.4333 38.2068 15.6922 38.0989C15.9512 37.991 16.1862 37.8329 16.3837 37.6338L25.5 28.4963L34.6162 37.6338C34.8138 37.8329 35.0488 37.991 35.3078 38.0989C35.5667 38.2068 35.8445 38.2623 36.125 38.2623C36.4055 38.2623 36.6833 38.2068 36.9422 38.0989C37.2012 37.991 37.4362 37.8329 37.6337 37.6338C37.8329 37.4362 37.991 37.2012 38.0989 36.9423C38.2068 36.6833 38.2623 36.4056 38.2623 36.125C38.2623 35.8445 38.2068 35.5668 38.0989 35.3078C37.991 35.0489 37.8329 34.8138 37.6337 34.6163L28.4962 25.5Z"
        fill="#3D3D3E"
      />
    </g>
  </svg>
)

export const ChatIcon = (props: IconProps) => (
  <svg
    width={46}
    height={46}
    viewBox="0 0 46 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx={23}
      cy={23}
      r={23}
      transform="rotate(-90 23 23)"
      fill="#FAA634"
    />
    <path
      d="M22.5 12C28.841 12 34 16.486 34 22c0 2.217-.855 4.373-2.419 6.124l2.288 2.874c.332.416-.022 1.002-.603 1.002H22.5C16.159 32 11 27.514 11 22s5.159-10 11.5-10Z"
      fill="#fff"
    />
  </svg>
)

export const BackToTop = (props: IconProps) => (
  <svg
    width={60}
    height={46}
    viewBox="0 0 60 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx={30}
      cy={23}
      r={23}
      transform="rotate(-90 30 23)"
      fill="#FAA634"
    />
    <text
      x={30}
      y={37}
      textAnchor="middle"
      fontSize={13}
      letterSpacing=".1em"
      fontWeight="bold"
      fill="#043176"
    >
      {"TOP"}
    </text>
    <path d="M41.642 19.821 29.822 8 18 19.821" stroke="#fff" strokeWidth={4} />
  </svg>
)
