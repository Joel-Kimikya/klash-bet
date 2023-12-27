import React from "react";

const BottomRightSVG = ({ className }: { className?: string }) => {
  return (
    <svg
      width="200"
      height="60"
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M200 0H0L10.9135 8.81812C13.5322 10.934 16.357 12.7813 19.3452 14.332C27.9129 18.7783 35.018 25.599 39.8104 33.978L43.8018 40.9565C57.6115 65.1015 83.2959 80 111.111 80H200V0Z"
        fill="#1B1D2C"
      />
    </svg>
  );
};

export default BottomRightSVG;
