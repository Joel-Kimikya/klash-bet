import React from "react";

const SectionTopEdge = ({ className }: { className?: string }) => {
  return (
    <svg
      width="220"
      height="48"
      viewBox="0 0 220 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0 11.94C0 6.34152 0 3.54228 1.72417 1.79081C1.74621 1.76842 1.76842 1.74621 1.79081 1.72417C3.54228 0 6.34152 0 11.94 0H220L183.576 25.92L154.582 45.8928C153.072 46.933 152.317 47.4531 151.456 47.7238C151.445 47.7274 151.433 47.731 151.422 47.7345C150.559 48 149.642 48 147.809 48H0V11.94Z"
        fill="#03071C"
      />
    </svg>
  );
};

export default SectionTopEdge;
