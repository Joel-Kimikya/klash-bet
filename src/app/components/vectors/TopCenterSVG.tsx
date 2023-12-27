import React from "react";

const TopCenterSVG = ({ className }: { className?: string }) => {
  return (
    <svg
      width="300"
      height="60"
      viewBox="0 0 300 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0 0H300L274.219 38.8225C257.46 64.0598 227.883 77.6654 197.815 73.969L153.906 68.5714L97.0588 74.5114C65.1987 77.8405 34.4246 61.8434 18.8445 33.854L0 0Z"
        fill="#03071C"
      />
    </svg>
  );
};

export default TopCenterSVG;
