"use client";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { HiOutlineUsers } from "@react-icons/all-files/hi/HiOutlineUsers";
import { AiOutlineSafetyCertificate } from "@react-icons/all-files/ai/AiOutlineSafetyCertificate";
import { AiOutlineQuestionCircle } from "@react-icons/all-files/ai/AiOutlineQuestionCircle";
import { BiMessageSquareDetail } from "@react-icons/all-files/bi/BiMessageSquareDetail";
import { RiBaseStationLine } from "@react-icons/all-files/ri/RiBaseStationLine";
import { FaTelegramPlane } from "@react-icons/all-files/fa/FaTelegramPlane";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { GiSpeaker } from "@react-icons/all-files/gi/GiSpeaker";
import { MdGames } from "@react-icons/all-files/md/MdGames";
import { BiMoney } from "@react-icons/all-files/bi/BiMoney";
import LanguageSelector from "../widgets/LanguageSelector";

const TopBar = () => {
  return (
    <header className="md:min-w-full min-w-[100%] flex justify-between text-xs text-gray-400 font-thin px-5 md:py-2 py-3 bg-primary h-auto fixed z-[99999]">
      <TopLeft />
      <TopRight />
      <div className="absolute left-auto right-auto top-0 w-full -z-10">
        <Logo />
      </div>
    </header>
  );
};

export default TopBar;

const TopLeft = () => {
  return (
    <div className='flex lg:space-x-4 space-x-0  items-center z-50'>
      {[
        {
          title: "3 965 online",
          icon: <RiBaseStationLine className=' text-xl cursor-pointer lg:block hidden' />,
        },
        {
          title: "4.5M players",
          icon: <HiOutlineUsers className='text-lg lg:block hidden' />,
        },
        {
          title: "1.2B games",
          icon: <MdGames className='text-lg lg:block hidden' />,
        },
        {
          title: "2.1M won Today",
          icon: <BiMoney className='text-lg lg:block hidden' />,
        },
      ].map(({ icon, title }, key) => (
        <Link
          key={key}
          href='/'
          className='text-xs flex items-center space-x-1 text-white/75 hover:text-blue-light ease duration-200 hover:glow'>
          { icon } <p className="lg:text-md md:text-[11px] md:block hidden">{ title }</p>
        </Link>
      ))}
      <span className="md:hidden block text-xl pl-3">3 965 online</span>
    </div>
  );
};

const TopRight = () => {
  return (
    <div className="flex flex-row space-x-4 items-center z-50  text-white/75">
      <div className="flex space-x-4">
        <div className="hover:text-blue-light ease duration-200 hover:glow lg:block hidden">
          <Link href="/">% About CashBack</Link>
        </div>
        <div className="flex items-center space-x-1  hover:text-blue-light transition ease-out duration-300 hover:glow ">
          <AiOutlineSafetyCertificate className="text-lg lg:block hidden" />
          <Link href="/" className="lg:block hidden">Fairness</Link>
        </div>
        <div className="flex items-center space-x-1  hover:text-blue-light etransition ease-out duration-300 hover:glow">
          <BiMessageSquareDetail className="text-lg lg:block hidden" />
          <Link href="/" className="lg:block hidden">Reviews</Link>
        </div>
        <div className="flex items-center space-x-1  hover:text-blue-light transition ease-out duration-300 hover:glow">
          <AiOutlineQuestionCircle className="text-lg  md:block hidden" />
          <Link href="/" className=" md:block hidden">Help</Link>
        </div>
      </div>
      <SocialMedia />
      <div className="flex flex-row -pt-1 space-x-3">
        <LanguageSelector />
        <span className="text-xl cursor-pointer hover:text-blue-light  md:block hidden">
          <GiSpeaker />
        </span>
      </div>
    </div>
  );
};

const SocialMedia = () => {
  return (
    <div className="flex space-x-2 md:text-[1rem] text-[1.6rem] items-center justify-center">
      <a
        href="#"
        target="_blank"
        className="hover:text-blue-400 ease duration-300 md:block hidden"
      >
        <FaTelegramPlane />
      </a>
      <a
        href="#"
        target="_blank"
        className="hover:text-red-400 ease duration-300"
      >
        <FaInstagram />
      </a>
      <a
        href="#"
        target="_blank"
        className="hover:text-blue-light ease duration-300"
      >
        <AiOutlineTwitter />
      </a>
    </div>
  );
};
