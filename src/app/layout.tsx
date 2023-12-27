import "./globals.css";
import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Klash Bet",
  description: "Number 1 Sports Betting Website",
  keywords: "betting, sports, jackpot, bukavu, klashbet",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={poppins.className}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
