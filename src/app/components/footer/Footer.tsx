import React from "react";
import Link from "next/link";
import { FaArrowUp } from "@react-icons/all-files/fa/FaArrowUp";
import { RiPinterestLine } from "@react-icons/all-files/ri/RiPinterestLine";
import { GiCompanionCube } from "@react-icons/all-files/gi/GiCompanionCube";
import { DiCompass } from "@react-icons/all-files/di/DiCompass";
import { SiWebmoney } from "@react-icons/all-files/si/SiWebmoney";
import { SiGooglestreetview } from "@react-icons/all-files/si/SiGooglestreetview";
import BottomLeftSVG from "../vectors/BottomLeftSVG";
import BottomRightSVG from "../vectors/BottomRightSVG";

const CustomLink = ({ href = "", title = "" }) => {
  return (
    <Link
      href={href}
      className={
        "border-b-2 border-white/20 hover:text-white/90 lg:text-sm md:text-[10px] transition ease-out duration-300 py-1 hover:glow"
      }
    >
      {title}
    </Link>
  );
};

const Footer = () => {
  return (
    <div className="w-full h-full space-y-2">
      <div className="w-full h-full flex flex-row justify-between text-xs text-white/50">
        <div className="md:block hidden">
        <div className="relative w-auto font-extrabold text-white flex items-center justify-center">
          <BottomLeftSVG />
          <p className="flex absolute -top-2 justify-start items-center h-full w-full px-2 space-x-1 text-2xl font-extrabold selection:bg-green-700">
            KLASH
            <span className="text-blue-light">-BET</span>
          </p>
        </div>
        </div>
        <div className="lg:space-x-5 md:space-x-2 w-full flex justify-center items-center">
          {[
            {
              href: "#",
              title: "Terms of Service",
            },
            {
              href: "#",
              title: "Privacy Policy",
            },
            {
              href: "#",
              title: "Sportsbetting T&C",
            },
            {
              href: "#",
              title: "KYC Policy",
            },
            {
              href: "#",
              title: "Fairness",
            },
          ].map(({ href, title }, key) => (
            <CustomLink
              key={key}
              href={href}
              title={title}
            />
          ))}
        </div>
        <div className="md:block hidden">
        <div className="relative w-auto font-extrabold flex justify-center items-center -mt-8">
          <BottomRightSVG />
          <div className="absolute -top- right-3 flex flex-col items-center space-y-1 px-12 w-auto h-full justify-center drop-shadow-glow">
            <Link
              href="#"
              className="text-2xl text-blue-light hover:text-blue-light/70"
            >
              <FaArrowUp />
            </Link>
            <p className="text-white/70 text-xs font-bold">Top</p>
          </div>
        </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col space-y-5 justify-between items-center">
        <div className="flex flex-row space-x-4 justify-center items-center text-gray-700 text-3xl">
          <RiPinterestLine className="cursor-pointer hover:text-gray-400" />
          <GiCompanionCube className="cursor-pointer hover:text-gray-400" />
          <DiCompass className="cursor-pointer hover:text-gray-400" />
          <SiGooglestreetview className="cursor-pointer hover:text-gray-400" />
          <SiWebmoney className="cursor-pointer hover:text-gray-400" />
          <RiPinterestLine className="cursor-pointer hover:text-gray-400" />
          <GiCompanionCube className="cursor-pointer hover:text-gray-400" />
          <DiCompass className="cursor-pointer hover:text-gray-400" />
          <SiWebmoney className="cursor-pointer hover:text-gray-400" />
          <SiGooglestreetview className="cursor-pointer hover:text-gray-400" />
          <DiCompass className="cursor-pointer hover:text-gray-400" />
        </div>
        <div className="text-gray-600 text-xs font-bold">
          <span> KL-B</span>
          <span> &copy; {new Date().getFullYear()}</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
