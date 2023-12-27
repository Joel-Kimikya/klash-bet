import React from "react";

export const metadata = {
  title: "About Us - Page",
};

const AboutUsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p>About Us - Layout</p>
      {children}
    </div>
  );
};

export default AboutUsLayout;
