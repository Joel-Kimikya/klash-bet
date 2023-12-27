import React from "react";

export const metadata = {
  title: "Terms and Conditions - Page",
};

const TermsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p>Terms and Conditions Layout</p>
      {children}
    </div>
  );
};

export default TermsLayout;
