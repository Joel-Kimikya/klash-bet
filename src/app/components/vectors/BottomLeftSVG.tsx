import React from "react";

const BottomLeftSVG = ({ className }: { className?: string }) => {
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
        d="M0.191071 0H200.191L189.278 8.81812C186.659 10.934 183.834 12.7813 180.846 14.332C172.278 18.7783 165.173 25.599 160.381 33.978L156.389 40.9565C142.58 65.1015 116.895 80 89.0799 80H0.191071V0Z"
        fill="#1B1D2C"
      />
    </svg>
  );
};

export default BottomLeftSVG;
