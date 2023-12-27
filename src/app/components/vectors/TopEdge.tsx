import React from "react";

type ITop = { className?: string; fill: string };
const TopEdge = ({ className, fill }: ITop) => {
  return (
    <svg
      width="150"
      height="48"
      viewBox="0 0 150 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0 11.94C0 6.34152 0 3.54228 1.72417 1.79081C1.74621 1.76842 1.76842 1.74621 1.79081 1.72417C3.54228 0 6.34152 0 11.94 0H150L125.166 25.92L106.816 44.4594C105.096 46.1971 104.236 47.066 103.14 47.5282C103.126 47.5343 103.111 47.5404 103.096 47.5464C101.997 48 100.775 48 98.3296 48H0V11.94Z"
        fill={fill}
      />
    </svg>
  );
};

export default TopEdge;
